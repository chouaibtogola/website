import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

export default function Terms() {
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
              Terms of Service
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              Guidelines for using our services
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
            <h2>Service Agreement</h2>
            <p>
              By engaging our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate information about your systems</li>
              <li>Maintain confidentiality of assessment results</li>
              <li>Use our services only for authorized systems</li>
              <li>Follow security recommendations provided</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2>Scope of Services</h2>
            <p>
              Our security assessment services include:
            </p>
            <ul>
              <li>Penetration testing of specified systems</li>
              <li>Vulnerability assessments</li>
              <li>Social engineering simulations</li>
              <li>Security awareness training</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2>Limitations of Liability</h2>
            <p>
              While we strive for excellence in our security assessments:
            </p>
            <ul>
              <li>We cannot guarantee 100% detection of all vulnerabilities</li>
              <li>Results are based on conditions at the time of testing</li>
              <li>Implementation of recommendations is your responsibility</li>
            </ul>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
