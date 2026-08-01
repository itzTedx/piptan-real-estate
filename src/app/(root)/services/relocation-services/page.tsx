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
	investmentLogicData,
	servicesCoverData,
	servingInvestorsData,
	strategicInvestmentData,
	structuringPortfolioData,
	trustedByBuyersData,
	whyInvestmentSenseData,
} from "./data";

export const metadata: Metadata = {
	title: "Relocation Services in Dubai for Investors and Families",
	description:
		"Move to Dubai with confidence through Piptan relocation services. Get expert property search, settling in support, and guidance for smart real estate decisions.",
	keywords:
		"Relocation Services Dubai, Investment Portfolio Diversification, Capital Appreciation, Rental Yield, Strategic Property Investment, Premium Investment Opportunities, Institutional & HNI Investments, Global Property Investors",
};

export default function RelocationServicesPage() {
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Relocation Services",
		serviceType: "Relocation Services",
		provider: { "@id": "https://www.piptan.ae/#organization" },
		areaServed: { "@type": "City", name: "Dubai" },
		description:
			(metadata.description as string) ||
			"Move to Dubai with confidence through Piptan relocation services. Get expert property search, settling in support, and guidance for smart real estate decisions.",
		url: "https://www.piptan.ae/services/relocation-services",
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
				name: "Relocation Services",
				item: "https://www.piptan.ae/services/relocation-services",
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
						alt="Family relocating to Dubai receiving property guidance from a Piptan Investment advisor"
						className="object-cover"
						fill
						priority
						src="/images/isolated-home.webp"
					/>
				</div>

				{/* Introduction */}
				<section className="mb-24 space-y-6 text-center lg:px-12">
					{introData.map((paragraph) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={paragraph}
						>
							{paragraph}
						</p>
					))}
				</section>

				{/* Why Relocation to Dubai Makes Investment Sense */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Dubai relocation and real estate investment advisory"
							className="object-cover"
							fill
							src="/images/residential-tower.webp"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{whyInvestmentSenseData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{whyInvestmentSenseData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
				</section>

				{/* A Relocation Plan Built on Investment Logic */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{investmentLogicData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{investmentLogicData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Investment logic and Golden Visa relocation support in Dubai"
							className="object-cover"
							fill
							src="/images/investment.jpg"
						/>
					</div>
				</section>

				{/* Serving Individual Investors and Institutional Capital */}
				<section className="mb-24 space-y-6 text-center lg:px-12">
					<h2 className="font-semibold text-2xl sm:text-3xl">
						{servingInvestorsData.title}
					</h2>
					{servingInvestorsData.paragraphs.map((p) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={p}
						>
							{p}
						</p>
					))}
				</section>

				{/* Our Relocation Services Cover */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Comprehensive relocation and property search coverage in Dubai"
							className="object-cover"
							fill
							src="/images/commercial.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{servicesCoverData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{servicesCoverData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
				</section>

				{/* Beyond the Move, Structuring Your Property Portfolio */}
				<section className="mb-24 space-y-6 text-center lg:px-12">
					<h2 className="font-semibold text-2xl sm:text-3xl">
						{structuringPortfolioData.title}
					</h2>
					{structuringPortfolioData.paragraphs.map((p) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={p}
						>
							{p}
						</p>
					))}
				</section>

				{/* When Relocation Turns Into Strategic Property Investment */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{strategicInvestmentData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{strategicInvestmentData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
						</div>
					</div>
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Luxury real estate investment and rental yield optimization"
							className="object-cover"
							fill
							src="/images/luxury.jpg"
						/>
					</div>
				</section>

				{/* Trusted by Buyers and Global Property Investors Alike */}
				<section className="mb-24 space-y-6 text-center lg:px-12">
					<h3 className="font-semibold text-2xl sm:text-3xl">
						{trustedByBuyersData.title}
					</h3>
					{trustedByBuyersData.paragraphs.map((p) => (
						<p
							className="text-base text-foreground/90 leading-relaxed sm:text-lg"
							key={p}
						>
							{p}
						</p>
					))}
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
						<div className="pt-6">
							<AnimatedButton
								href={callToActionData.cta.href}
								size="lg"
								text={callToActionData.cta.text}
								variant="primary"
							/>
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

			<Script id="relocation-services-service-schema" type="application/ld+json">
				{JSON.stringify(serviceSchema)}
			</Script>

			<Script id="relocation-services-breadcrumb-schema" type="application/ld+json">
				{JSON.stringify(breadcrumbSchema)}
			</Script>

			<Script id="relocation-services-faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>
		</main>
	);
}
