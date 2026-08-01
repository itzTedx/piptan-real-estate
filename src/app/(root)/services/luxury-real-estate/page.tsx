import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { AnimatedButton } from "@/components/ui/animated-button";

export const metadata: Metadata = {
	title: "Luxury Real Estate Dubai | Piptan Investment",
	description:
		"Exclusive luxury real estate opportunities in Dubai, including prime waterfront properties and high-end investments.",
	keywords:
		"Luxury Real Estate Dubai, Dubai Luxury Villas, Waterfront Properties Dubai, High-End UAE Real Estate",
	alternates: {
		canonical: "https://www.piptan.ae/services/luxury-real-estate",
	},
};

export default function LuxuryRealEstatePage() {
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Luxury Real Estate",
		serviceType: "Luxury Real Estate",
		provider: { "@id": "https://www.piptan.ae/#organization" },
		areaServed: { "@type": "City", name: "Dubai" },
		description:
			(metadata.description as string) ||
			"Exclusive luxury real estate opportunities in Dubai, including prime waterfront properties and high-end investments.",
		url: "https://www.piptan.ae/services/luxury-real-estate",
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://www.piptan.ae/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://www.piptan.ae/services",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Luxury Real Estate",
				item: "https://www.piptan.ae/services/luxury-real-estate",
			},
		],
	};

	return (
		<main className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
			<article className="container mx-auto max-w-4xl px-4 sm:px-6">
				<header className="mb-8 space-y-6 text-center md:mb-12">
					<h1 className="text-balance font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						Luxury Real Estate Solutions
					</h1>
					<p className="text-balance text-lg text-muted-foreground sm:text-xl">
						Exclusive luxury real estate opportunities in Dubai, including prime waterfront properties and high-end investments.
					</p>
					<div className="flex justify-center pt-4">
						<AnimatedButton
							href="/contact"
							size="lg"
							text="Book an Investment Consultation"
							variant="primary"
						/>
					</div>
				</header>

				<div className="relative mb-12 aspect-square overflow-hidden rounded-md md:aspect-16/6">
					<Image
						alt="Luxury Real Estate in Dubai"
						className="object-cover"
						fill
						priority
						src="/images/luxury.jpg"
					/>
				</div>

				<section className="mb-16 space-y-6 text-center lg:px-20">
					<p className="text-base text-foreground/90 leading-relaxed sm:text-lg">
						Piptan specializes in luxury real estate investment across Dubai&apos;s most prestigious addresses. From branded residences and waterfront villas to high-yield penthouses, our advisory desk connects discerning buyers and global investors with premium real estate opportunities.
					</p>
				</section>
			</article>

			<Script id="luxury-real-estate-service-schema" type="application/ld+json">
				{JSON.stringify(serviceSchema)}
			</Script>

			<Script id="luxury-real-estate-breadcrumb-schema" type="application/ld+json">
				{JSON.stringify(breadcrumbSchema)}
			</Script>
		</main>
	);
}
