import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import CryptoJS from 'crypto-js';
import FormSubmission from './models/FormSubmission.js';

dotenv.config();

const app = express();

// Basic middleware
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());

// Security headers with relaxed settings for development
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// CORS configuration for WebContainer
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Increased limit for development
});
app.use('/api/submit', limiter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cyberguard')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation middleware
const validateForm = [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('company').trim().notEmpty().escape(),
  body('service').trim().notEmpty().escape(),
  body('message').trim().notEmpty().escape(),
  body('webAppLink').optional().isURL()
];

// Encrypt sensitive data
const encryptData = (text) => {
  return CryptoJS.AES.encrypt(text, process.env.ENCRYPTION_KEY || 'default-dev-key').toString();
};

// Form submission endpoint
app.post('/api/submit', validateForm, async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Encrypt sensitive data
    const encryptedData = {
      name: encryptData(req.body.name),
      email: encryptData(req.body.email),
      company: encryptData(req.body.company),
      service: req.body.service,
      webAppLink: req.body.webAppLink ? encryptData(req.body.webAppLink) : '',
      message: encryptData(req.body.message)
    };

    // Save to database
    const submission = new FormSubmission(encryptedData);
    await submission.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'redhatexpertise@outlook.com',
      subject: 'New Contact Form Submission',
      text: `
        New submission received:
        Name: ${req.body.name}
        Email: ${req.body.email}
        Company: ${req.body.company}
        Service: ${req.body.service}
        Web App Link: ${req.body.webAppLink || 'N/A'}
        Message: ${req.body.message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));