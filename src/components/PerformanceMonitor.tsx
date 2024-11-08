import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Report Web Vitals
    const reportWebVitals = (metric: any) => {
      console.log(metric);
      // You can send this data to your analytics service
    };

    // Monitor CLS
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        reportWebVitals(entry);
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // Monitor LCP
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        reportWebVitals(entry);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor FID
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        reportWebVitals(entry);
      }
    }).observe({ entryTypes: ['first-input'] });
  }, []);

  return null;
} 