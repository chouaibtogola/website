import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        
        <ParallaxSection
          className="relative bg-cover bg-center py-32"
          backgroundImage="linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              Professional Cybersecurity Services
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-gray-800 font-medium mb-8"
            >
              Protect your business with industry-leading security testing and assessments
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </ParallaxSection>
      </header>

      <main>
        <section aria-label="Mission Statement" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AnimatedText
                text="Connecting businesses with top-tier cybersecurity professionals"
                className="text-3xl font-bold text-gray-900"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mt-8"
              >
                We protect your digital assets with comprehensive security
                solutions tailored to your needs.
              </motion.p>
            </div>
          </div>
        </section>

        <section id="technical-services" aria-label="Technical Services" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical Security Testing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {technicalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6"
                  >
                    <Shield className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Link 
                    to="/services#penetration-testing"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Learn more about our penetration testing services
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="social-engineering" aria-label="Social Engineering Services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Social Engineering Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6"
                  >
                    <Shield className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <Link 
                    to="/services#social-engineering-testing"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Learn more about our social engineering services
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section aria-label="CTA Section" className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Ready to secure your business?"
            className="text-3xl font-bold text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 mt-4"
          >
            Get in touch with our experts today.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300"
            >
              Request Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const technicalServices = [
  {
    title: 'Penetration Testing',
    description:
      'Uncover hidden vulnerabilities through simulated real-world attacks on your systems and infrastructure.',
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Comprehensive scanning and analysis to identify security gaps in your systems.',
  },
  {
    title: 'OWASP Top 10 Assessment',
    description: 'Thorough evaluation of your web applications against the most critical security risks.',
  },
];

const socialServices = [
  {
    title: 'Phishing Simulations',
    description:
      'Test your team with sophisticated phishing campaigns that mimic real-world attacks. We help identify vulnerable employees and provide targeted training to strengthen your human firewall.',
  },
  {
    title: 'Social Engineering Testing',
    description:
      'Challenge your security culture with controlled social engineering attempts. We simulate various attack vectors to identify and fix human vulnerabilities before real attackers do.',
  },
  {
    title: 'Security Awareness Training',
    description: 'Transform your employees from security risks into your strongest defense line through engaging, interactive training programs tailored to your organization.',
  },
];