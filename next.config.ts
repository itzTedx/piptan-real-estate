import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.25.208.1", "192.168.0.228"],
  images: { remotePatterns: [{ hostname: "plus.unsplash.com" }] },
};

export default nextConfig;
