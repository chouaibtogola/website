import { motion } from 'framer-motion';
import { Shield, Search, Users, Lock, UserX } from 'lucide-react';

const pricingCategories = [
  {
    title: 'Penetration Testing',
    icon: Shield,
    packages: [
      {
        name: 'Basic Penetration Test',
        price: '$500 - $1,000',
        description: 'Single Web Application',
        features: [
          'OWASP Top 10 vulnerability testing',
          'Basic security assessment report',
          'Remediation recommendations',
          'Perfect for small businesses',
          '30 days of support'
        ],
        highlight: false
      },
      {
        name: 'Advanced Penetration Test',
        price: '$1,000 - $3,000',
        description: 'Multiple Web Apps or Systems',
        features: [
          'Complex vulnerability testing',
          'Social engineering components',
          'Detailed security assessment',
          'Priority support',
          '60 days of support'
        ],
        highlight: true
      },
      {
        name: 'Enterprise Penetration Test',
        price: '$3,000 - $10,000',
        description: 'Enterprise-Level Testing',
        features: [
          'Comprehensive multi-system testing',
          'Advanced threat modeling',
          'Executive summary report',
          'Dedicated security consultant',
          '90 days of support'
        ],
        highlight: false
      }
    ]
  },
  {
    title: 'Vulnerability Assessment',
    icon: Search,
    packages: [
      {
        name: 'Standard Assessment',
        price: '$300 - $800',
        description: 'Single Scan',
        features: [
          'Common vulnerability scanning',
          'Basic system check',
          'Periodic assessment',
          'Summary report'
        ]
      },
      {
        name: 'Full Assessment',
        price: '$1,000 - $2,500',
        description: 'Quarterly or Biannual',
        features: [
          'Continuous monitoring',
          'Regular system assessment',
          'Detailed reporting',
          'Remediation guidance'
        ]
      }
    ]
  },
  // ... Add other categories similarly
];

const longTermContracts = [
  {
    title: 'Small Business Package',
    subtitle: '1-50 employees',
    monthlyPrice: '$1,500 - $3,000/month',
    dailyRate: '$300 - $500/day',
    services: [
      'Monthly vulnerability scans',
      'Quarterly penetration testing',
      'Bi-annual phishing simulation',
      '10 hours of on-call support',
      'Incident response planning',
      'Security awareness training'
    ],
    description: 'Perfect for growing businesses needing essential security coverage',
    recommended: false
  },
  {
    title: 'Business Growth Package',
    subtitle: '50-200 employees',
    monthlyPrice: '$4,000 - $7,500/month',
    dailyRate: '$600 - $1,000/day',
    services: [
      'Bi-monthly vulnerability assessments',
      'Quarterly penetration tests',
      'Monthly phishing simulations',
      'On-demand social engineering tests',
      '20 hours of on-call support',
      'Priority incident response',
      'Customized security training'
    ],
    description: 'Comprehensive security solution for medium-sized businesses',
    recommended: true
  },
  {
    title: 'Enterprise Security Package',
    subtitle: '200+ employees',
    monthlyPrice: '$10,000 - $15,000+/month',
    services: [
      'Weekly vulnerability scans',
      'Quarterly penetration testing',
      'Continuous security monitoring',
      'Advanced threat hunting',
      'Unlimited support hours',
      'Dedicated security team',
      'Custom security solutions',
      'Executive reporting'
    ],
    description: 'Enterprise-grade security tailored to your organization',
    recommended: false
  }
];

export default function Pricing() {
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
              Transparent Security Pricing
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300"
            >
              Choose the perfect security package for your business
            </motion.p>
          </div>
        </motion.div>
      </header>

      <main className="py-16">
        {/* Individual Services Section */}
        {pricingCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <category.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.packages.map((pkg, pkgIndex) => (
                  <motion.div
                    key={pkgIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: pkgIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 ${
                      pkg.highlight ? 'border-2 border-blue-500 relative' : ''
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <p className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Long-Term Contracts Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Long-Term Contract Pricing</h2>
              <p className="mt-4 text-xl text-gray-600">Comprehensive security solutions tailored to your organization size</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {longTermContracts.map((contract, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{contract.title}</h3>
                    <p className="text-gray-600">{contract.subtitle}</p>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-blue-600">{contract.monthlyPrice}</p>
                      <p className="text-sm text-gray-600">Monthly Contract</p>
                    </div>
                    {contract.dailyRate && (
                      <div className="mt-2">
                        <p className="text-xl font-semibold text-gray-700">{contract.dailyRate}</p>
                        <p className="text-sm text-gray-600">Daily Rate for Additional Services</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Included Services:</h4>
                    <ul className="space-y-3">
                      {contract.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {contract.description && (
                    <p className="mt-6 text-sm text-gray-600 italic">{contract.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Custom Security Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hourly Consulting</h3>
                  <p className="text-gray-600">$100 - $200 per hour for specialized security consulting and additional analysis.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bundle Discount</h3>
                  <p className="text-gray-600">Save 10-15% when combining multiple services in a custom package.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 