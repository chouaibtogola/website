import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4"
      >
        <Icon className="h-6 w-6 text-blue-600" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}