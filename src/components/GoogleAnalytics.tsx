import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const trackPageview = () => {
      if (window.gtag) {
        window.gtag('config', 'G-XGXDF2D6WY', {
          page_path: location.pathname + location.search,
          page_location: window.location.href,
          page_title: document.title
        });
      }
    };

    // Track on mount and route change
    trackPageview();
  }, [location]);

  return null;
} 