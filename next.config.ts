import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.25.208.1", "192.168.0.228"],
  typescript: {
    ignoreBuildErrors: true,
  },

  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  images: {
    remotePatterns: [
      { hostname: "plus.unsplash.com" },
      { hostname: "cdn.sanity.io" },
    ],
    // Optimize image formats
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    unoptimized: false,
  },
  // Enable experimental features for better caching
  // experimental: {
  //   // Enable optimized package imports
  //   optimizePackageImports: ["@sanity/image-url", "next-sanity", "gsap", "lucide-react", "framer-motion"],
  //   // Enable optimized CSS
  //   // optimizeCss: true,
  // },
 
  // Configure headers for better caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Enable compression
          {
            key: "Accept-Encoding",
            value: "gzip, deflate, br",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Add caching for fonts
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Add caching for API routes
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },

  // Enable powered by header removal
  poweredByHeader: false,


};

export default nextConfig;
