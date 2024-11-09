type MetricType = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';

interface MetricObject {
  name: MetricType;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export const measureWebVitals = (onMetric: (metric: MetricObject) => void) => {
  // Cumulative Layout Shift
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = entry as LayoutShift;
      const value = metric.value;
      onMetric({
        name: 'CLS',
        value,
        rating: value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor'
      });
    }
  }).observe({ entryTypes: ['layout-shift'] });

  // First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = entry as PerformanceEventTiming;
      const value = metric.processingStart - metric.startTime;
      onMetric({
        name: 'FID',
        value,
        rating: value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor'
      });
    }
  }).observe({ entryTypes: ['first-input'] });

  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const metric = entry as LargestContentfulPaint;
      const value = metric.startTime;
      onMetric({
        name: 'LCP',
        value,
        rating: value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor'
      });
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });
}; 