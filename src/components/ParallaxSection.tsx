import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export default function ParallaxSection({ children, className, backgroundImage }: ParallaxSectionProps) {
  return (
    <div 
      className={`${className || ''}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {children}
    </div>
  );
}