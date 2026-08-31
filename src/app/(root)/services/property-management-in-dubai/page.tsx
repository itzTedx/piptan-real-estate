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
	advisoryCompanyData,
	advisoryProcessData,
	callToActionData,
	faqs,
	headerData,
	introData,
	propertyManagementData,
	wealthManagementData,
	whyInvestorsData,
} from "./data";

export const metadata: Metadata = {
	title:
		"Real Estate Investment Advisory Dubai | Dubai Property Investment | Piptan Capital",
	description:
		"Piptan Capital is a Real Estate Investment Advisory firm helping investors build wealth through Dubai Property Investment, UAE Property Investment, capital appreciation, rental yield, and strategic portfolio diversification.",
	alternates: {
		canonical: "https://piptan.ae/services/property-management-in-dubai",
	},
};

export default function PropertyManagementPage() {
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Property Management",
		serviceType: "Property Management",
		provider: { "@id": "https://piptan.ae/#organization" },
		areaServed: { "@type": "City", name: "Dubai" },
		description:
			"Comprehensive property management services ensuring your investment is well-maintained and profitable.",
		url: "https://piptan.ae/services/property-management-in-dubai",
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://piptan.ae/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://piptan.ae/services",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Property Management",
				item: "https://piptan.ae/services/property-management-in-dubai",
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

				<div className="relative mb-12 aspect-square overflow-hidden rounded-md md:aspect-16/6">
					<Image
						alt="Property Management in Dubai"
						className="object-cover"
						fill
						src="/images/rental.jpg"
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

				{/* Advisory Company */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Advisory Company"
							className="object-cover"
							fill
							src="/images/residential-tower.webp"
						/>
					</div>
					<div className="flex flex-col justify-center py-4 lg:py-12">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{advisoryCompanyData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{advisoryCompanyData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
							<ul className="list-disc space-y-2 pl-6">
								{advisoryCompanyData.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							<p className="pt-2">{advisoryCompanyData.conclusion}</p>
						</div>
					</div>
				</section>

				{/* Property Management Features */}
				<section className="mb-24">
					<div className="mb-8 flex flex-col justify-center">
						<h2 className="mb-6 text-center font-semibold text-2xl sm:text-3xl">
							{propertyManagementData.title}
						</h2>
						<p className="mx-auto mb-8 max-w-3xl text-center text-base text-foreground/90 leading-relaxed sm:text-lg">
							{propertyManagementData.description}
						</p>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
							{propertyManagementData.features.map((feature) => (
								<div className="rounded-xl bg-muted p-6" key={feature.title}>
									<h4 className="mb-2 font-semibold text-xl">
										{feature.title}
									</h4>
									<p className="text-base text-foreground/90 leading-relaxed sm:text-lg">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="relative mt-12 aspect-video w-full overflow-hidden rounded-xl lg:aspect-21/9">
						<Image
							alt="Property Management"
							className="object-cover"
							fill
							src="/images/commercial.jpg"
						/>
					</div>
				</section>

				{/* Why Investors Choose Piptan */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Investment"
							className="object-cover"
							fill
							src="/images/investment.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{whyInvestorsData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{whyInvestorsData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
							<ul className="grid list-disc grid-cols-1 gap-2 pl-6 sm:grid-cols-2">
								{whyInvestorsData.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* Wealth Management */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="order-first flex flex-col justify-center py-4 lg:order-last">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{wealthManagementData.title}
						</h2>
						<div className="space-y-4 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{wealthManagementData.paragraphs.map((p) => (
								<p key={p}>{p}</p>
							))}
							<ul className="list-disc space-y-1 pl-6">
								{wealthManagementData.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
							{wealthManagementData.conclusionParagraphs.map((p, idx) => (
								<p className={idx === 0 ? "pt-2" : ""} key={p}>
									{p}
								</p>
							))}
						</div>
					</div>
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Wealth Management"
							className="object-cover"
							fill
							src="/images/luxury.jpg"
						/>
					</div>
				</section>

				{/* Advisory Process */}
				<section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative h-100 w-full overflow-hidden rounded-md lg:h-125">
						<Image
							alt="Advisory Process"
							className="object-cover"
							fill
							src="/images/dubai-night.jpg"
						/>
					</div>
					<div className="flex flex-col justify-center py-4">
						<h2 className="mb-6 font-semibold text-2xl sm:text-3xl">
							{advisoryProcessData.title}
						</h2>
						<div className="space-y-6 text-base text-foreground/90 leading-relaxed sm:text-lg">
							{advisoryProcessData.steps.map((step) => (
								<div key={step.title}>
									<h4 className="mb-1 font-semibold text-xl">{step.title}</h4>
									<p>{step.description}</p>
								</div>
							))}
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

			<Script id="property-management-service-schema" type="application/ld+json">
				{JSON.stringify(serviceSchema)}
			</Script>

			<Script id="property-management-breadcrumb-schema" type="application/ld+json">
				{JSON.stringify(breadcrumbSchema)}
			</Script>

			<Script id="property-management-faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>
		</main>
	);
}
