import { Shield, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

export default function About() {
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
              About Us
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Leading the way in cybersecurity excellence
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Who We Are
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                What sets us apart from other firms is our unique collaboration with both cybersecurity professionals and ethical hackers, allowing us to simulate real-world attacks for more authentic and effective security assessments.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Our team comprises experienced cybersecurity professionals dedicated to safeguarding your digital assets. With years of experience in the field, we understand the evolving nature of cyber threats and stay ahead of potential risks.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-6">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-8 transition-all duration-300 border border-blue-100"
                >
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-800 mb-6 rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

const stats = [
  {
    value: 'Trusted',
    label: 'By Clients',
    icon: Shield
  },
  {
    value: '50+',
    label: 'Security Experts',
    icon: Users
  },
  {
    value: '24/7',
    label: 'Support',
    icon: Clock
  },
  {
    value: '100%',
    label: 'Success Rate',
    icon: Award
  }
];

const values = [
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparency in all our operations.'
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve our methods to stay ahead of emerging cyber threats.'
  },
  {
    title: 'Excellence',
    description: 'We are committed to delivering exceptional results that exceed expectations.'
  }
];