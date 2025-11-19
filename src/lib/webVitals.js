// Performance monitoring for Core Web Vitals
// This helps track key performance metrics

export function reportWebVitals(metric) {
  // Log metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }

  // You can send metrics to analytics service in production
  // Example metrics: CLS, FID, FCP, LCP, TTFB
  const { name, value, id, rating } = metric

  // For production, you could send to analytics
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics, Vercel Analytics, etc.
    // window.gtag?.('event', name, {
    //   value: Math.round(name === 'CLS' ? value * 1000 : value),
    //   metric_id: id,
    //   metric_value: value,
    //   metric_rating: rating,
    // })
  }
}

// Metrics explanation:
// - LCP (Largest Contentful Paint): Should be < 2.5s
// - FID (First Input Delay): Should be < 100ms
// - CLS (Cumulative Layout Shift): Should be < 0.1
// - FCP (First Contentful Paint): Should be < 1.8s
// - TTFB (Time to First Byte): Should be < 600ms
