import { Shield, Wifi, Users, Lock, UserX, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import AnimatedText from '../components/AnimatedText';

const services = [
  {
    title: 'Penetration Testing',
    description: 'Our expert team simulates real-world attacks to identify weaknesses in your systems, ensuring your defenses are robust against potential threats.',
    Icon: Shield
  },
  {
    title: 'Vulnerability Assessments',
    description: 'We meticulously analyze your infrastructure to pinpoint and prioritize security gaps, providing actionable insights for fortification.',
    Icon: Wifi
  },
  {
    title: 'Phishing Simulations',
    description: 'Through realistic phishing scenarios, we educate your employees on recognizing and responding to threats, reducing the risk of successful attacks.',
    Icon: Users
  },
  {
    title: 'OWASP Top 10 Assessment',
    description: 'We evaluate your applications against the OWASP Top 10, addressing common threats like SQL injection, cross-site scripting, and security misconfiguration.',
    Icon: Lock
  },
  {
    title: 'Social Engineering Testing',
    description: "We conduct social engineering assessments to evaluate your team's resilience against manipulative tactics aimed at breaching security protocols.",
    Icon: UserX
  },
  {
    title: '24/7 Monitoring',
    description: 'Continuous monitoring and rapid response to potential security threats, ensuring your systems are protected around the clock.',
    Icon: Bell
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Our Services"
            className="text-4xl font-bold text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mt-4"
          >
            Comprehensive cybersecurity solutions to protect your digital assets
          </motion.p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Security Testing Process"
              className="text-3xl font-bold text-gray-900"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 text-xl text-gray-600"
            >
              How we identify and report security vulnerabilities
            </motion.p>
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
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4"
                >
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedText
            text="Ready to enhance your security?"
            className="text-3xl font-bold text-white"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 mt-4"
          >
            Contact us for a comprehensive security assessment
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
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