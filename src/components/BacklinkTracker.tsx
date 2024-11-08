import { useEffect } from 'react';

export default function BacklinkTracker() {
  const backlinkSources = [
    'github.com',
    'linkedin.com',
    'medium.com',
    // Add more sources
  ];

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && backlinkSources.some(source => referrer.includes(source))) {
      // Track the backlink
      console.log(`Backlink from: ${referrer}`);
      // You can send this to your analytics service
    }
  }, []);

  return null;
} 