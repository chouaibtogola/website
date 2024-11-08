import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

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
            text="Contact Us"
            className="text-4xl font-bold text-gray-900"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl text-gray-600"
          >
            Get in touch with our security experts
          </motion.p>
        </motion.div>
        
        {/* Add your contact form or contact information here */}
      </div>
    </div>
  );
}
