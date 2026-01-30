import React from "react";

import type { Metadata } from "next";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import BreakpointIndicator from "@/components/breakpoint-indicator";
import Providers from "@/components/providers";

import { jaguar, neueMontreal } from "@/app/assets/fonts";
import { SanityLive } from "@/lib/sanity/lib/live";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Piptan Investments - Luxury Real Estate in Dubai",
		template: "%s | Piptan Investments",
	},
	description:
		"Discover luxury homes, commercial spaces, and investment opportunities in Dubai. Expert guidance and premium listings for confident real estate decisions.",
	keywords: [
		"Dubai real estate",
		"luxury homes",
		"commercial property",
		"real estate investment",
		"property development",
		"Dubai property market",
		"luxury apartments",
		"villas Dubai",
		"real estate agents Dubai",
		"property investment UAE",
	],
	metadataBase: new URL("https://www.piptan.ae"),
	openGraph: {
		type: "website",
		title: "Piptan Investments - Luxury Real Estate in Dubai",
		description:
			"Discover luxury homes, commercial spaces, and investment opportunities in Dubai.",
		url: "https://www.piptan.ae",
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
		google: "4jnLKLwAQxiAxdxZcSMWXA3NKw3f79_By4a_AlLNCPQ",
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
		canonical: "https://www.piptan.ae",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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
			</body>
		</html>
	);
}
