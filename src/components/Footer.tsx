import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="ml-2 font-bold text-xl">RedHat</span>
            </div>
            <p className="text-gray-400">
              Professional cybersecurity services to protect your digital assets
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vulnerability Assessment
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Phishing Simulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:redhatexpertise@proton.me"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  redhatexpertise@proton.me
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/chouaib-youssouf-togola-3a6664336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-gray-400">(+1) 742 688 2239 </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RedHat Expertise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
