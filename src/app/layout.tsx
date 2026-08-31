import React from "react";

import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import BreakpointIndicator from "@/components/breakpoint-indicator";
import Providers from "@/components/providers";

import { jaguar, neueMontreal } from "@/app/assets/fonts";
import { SanityLive } from "@/lib/sanity/lib/live";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://piptan.ae"),
	openGraph: {
		type: "website",
		title: "Piptan Investments - Luxury Real Estate in Dubai",
		description:
			"Discover luxury homes, commercial spaces, and investment opportunities in Dubai.",
		url: "https://piptan.ae",
		siteName: "Piptan Investments",
		locale: "en_US",
		images: [
			{
				url: "/images/hero.webp",
				width: 1200,
				height: 630,
				alt: "Piptan Investments Luxury Real Estate",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Piptan Investments - Luxury Real Estate in Dubai",
		description:
			"Discover luxury homes, commercial spaces, and investment opportunities in Dubai.",
		images: ["/images/hero.webp"],
		creator: "@piptan",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
	manifest: "/manifest.json",
	verification: {
		google: [
			"haQWE4Rdy3_xxnLrXv87QDJ-XgAUwlCJRVg3VDT0dF0",
			"4jnLKLwAQxiAxdxZcSMWXA3NKw3f79_By4a_AlLNCPQ",
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "./",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-TF7PQV6H" />
			<Script id="clarity-script" strategy="afterInteractive">
				{`
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "yaup2qmy8v");
				`}
			</Script>
			<body
				className={cn(
					"relative antialiased",
					neueMontreal.className,
					jaguar.variable
				)}
			>
				<Providers>
					<NuqsAdapter>{children}</NuqsAdapter>
				</Providers>
				<BreakpointIndicator />
				<SanityLive />
				<GoogleAnalytics gaId="G-N3D28GZSBM" />
			</body>
		</html>
	);
}
