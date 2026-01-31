import { Shield, Target, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const industryGroups = [
  {
    category: 'Financial & Payment Systems',
    sectors: 'Banking, FinTech, Payment Processing, Digital Wallets',
    icon: Shield
  },
  {
    category: 'Healthcare & Life Sciences',
    sectors: 'Hospitals, Health Tech, Medical Devices, Research',
    icon: Shield
  },
  {
    category: 'Technology & Infrastructure',
    sectors: 'SaaS, Cloud Providers, E-commerce, Government',
    icon: Shield
  }
];

const coreServices = [
  {
    id: 'pentest',
    title: 'Penetration Testing',
    tagline: 'Find vulnerabilities before attackers do',
    details: 'Comprehensive testing of networks, applications, and infrastructure using industry-standard methodologies. OWASP Top 10, network scanning, privilege escalation, and detailed remediation guidance.',
    icon: Target
  },
  {
    id: 'social',
    title: 'Social Engineering',
    tagline: 'Test your human firewall',
    details: 'Phishing simulations, pretexting, physical access testing, and security awareness training. Measure and improve employee response to social engineering attacks.',
    icon: Shield
  },
  {
    id: 'assessment',
    title: 'Vulnerability Assessment',
    tagline: 'Continuous security monitoring',
    details: 'Automated and manual vulnerability scanning with expert analysis. Prioritized findings, risk ratings, and actionable remediation plans aligned with your business context.',
    icon: Search
  }
];

const process = [
  { step: '01', title: 'Scope Definition', description: 'Define objectives, systems, and rules of engagement' },
  { step: '02', title: 'Assessment', description: 'Execute testing using manual and automated techniques' },
  { step: '03', title: 'Reporting', description: 'Detailed findings with risk ratings and remediation steps' },
  { step: '04', title: 'Remediation Support', description: 'Guidance and validation of security improvements' }
];

const principles = [
  { title: 'Authorized Testing Only', description: 'We operate within strict legal and ethical boundaries' },
  { title: 'Real-World Methodology', description: 'Collaboration with security researchers and practitioners' },
  { title: 'Clear Communication', description: 'Technical findings translated for stakeholders at all levels' },
  { title: 'Confidentiality Guaranteed', description: 'Your data and findings remain strictly confidential' }
];

export default function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
              Enterprise-grade security testing for organizations that can't afford to be breached
            </h1>
            <p className="text-xl text-neutral-400 mb-10 font-light leading-relaxed">
              Independent penetration testing and security assessment services
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200"
            >
              Request Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Who We Protect</h2>
              <p className="text-3xl font-light text-neutral-900 max-w-2xl">
                Organizations with critical infrastructure and sensitive data
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 p-8 hover:border-neutral-300 transition-colors"
                >
                  <group.icon className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">
                    {group.category}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {group.sectors}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Core Services</h2>
              <p className="text-3xl font-light text-neutral-900 max-w-2xl">
                Comprehensive security testing tailored to your risk profile
              </p>
            </motion.div>

            <div className="space-y-4">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 bg-white"
                >
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="text-xl font-medium text-neutral-900">{service.title}</h3>
                        <p className="text-sm text-neutral-600 mt-1">{service.tagline}</p>
                      </div>
                    </div>
                    <div className={`transform transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6 pt-2 border-t border-neutral-100"
                    >
                      <p className="text-neutral-700 leading-relaxed">
                        {service.details}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Why RedHat Expertise</h2>
              <p className="text-3xl font-light text-neutral-900 max-w-2xl">
                Trusted methodology built on ethics and expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">Engagement Process</h2>
              <p className="text-3xl font-light text-neutral-900 max-w-2xl">
                Structured approach from scoping to remediation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-light text-red-600 mb-4">{item.step}</div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-light text-white mb-6">
                Ready to understand your security posture?
              </h2>
              <p className="text-xl text-neutral-400 mb-10 font-light">
                Let's discuss your security requirements and design an appropriate testing program.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
