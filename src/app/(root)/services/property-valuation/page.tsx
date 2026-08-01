import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { ChevronDown } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedButton } from "@/components/ui/animated-button";

import { IconFaq } from "@/app/assets/icons";

import {
	callToActionData,
	ctaQuote,
	dataDrivenData,
	faqs,
	globalStandardsData,
	headerData,
	introData,
	smarterPortfolioData,
	strategicAcquisitionData,
	valuationProcessData,
	whoReliesData,
	whyShapesData,
} from "./data";

export const metadata: Metadata = {
	title: "Property Valuation Services in Dubai | Piptan Capital",
	description:
		"Get accurate property valuation backed by real market data. Piptan Capital delivers trusted Real Estate Investment Advisory for Dubai and UAE Property Investment.",
	keywords:
		"Dubai Property Investment, UAE Property Investment, Real Estate Investment Advisory, Investment Consultancy Dubai, High ROI Property Investment, Investment Portfolio Diversification, Property Valuation Dubai",
	alternates: {
		canonical: "https://www.piptan.ae/services/property-valuation",
	},
};

export default function PropertyValuationPage() {
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Property Valuation",
		serviceType: "Property Valuation",
		provider: { "@id": "https://www.piptan.ae/#organization" },
		areaServed: { "@type": "City", name: "Dubai" },
		description:
			(metadata.description as string) ||
			"Get accurate property valuation backed by real market data. Piptan Capital delivers trusted Real Estate Investment Advisory for Dubai and UAE Property Investment.",
		url: "https://www.piptan.ae/services/property-valuation",
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
				name: "Property Valuation",
				item: "https://www.piptan.ae/services/property-valuation",
			},
		],
	};

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<main className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
			<article className="container mx-auto max-w-4xl px-4 sm:px-6">
				{/* Header */}
				<header className="mb-8 space-y-6 text-center md:mb-12">
					<h1 className="text-balance font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						{headerData.title}
					</h1>
					<p className="text-balance text-lg text-muted-foreground sm:text-xl">
						{headerData.description}
					</p>
					<div className="flex justify-center pt-4">
						<AnimatedButton
							href={headerData.cta.href}
							size="lg"
							text={headerData.cta.text}
							variant="primary"
						/>
					</div>
				</header>

				{/* Main Image */}
				<div className="relative mb-12 aspect-square overflow-hidden rounded-md md:aspect-16/6">
					<Image
						alt="Dubai skyline representing professional property valuation for real estate investment advisory"
						className="object-cover"
						fill
						priority
						src="/images/residential-tower-wide.webp"
					/>
				</div>

				{/* Introduction */}
				<section className="mb-24 space-y-6 text-center lg:px-20">
					{introData.map((paragraph) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
				</section>

				{/* Why Property Valuation Shapes Every Investment Decision */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Dubai property investment analysis and valuation"
							className="object-cover"
							fill
							src="/images/investment.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{whyShapesData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{whyShapesData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
				</section>

				{/* A Data Driven Approach to Valuation */}
				<section className="mb-20 space-y-6 text-center lg:px-12">
					<h2 className="font-semibold text-2xl sm:text-3xl">
						{dataDrivenData.title}
					</h2>
					{dataDrivenData.paragraphs.map((p) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={p}
						>
							{p}
						</p>
					))}
				</section>

				{/* CTA Quote Callout */}
				<section className="mb-24 rounded-2xl bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 p-8 text-center sm:p-12">
					<blockquote className="font-bold text-2xl text-primary sm:text-3xl lg:text-4xl">
						&ldquo;{ctaQuote}&rdquo;
					</blockquote>
				</section>

				{/* Valuation That Supports Smarter Portfolio Decisions */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{smarterPortfolioData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{smarterPortfolioData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="High ROI property investment and portfolio diversification"
							className="object-cover"
							fill
							src="/images/luxury.jpg"
						/>
					</div>
				</section>

				{/* Who Relies on Piptan Capital's Valuation Service? */}
				<section className="mb-24 space-y-6 text-center lg:px-12">
					<h2 className="font-semibold text-2xl sm:text-3xl">
						{whoReliesData.title}
					</h2>
					{whoReliesData.paragraphs.map((p) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={p}
						>
							{p}
						</p>
					))}
				</section>

				{/* Precision Backed by Global Standards */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Real estate valuation structured for due diligence and RERA guidelines"
							className="object-cover"
							fill
							src="/images/commercial.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{globalStandardsData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{globalStandardsData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
				</section>

				{/* Our Valuation Process & Strategic Acquisition */}
				<section className="mb-24 space-y-12">
					<div className="space-y-6 text-center lg:px-12">
						<h2 className="font-semibold text-2xl sm:text-3xl">
							{valuationProcessData.title}
						</h2>
						{valuationProcessData.paragraphs.map((p) => (
							<p
								className="text-base text-foreground/90 leading-relaxed sm:text-lg"
								key={p}
							>
								{p}
							</p>
						))}
					</div>

					<div className="space-y-6 text-center lg:px-12">
						<h2 className="font-semibold text-2xl sm:text-3xl">
							{strategicAcquisitionData.title}
						</h2>
						{strategicAcquisitionData.paragraphs.map((p) => (
							<p
								className="text-base text-foreground/90 leading-relaxed sm:text-lg"
								key={p}
							>
								{p}
							</p>
						))}
					</div>
				</section>

				{/* Call to Action */}
				<section className="mb-16 rounded-xl bg-muted p-8 text-center sm:p-12">
					<h3 className="mb-6 font-semibold text-2xl sm:text-3xl">
						{callToActionData.title}
					</h3>
					<div className="mx-auto max-w-2xl space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
						{callToActionData.paragraphs.map((p) => (
							<p key={p}>{p}</p>
						))}
						<div className="flex flex-wrap items-center justify-center gap-4 pt-6">
							{callToActionData.ctaButtons.map((btn) => (
								<AnimatedButton
									href={btn.href}
									key={btn.text}
									size="lg"
									text={btn.text}
									variant="primary"
								/>
							))}
						</div>
					</div>
				</section>
			</article>

			{/* FAQs Section */}
			<section className="border-t bg-muted">
				<div className="mx-auto grid grid-cols-1 gap-6 md:container lg:grid-cols-4 lg:gap-0">
					<aside className="flex flex-col justify-start px-6 py-8 lg:py-12 lg:pr-12">
						<div>
							<p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
								<IconFaq className="size-4" />
								FAQs
							</p>
							<h3 className="text-3xl sm:text-4xl lg:text-5xl">
								Frequently Asked Questions
							</h3>
						</div>
					</aside>
					<div className="h-full border-x bg-background px-4 sm:px-6 lg:col-span-3 lg:px-9">
						<Accordion
							className="flex w-full flex-col divide-y"
							transition={{ duration: 0.2, ease: "easeInOut" }}
						>
							{faqs.map(({ answer, question }, id) => (
								<AccordionItem
									className="py-4 sm:py-6"
									key={question}
									value={`faq-${id}`}
								>
									<AccordionTrigger className="group w-full text-left">
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center gap-4 sm:gap-9">
												<span className="text-muted-foreground text-sm sm:text-base">
													0{id + 1}
												</span>
												<h4 className="pl-0.5 font-medium text-lg sm:text-xl lg:text-2xl">
													{question}
												</h4>
											</div>
											<ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-expanded:-rotate-180" />
										</div>
									</AccordionTrigger>
									<AccordionContent className="pt-2 pl-8 sm:pl-14">
										<summary className="list-none text-balance font-light text-base leading-relaxed sm:text-lg lg:text-xl">
											{answer}
										</summary>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<Script id="property-valuation-service-schema" type="application/ld+json">
				{JSON.stringify(serviceSchema)}
			</Script>

			<Script id="property-valuation-breadcrumb-schema" type="application/ld+json">
				{JSON.stringify(breadcrumbSchema)}
			</Script>

			<Script id="property-valuation-faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>
		</main>
	);
}
