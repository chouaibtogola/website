import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XGXDF2D6WY', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
} 