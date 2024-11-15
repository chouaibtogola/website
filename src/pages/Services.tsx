import { Shield, Wifi, Users, Lock, UserX, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const technicalServices = [
  {
    title: 'Penetration Testing',
    description: 'Comprehensive system penetration testing to identify vulnerabilities in your networks, applications, and infrastructure before malicious hackers do.',
    Icon: Shield
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Systematic scanning and evaluation of your systems to discover security weaknesses, followed by detailed remediation recommendations.',
    Icon: Wifi
  },
  {
    title: 'Web Application Security',
    description: 'In-depth testing of web applications against OWASP Top 10 vulnerabilities, including SQL injection, XSS, and authentication flaws.',
    Icon: Lock
  }
];

const socialServices = [
  {
    title: 'Phishing Simulations',
    description: 'Custom-designed phishing campaigns to test employee awareness and provide targeted training to strengthen your human firewall.',
    Icon: Users
  },
  {
    title: 'Social Engineering Testing',
    description: 'Comprehensive social engineering assessments including phone calls, physical access attempts, and USB drop tests.',
    Icon: UserX
  },
  {
    title: 'Security Awareness Training',
    description: 'Interactive training programs to educate your employees about security best practices and common attack vectors.',
    Icon: Bell
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Comprehensive Cybersecurity Services
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-4"
            >
              Professional security testing and assessment solutions to protect your digital infrastructure
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
      </header>

      <main>
        {/* Technical Services Section */}
        <section aria-label="Technical Services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6"
                  >
                    <service.Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Engineering Section */}
        <section aria-label="Social Engineering Services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Social Engineering Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6"
                  >
                    <service.Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Contact Us" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
              
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to enhance your security?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Contact us for a comprehensive security assessment
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}