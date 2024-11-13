import { motion } from 'framer-motion';

interface Company {
  name: string;
  icon?: string;
}

const companies: Company[] = [
  { name: 'FinTech' },
  { name: 'Healthcare' },
  { name: 'E-commerce' },
  { name: 'Government' },
  { name: 'Education' },
  { name: 'Technology' },
  { name: 'Banking' },
  { name: 'Insurance' },
  { name: 'Telecom' },
  { name: 'Manufacturing' },
  { name: 'Retail' },
  { name: 'Energy' }
];

export default function InfiniteScroll() {
  return (
    <div className="relative flex overflow-x-hidden bg-gray-900 text-white py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {companies.map((company, index) => (
          <span key={index} className="mx-4 text-lg">
            {company.name}
            {index !== companies.length - 1 && <span className="ml-4">•</span>}
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
        {companies.map((company, index) => (
          <span key={index} className="mx-4 text-lg">
            {company.name}
            {index !== companies.length - 1 && <span className="ml-4">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
} 