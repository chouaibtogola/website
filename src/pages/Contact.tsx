import { motion } from 'framer-motion';
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="relative bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              Let's discuss your security requirements
            </h1>
            <p className="text-xl text-neutral-400 font-light">
              We'll get back to you within 24 hours
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Email</h3>
                  <a
                    href="mailto:redhatexpertise@proton.me"
                    className="text-neutral-600 hover:text-red-600 transition-colors"
                  >
                    redhatexpertise@proton.me
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Phone</h3>
                  <p className="text-neutral-600">(+1) 742-688-2239</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-1">Location</h3>
                  <p className="text-neutral-600">Global operations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="md:col-span-2 bg-white border border-neutral-200 p-12"
            >
              <h2 className="text-2xl font-light text-neutral-900 mb-8">Send us your details</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Service Type</label>
                  <select className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:border-red-600 transition-colors bg-white">
                    <option>Select a service</option>
                    <option>Penetration Testing</option>
                    <option>Vulnerability Assessment</option>
                    <option>Social Engineering Testing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="Tell us about your security requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
