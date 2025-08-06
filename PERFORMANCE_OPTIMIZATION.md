# Performance Optimization Guide

## Implemented Optimizations

### 1. Next.js Configuration Optimizations
- ✅ **Package Import Optimization**: Optimized imports for 12 major packages
- ✅ **Bundle Splitting**: Custom webpack configuration for better chunk splitting
- ✅ **Image Optimization**: WebP/AVIF support with proper caching
- ✅ **Compression**: Enabled gzip/brotli compression
- ✅ **Security Headers**: Added security and caching headers
- ✅ **SWC Minification**: Faster builds with SWC

### 2. Bundle Analysis
- ✅ **Bundle Analyzer**: Added `npm run analyze` script
- ✅ **Custom Chunk Splitting**: Separated vendors, Sanity, and GSAP

### 3. Performance Monitoring
- ✅ **Core Web Vitals Tracking**: LCP, FID, CLS monitoring
- ✅ **Resource Preloading**: Critical resource preloading
- ✅ **Lazy Loading**: Intersection Observer for images

### 4. Image Optimization
- ✅ **Optimized Image Component**: With loading states and placeholders
- ✅ **WebP/AVIF Support**: Modern image formats
- ✅ **Proper Sizing**: Responsive image sizing

## Additional Recommendations

### 1. Font Optimization
```typescript
// Add to your layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
```

### 2. Critical CSS Inlining
```typescript
// Add to next.config.ts
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [...],
  },
  // Add critical CSS extraction
  webpack: (config) => {
    // Critical CSS plugin configuration
    return config;
  },
};
```

### 3. Service Worker for Caching
```typescript
// Create public/sw.js
const CACHE_NAME = 'piptan-cache-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

### 4. Database Query Optimization
```typescript
// Sanity query optimization
export const optimizedQuery = groq`{
  "projects": *[_type == "project"] {
    _id,
    title,
    "image": image.asset->url,
    "slug": slug.current
  }[0...10] // Limit results
}`;
```

### 5. Component Lazy Loading
```typescript
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // If client-only
});
```

### 6. API Route Optimization
```typescript
// Add caching to API routes
export async function GET(request: Request) {
  const response = await fetch('https://api.example.com/data');
  
  return new Response(response.body, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/json',
    },
  });
}
```

### 7. Third-party Script Optimization
```typescript
// Add to layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Preload critical third-party scripts */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        {children}
        {/* Load non-critical scripts */}
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
```

### 8. Memory Optimization
```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

## Monitoring Tools

### 1. Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

### 2. Web Vitals Monitoring
```typescript
// Add to your app
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## Performance Checklist

- [ ] Bundle size under 250KB (gzipped)
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] First Input Delay < 100ms
- [ ] Time to Interactive < 3.8s
- [ ] All images optimized (WebP/AVIF)
- [ ] Critical CSS inlined
- [ ] Non-critical CSS deferred
- [ ] Third-party scripts optimized
- [ ] Service worker implemented
- [ ] Database queries optimized
- [ ] API responses cached
- [ ] Fonts optimized (display: swap)
- [ ] Lazy loading implemented
- [ ] Bundle splitting optimized

## Tools for Further Optimization

1. **Bundle Analyzer**: `npm run analyze`
2. **Lighthouse**: Chrome DevTools
3. **WebPageTest**: Performance testing
4. **GTmetrix**: Speed optimization
5. **PageSpeed Insights**: Google's tool
6. **Core Web Vitals**: Chrome DevTools

## Regular Maintenance

- [ ] Weekly bundle size monitoring
- [ ] Monthly performance audits
- [ ] Quarterly dependency updates
- [ ] Bi-annual performance reviews
- [ ] Annual architecture reviews 