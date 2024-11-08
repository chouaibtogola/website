import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Mail, Phone, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <header>
        <motion.div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Ready to Secure Your Digital Assets?</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl text-gray-600"
          >
            Send us an email with your requirements or connect with us on LinkedIn. We'll get back to you within 24 hours.
          </motion.p>
        </motion.div>
      </header>
      <main>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a 
                  href="mailto:redhatexpertise@proton.me"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  redhatexpertise@proton.me
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg 
                className="w-6 h-6 text-blue-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/chouaib-youssouf-togola-3a6664336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Message me on LinkedIn
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Feel free to connect and send a direct message
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(+223) 77544177</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Global operations</p>
              </div>
            </div>
          </motion.div>

          {/* What to Include Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">What to Include in Your Email:</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Your name and company name</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Type of security service needed</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Brief description of your project/requirements</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Web application URL (if applicable)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Preferred contact method</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
