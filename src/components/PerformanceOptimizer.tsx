import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/fonts/your-main-font.woff2', as: 'font', type: 'font/woff2' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.entries(link).forEach(([key, value]) => {
        linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
    });
  }, []);

  return null;
} 