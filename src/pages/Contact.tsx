import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our security experts
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-lg text-gray-600">
              Send us an email with your requirements and we'll get back to you
              within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                    {item.title === 'Email' ? (
                      <a
                        href={`mailto:${item.details}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.details}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              What to Include in Your Email:
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Your name and company name</li>
              <li>• Type of security service needed</li>
              <li>• Brief description of your project/requirements</li>
              <li>• Web application URL (if applicable)</li>
              <li>• Preferred contact method</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'redhatexpertise@yahoo.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '(+223) 77544177',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Global operations',
  },
];
