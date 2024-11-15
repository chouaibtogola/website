import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParallaxSection from '../components/ParallaxSection';

const features = [
  {
    title: 'Expert Security Team',
    description: 'Our certified security professionals bring years of experience in protecting businesses.',
    icon: Shield
  },
  {
    title: 'Comprehensive Testing',
    description: 'From penetration testing to social engineering, we cover all aspects of cybersecurity.',
    icon: Shield
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support to ensure your systems stay protected.',
    icon: Shield
  }
];

const industryTargets = [
  {
    industry: 'Financial Technology',
    description: 'Protect sensitive financial data and ensure compliance with industry regulations.',
    examples: 'Banks, Payment Processors, Digital Wallets'
  },
  {
    industry: 'Healthcare',
    description: 'Safeguard patient data and maintain HIPAA compliance.',
    examples: 'Hospitals, Clinics, Health Tech Companies'
  },
  {
    industry: 'E-commerce',
    description: 'Secure customer transactions and protect user data.',
    examples: 'Online Retailers, Marketplaces, Digital Stores'
  },
  {
    industry: 'Government',
    description: 'Protect critical infrastructure and sensitive information.',
    examples: 'Government Agencies, Public Services, Defense'
  },
  {
    industry: 'Education',
    description: 'Secure student data and protect online learning platforms.',
    examples: 'Universities, Online Learning Platforms, Schools'
  },
  {
    industry: 'Technology',
    description: 'Protect intellectual property and maintain service integrity.',
    examples: 'SaaS Companies, Cloud Providers, Software Developers'
  }
];

const technicalServices = [
  {
    title: 'Penetration Testing',
    description: 'Comprehensive system penetration testing to identify vulnerabilities in your networks, applications, and infrastructure.',
    Icon: Shield
  },
  {
    title: 'Vulnerability Assessment',
    description: 'Systematic scanning and evaluation of your systems to discover security weaknesses.',
    Icon: Shield
  },
  {
    title: 'Web Application Security',
    description: 'In-depth testing of web applications against OWASP Top 10 vulnerabilities.',
    Icon: Shield
  }
];

const socialServices = [
  {
    title: 'Phishing Simulations',
    description: 'Custom-designed phishing campaigns to test employee awareness and provide targeted training.',
    Icon: Shield
  },
  {
    title: 'Social Engineering Testing',
    description: 'Comprehensive social engineering assessments including phone calls and physical access attempts.',
    Icon: Shield
  },
  {
    title: 'Security Awareness Training',
    description: 'Interactive training programs to educate your employees about security best practices.',
    Icon: Shield
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Gradient */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Secure Your Digital Future
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium mb-12 max-w-3xl mx-auto">
              Professional cybersecurity services to protect your business from evolving threats
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-100 hover:bg-blue-900/50 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
      </header>

      <main>
        {/* Industries Section */}
        <section aria-label="Industries We Serve" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedText
                text="Industries That Need Our Services"
                className="text-3xl font-bold text-gray-900"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 text-xl text-gray-600"
              >
                Protecting businesses across all sectors from cyber threats
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryTargets.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.industry}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <div className="text-sm text-gray-500 italic">
                    {industry.examples}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Services Section */}
        <section id="technical-services" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical Security Testing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section id="social-engineering" className="bg-gray-50 py-16">
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

        {/* CTA Section with Modern Design */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
              
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get in touch with our security experts today
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Contact Us
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