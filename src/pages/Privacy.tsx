import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How we protect and handle your data
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="flex items-center mb-8">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Data Protection Commitment
              </h2>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Information Collection
              </h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Company details</li>
                <li>Project requirements and specifications</li>
                <li>Technical information about your systems (with consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                How We Use Your Information
              </h3>
              <p className="text-gray-600 mb-4">
                Your information is used exclusively for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing requested security services</li>
                <li>Communicating about your project</li>
                <li>Improving our services</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Data Security</h3>
              <p className="text-gray-600 mb-4">
                We implement robust security measures to protect your
                information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Request data correction</li>
                <li>Request data deletion</li>
                <li>Withdraw consent</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">
                For any privacy-related questions or concerns, please contact
                our Data Protection Officer at redhatexpertise@yahoo.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
