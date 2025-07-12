import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.25.208.1", "192.168.0.228"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      { hostname: "plus.unsplash.com" },
      { hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
