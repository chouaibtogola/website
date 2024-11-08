import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <header>
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-blue-900 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              How we handle and protect your information
            </motion.p>
          </div>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <section>
            <h2>Information Collection and Use</h2>
            <p>
              We collect information to provide better services to our clients and improve our security assessments. The information we collect includes:
            </p>
            <ul>
              <li>Contact information provided through our contact form</li>
              <li>Technical information about security assessments</li>
              <li>Communication records between you and our team</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2>Data Protection</h2>
            <p>
              We implement robust security measures to protect your information:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure storage systems</li>
              <li>Limited access to personal information</li>
              <li>Regular security audits</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2>Information Sharing</h2>
            <p>
              We do not share your personal information with third parties except:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>When required by law</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
