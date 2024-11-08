import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Mail, Phone, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Ready to Secure Your Digital Assets?"
            className="text-4xl font-bold text-gray-900"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl text-gray-600"
          >
            Send us an email with your requirements and we'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

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
                <p className="text-gray-600">redhatexpertise@yahoo.com</p>
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
      </div>
    </div>
  );
}
