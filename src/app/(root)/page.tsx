import type { Metadata } from "next";
import Script from "next/script";

import { AnimatedButton } from "@/components/ui/animated-button";

import { FEEDBACKS, SERVICES } from "@/constants/mock-data";
import { AboutSection } from "@/features/home/section/about";
import { Developers } from "@/features/home/section/developers";
import { ExpertiseSection } from "@/features/home/section/expertise";
import { FaqSection } from "@/features/home/section/faq";
import { FeaturesSection } from "@/features/home/section/features";
import { Hero } from "@/features/home/section/hero";
import { InsightsSection } from "@/features/home/section/insights";
import { PortfolioSection } from "@/features/home/section/portfolio";
import { Testimonials } from "@/features/home/section/testimonials";
import { WhyUsSection } from "@/features/home/section/why-us";

const meta = {
	title: "Dubai Luxury Real Estate Investments | Piptan Investment UAE",
	description:
		"Explore Dubai luxury homes, commercial property and high-ROI portfolios across the UAE. Expert guidance, vetted developers—start your investment with Piptan.",
	keywords:
		"Dubai real estate investment, luxury property UAE, commercial real estate Dubai, property investment portfolios",
};

// Enable caching with revalidation every 10 minutes
export const revalidate = 600;

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: meta.keywords,
	authors: [{ name: "Piptan Investment" }],
	creator: "Piptan Investment",
	publisher: "Piptan Investment",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		title: meta.title,
		description: meta.description,
		url: "https://www.piptan.ae",
		siteName: "Piptan Investment",
		locale: "en_US",
		images: [
			{
				url: "/images/hero.webp",
				width: 1200,
				height: 630,
				alt: "Piptan Investment Luxury Real Estate",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
		images: ["/images/hero.webp"],
		creator: "@piptan",
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
	metadataBase: new URL("https://www.piptan.ae"),
};

export default async function Home() {
	const howToSchema = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: "How to start your Dubai real estate investment with Piptan",
		description:
			"Step-by-step process to go from initial consultation to securing a Dubai real estate investment with Piptan.",
		supply: [],
		tool: [],
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Book a 15-minute consultation",
				text: "Schedule a 15-minute investment consult using the contact page or call/WhatsApp to discuss your goals, budget, and timeline.",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Clarify your investment profile",
				text: "Together with an advisor, define your risk profile, preferred locations, property types, and target returns in the Dubai and UAE markets.",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Review curated property options",
				text: "Receive a shortlist of vetted Dubai and Abu Dhabi projects based on market data, rental yields, and long-term appreciation potential.",
			},
			{
				"@type": "HowToStep",
				position: 4,
				name: "Complete due diligence and paperwork",
				text: "Work with Piptan and partner developers to review legal documentation, payment plans, and any financing requirements.",
			},
			{
				"@type": "HowToStep",
				position: 5,
				name: "Secure and manage your property",
				text: "Finalize your purchase, complete registration, and optionally use Piptan's advisory and management support to oversee your investment.",
			},
		],
	};

	const servicesSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Piptan Investment Services",
		description:
			"Advisory and real estate services provided by Piptan Investment in Dubai and the UAE.",
		itemListElement: SERVICES.map((service, index) => ({
			"@type": "Service",
			position: index + 1,
			name: service.title,
			description: service.description,
			provider: {
				"@type": "RealEstateAgent",
				name: "Piptan Investment",
				areaServed: "Dubai",
			},
		})),
	};

	const testimonialReviews = FEEDBACKS.map((feedback) => ({
		"@type": "Review",
		reviewBody: feedback.content,
		author: {
			"@type": "Person",
			name: feedback.name,
		},
	}));

	const realEstateAgentSchema = {
		"@context": "https://schema.org",
		"@type": "RealEstateAgent",
		name: "Piptan Investment",
		description:
			"Premium real estate investment and development company in Dubai",
		areaServed: "Dubai",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Dubai",
			addressCountry: "UAE",
		},
		offers: {
			"@type": "AggregateOffer",
			itemOffered: {
				"@type": "Residence",
				name: "Luxury Homes and Commercial Spaces",
				description:
					"Premium real estate properties in Dubai's most sought-after communities",
			},
		},
		knowsAbout: [
			"Dubai luxury real estate",
			"Dubai property investment",
			"UAE real estate market",
			"commercial real estate Dubai",
		],
		review: testimonialReviews,
	};

	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Piptan Investment",
		url: "https://www.piptan.ae",
		description:
			"Premium real estate investment and development company in Dubai, specializing in luxury homes and commercial properties.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Dubai",
			addressCountry: "AE",
		},
		areaServed: ["Dubai", "United Arab Emirates"],
		sameAs: [],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer service",
				telephone: "+971564014000",
				availableLanguage: ["en"],
			},
		],
	};

	return (
		<main className="-mt-20 divide-y">
			<Hero />

			<AboutSection />
			<ExpertiseSection />
			<PortfolioSection />
			<section className="bg-muted/70">
				<div className="container flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center sm:py-12">
					<div>
						<h2 className="text-lg sm:text-xl md:text-2xl">
							Want a quick review of your options?
						</h2>
						<p className="text-muted-foreground text-sm sm:text-base">
							Book a 15-minute investment consult. No obligation, 24 - 48h
							response.
						</p>
					</div>
					<AnimatedButton
						href="/contact"
						size="lg"
						text="Book a 15-minute investment consult"
						variant="primary"
					/>
				</div>
			</section>
			<WhyUsSection />

			<Developers />

			<FeaturesSection />
			<section className="bg-background">
				<div className="container flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center sm:py-12">
					<div>
						<h2 className="text-lg sm:text-xl md:text-2xl">
							Prefer to talk through your strategy?
						</h2>
						<p className="text-muted-foreground text-sm sm:text-base">
							Book a 15-minute investment consult. No obligation, 24–48h
							response.
						</p>
					</div>
					<AnimatedButton
						href="/contact"
						size="lg"
						text="Book a 15-minute investment consult"
						variant="primary"
					/>
				</div>
			</section>
			<Testimonials />
			<InsightsSection />
			<FaqSection />

			<Script id="howto-schema" type="application/ld+json">
				{JSON.stringify(howToSchema)}
			</Script>
			<Script id="services-schema" type="application/ld+json">
				{JSON.stringify(servicesSchema)}
			</Script>
			<Script id="realestateagent-schema" type="application/ld+json">
				{JSON.stringify(realEstateAgentSchema)}
			</Script>
			<Script id="organization-schema" type="application/ld+json">
				{JSON.stringify(organizationSchema)}
			</Script>
		</main>
	);
}
