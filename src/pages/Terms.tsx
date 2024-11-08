import React from 'react';
import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our service agreement and commitments
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="flex items-center mb-8">
              <Scale className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Service Agreement
              </h2>
            </div>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                1. Services Overview
              </h3>
              <p className="text-gray-600 mb-4">
                CyberGuard provides cybersecurity services including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Penetration Testing</li>
                <li>Vulnerability Assessments</li>
                <li>Phishing Simulations</li>
                <li>OWASP Top 10 Assessments</li>
                <li>Social Engineering Testing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                2. Client Responsibilities
              </h3>
              <p className="text-gray-600 mb-4">Clients agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain necessary access and authorizations</li>
                <li>Respond to communications in a timely manner</li>
                <li>Pay for services as agreed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">3. Confidentiality</h3>
              <p className="text-gray-600">
                We maintain strict confidentiality of all client information and
                project details. Our security professionals are bound by
                non-disclosure agreements and follow industry best practices for
                data protection.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                4. Limitation of Liability
              </h3>
              <p className="text-gray-600">
                While we strive for excellence, we cannot guarantee the
                discovery of all security vulnerabilities. Our liability is
                limited to the scope of work agreed upon in the service
                contract.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">5. Payment Terms</h3>
              <p className="text-gray-600 mb-4">Our payment terms include:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Payment schedules as defined in service agreements</li>
                <li>Accepted payment methods</li>
                <li>Late payment policies</li>
                <li>Refund conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                6. Service Modifications
              </h3>
              <p className="text-gray-600">
                We reserve the right to modify our services and terms with
                notice to clients. Significant changes will be communicated
                directly to affected clients.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">
                7. Contact Information
              </h3>
              <p className="text-gray-600">
                For questions about these terms, please contact our legal
                department at redhatexpertise@yahoo.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
