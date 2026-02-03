import { Users, AlertCircle, Lock, Phone, FileText, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const primaryServices = [
  {
    title: 'Phishing Simulations',
    description: 'Targeted email attack campaigns designed to mimic real-world threats. Test click-through rates, credential harvesting, and employee susceptibility with full analytics and reporting.',
    Icon: AlertCircle,
    details: [
      'Custom email templates based on real threats',
      'Multi-stage campaign tracking',
      'Detailed click and submission analytics',
      'Pre and post-campaign training recommendations',
      'Department-level reporting and insights'
    ]
  },
  {
    title: 'Voice & Pretexting',
    description: 'Phone-based social engineering tests to evaluate how employees handle authority, urgency, and trust manipulation. Test information disclosure and process compliance.',
    Icon: Phone,
    details: [
      'Custom pretext scenarios aligned to your industry',
      'Trained social engineers performing calls',
      'Recording and documentation (with consent)',
      'Detailed analysis of employee responses',
      'Recommendations for policy improvements'
    ]
  },
  {
    title: 'Personnel Security Testing',
    description: 'Comprehensive assessment of how your organization handles sensitive information, badge access, credential sharing, and personnel vetting across departments.',
    Icon: Users,
    details: [
      'Physical security and badge access testing',
      'Sensitive document discovery in unsecured areas',
      'Badge/credential replication assessment',
      'Personnel information leakage evaluation',
      'Cross-departmental security culture analysis'
    ]
  }
];

const supportingServices = [
  {
    title: 'Security Awareness Training',
    description: 'Custom training programs developed from your assessment findings to improve employee security behavior and organizational risk awareness.',
    Icon: TrendingUp
  },
  {
    title: 'Executive Briefings',
    description: 'High-level reporting designed for C-suite and board-level stakeholders, focusing on organizational risk and strategic recommendations.',
    Icon: FileText
  },
  {
    title: 'Remediation Validation',
    description: 'Follow-up testing to verify that security improvements and training interventions are actually reducing human attack surface.',
    Icon: Lock
  }
];

const methodology = [
  {
    phase: 'Planning & Authorization',
    description: 'Secure executive approval, define scope, establish legal agreements, and design realistic threat scenarios aligned to your industry and organizational context.'
  },
  {
    phase: 'Campaign Development',
    description: 'Create authentic attack scenarios based on real-world threats. Develop phishing templates, pretext narratives, and testing protocols with full documentation.'
  },
  {
    phase: 'Execution',
    description: 'Run authorized simulations with full safeguards. Monitor results in real-time, collect behavioral data, and document employee responses throughout campaigns.'
  },
  {
    phase: 'Analysis & Reporting',
    description: 'Comprehensive findings analysis, risk quantification, and actionable recommendations. Executive summary, detailed technical reports, and training curriculum development.'
  }
];

const whyHuman = [
  {
    statistic: '82%',
    insight: 'of breaches involve a human element'
  },
  {
    statistic: '3.4s',
    insight: 'average time from phishing email to credential entry'
  },
  {
    statistic: '60%',
    insight: 'of employees click malicious links in tests'
  },
  {
    statistic: '40%',
    insight: 'fall for social engineering pretexts'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="relative bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Human Attack Path Testing Services
            </h1>
            <p className="text-xl text-neutral-400 font-light">
              Authorized social engineering, phishing, and personnel security simulations designed to strengthen your organization
            </p>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Primary Services */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Core Services</h2>
              <p className="text-3xl font-light text-neutral-900">
                Three pillars of human attack surface assessment
              </p>
            </motion.div>

            <div className="space-y-8">
              {primaryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 p-8 lg:p-12"
                >
                  <div className="flex gap-6 mb-6">
                    <service.Icon className="h-8 w-8 text-red-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-neutral-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="ml-14 grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-neutral-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Services */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Supporting Services</h2>
              <p className="text-3xl font-light text-neutral-900">
                Beyond testing: training, reporting, and validation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 bg-white p-8"
                >
                  <service.Icon className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Human Attack Paths */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">The Human Factor</h2>
              <p className="text-3xl font-light text-neutral-900">
                Why organizations invest in human attack path testing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {whyHuman.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 p-8 bg-white"
                >
                  <div className="text-4xl font-light text-red-600 mb-3">{item.statistic}</div>
                  <p className="text-neutral-700 font-light">{item.insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Our Process</h2>
              <p className="text-3xl font-light text-neutral-900">
                Structured approach to authorized human attack simulation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="border border-neutral-200 bg-white p-8">
                    <div className="text-sm font-medium text-red-600 mb-3">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-neutral-200 transform -translate-y-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">
                Ready to test your human attack surface?
              </h2>
              <p className="text-xl text-neutral-400 mb-10 font-light">
                Schedule a consultation to discuss your organization's security assessment needs
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
