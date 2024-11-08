import { Shield, Users, Award, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the way in cybersecurity excellence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              What sets us apart from other firms is our unique collaboration with both cybersecurity professionals and ethical hackers, allowing us to simulate real-world attacks for more authentic and effective security assessments.
            </p>
            <p className="text-lg text-gray-600">
              Our team comprises experienced cybersecurity professionals dedicated to safeguarding your digital assets. With years of experience in the field, we understand the evolving nature of cyber threats and stay ahead of potential risks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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