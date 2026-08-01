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
	faqs,
	headerData,
	introData,
	luxuryRealEstateData,
	trustedAdvisorData,
	whatSetsUsApartData,
	whyInvestorsData,
} from "./data";

export const metadata: Metadata = {
	title: "Dubai Property Investment Advisor | Piptan Capital",
	description:
		"Piptan Capital is a specialist Dubai Investment Advisor guiding luxury real estate investment in Dubai and UAE property investment decisions with data-driven.",
	keywords:
		"Dubai Investment Advisor, UAE Investment Advisor, Luxury Real Estate Investment Dubai, Dubai Property Investment, UAE Property Investment, Piptan Capital, real estate advisory UAE",
};

export default function PropertyInvestmentPage() {
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Property Investment",
		serviceType: "Real Estate Investment Advisory",
		provider: { "@id": "https://www.piptan.ae/#organization" },
		areaServed: { "@type": "City", name: "Dubai" },
		description:
			"Expert guidance on real estate investments, market analysis, and ROI optimization strategies.",
		url: "https://www.piptan.ae/services/property-investment",
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
				name: "Property Investment",
				item: "https://www.piptan.ae/services/property-investment",
			},
		],
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

				<div className="relative mb-12 aspect-square overflow-hidden rounded-md md:aspect-16/6">
					<Image
						alt="Dubai Investment Advisor at Piptan Capital reviewing a luxury real estate investment Dubai portfolio"
						className="object-cover"
						fill
						src="/images/investment.jpg"
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

				{/* Trusted Advisor */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Trusted Advisor"
							className="object-cover"
							fill
							src="/images/residential-tower.webp"
						/>
					</div>
					<div className="flex flex-col justify-center py-4 lg:py-12">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{trustedAdvisorData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{trustedAdvisorData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
							<ul className="list-disc space-y-2 pl-6">
								{trustedAdvisorData.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<p className="pt-2">{trustedAdvisorData.conclusion}</p>
						</div>
					</div>
				</section>

				{/* Luxury Real Estate */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="order-first flex flex-col justify-center py-4 lg:order-last">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{luxuryRealEstateData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{luxuryRealEstateData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Luxury Real Estate"
							className="object-cover"
							fill
							src="/images/luxury.jpg"
						/>
					</div>
				</section>

				{/* Why Investors Choose Piptan */}
				<section className="mb-24">
					<div className="mb-8 flex flex-col justify-center">
						<h2 className="mb-6 text-center font-semibold text-2xl sm:text-3xl">
							{whyInvestorsData.title}
						</h2>
						<div className="mx-auto max-w-3xl space-y-4 text-center text-base text-foreground/90 leading-relaxed sm:text-lg">
							{whyInvestorsData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
					<div className="relative mt-12 aspect-video w-full overflow-hidden rounded-xl lg:aspect-21/9">
						<Image
							alt="Why Investors Choose Piptan"
							className="object-cover"
							fill
							src="/images/dubai-night.jpg"
						/>
					</div>
				</section>

				{/* What Sets Us Apart */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="What Sets Us Apart"
							className="object-cover"
							fill
							src="/images/commercial.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{whatSetsUsApartData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							<ul className="list-disc space-y-2 pl-6">
								{whatSetsUsApartData.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<p className="pt-2">{whatSetsUsApartData.conclusion}</p>
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="mb-16 rounded-xl bg-muted p-8 text-center sm:p-12">
					<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
						{callToActionData.title}
					</h2>
					<div className="mx-auto max-w-2xl space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
						{callToActionData.paragraphs.map((p) => (
							<p key={p}>{p}</p>
						))}
						<div className="pt-6">
							<AnimatedButton
								href={callToActionData.cta.href}
								text={callToActionData.cta.text}
								variant="primary"
							/>
						</div>
					</div>
				</section>
			</article>

			{/* FAQs Section matching design from home page */}
			<section className="border-t bg-muted">
				<div className="mx-auto grid grid-cols-1 gap-6 md:container lg:grid-cols-4 lg:gap-0">
					<aside className="flex flex-col justify-start px-6 py-8 lg:py-12 lg:pr-12">
						<div>
							<p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
								<IconFaq className="size-4" />
								FAQs
							</p>
							<h2 className="text-3xl sm:text-4xl lg:text-5xl">
								Frequently Asked Questions
							</h2>
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
												<h3 className="pl-0.5 text-lg sm:text-xl lg:text-2xl">
													{question}
												</h3>
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

			<Script id="property-investment-service-schema" type="application/ld+json">
				{JSON.stringify(serviceSchema)}
			</Script>

			<Script id="property-investment-faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>

			<Script id="property-investment-breadcrumb-schema" type="application/ld+json">
				{JSON.stringify(breadcrumbSchema)}
			</Script>
		</main>
	);
}
