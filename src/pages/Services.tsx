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
      <header>
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-blue-900 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
          </div>
        </motion.div>
      </header>

      <main>
        {/* Technical Services Section */}
        <section aria-label="Technical Services" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Engineering Section */}
        <section aria-label="Social Engineering Services" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Social Engineering Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialServices.map((service, index) => (
                <ServiceCard
                  key={index + 3}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  index={index + 3}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section aria-label="Security Testing Process" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Security Testing Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to identifying and addressing security vulnerabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mx-auto mb-4"
                  >
                    <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Contact Us" className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to enhance your security?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for a comprehensive security assessment
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

const process = [
  {
    title: 'Reconnaissance',
    description: 'We gather intelligence and map out potential attack vectors in your system.'
  },
  {
    title: 'Attack Execution',
    description: 'We perform controlled attacks to identify vulnerabilities and security weaknesses.'
  },
  {
    title: 'Vulnerability Analysis',
    description: 'We analyze discovered vulnerabilities and assess their potential impact.'
  },
  {
    title: 'Detailed Reporting',
    description: 'We provide comprehensive reports with findings and remediation recommendations.'
  }
];