import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["172.25.208.1", "192.168.0.228"],
	typescript: {
		ignoreBuildErrors: true,
	},
	reactCompiler: true,
	typedRoutes: true,

	// logging: {
	//   fetches: {
	//     fullUrl: true,
	//   },
	// },
	experimental: {
		turbopackFileSystemCacheForDev: true,
		turbopackFileSystemCacheForBuild: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "plus.unsplash.com" },
			{ hostname: "cdn.sanity.io" },
			{ hostname: "acapysb1.apicdn.sanity.io" },
		],
	},
	// Enable experimental features for better caching
	// experimental: {
	//   // Enable optimized package imports
	//   optimizePackageImports: ["@sanity/image-url", "next-sanity", "gsap", "lucide-react", "framer-motion"],
	//   // Enable optimized CSS
	//   // optimizeCss: true,
	// },
};

export default nextConfig;
