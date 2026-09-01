import { Suspense } from "react";

import type { Metadata } from "next";
import Script from "next/script";

import {
	Carousel,
	CarouselActiveIndex,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";

import { LeadSection } from "@/features/forms/lead-form/section";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { getProjects } from "@/features/projects/actions/projects-actions";
import { CategoriesSelector } from "@/features/projects/components/categories-selector";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";

const meta = {
	title: "Real Estate Portfolio — Dubai & Abu Dhabi Projects | Piptan",
	description:
		"Explore Piptan's portfolio of premium real estate developments including The Oasis and Grand Polo by Emaar in Dubai.",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	keywords: [
		"Dubai real estate projects",
		"Abu Dhabi property investment",
		"Emaar developments",
		"UAE real estate portfolio",
		"Dubai property investments",
		"Abu Dhabi real estate opportunities",
	],
	openGraph: {
		type: "website",
		title: meta.title,
		description: meta.description,
		url: "https://piptan.ae/portfolio",
		siteName: "Piptan Investment",
		locale: "en_US",
		images: [
			{
				url: "/images/hero.webp",
				width: 1200,
				height: 630,
				alt: "Piptan UAE real estate portfolio in Dubai and Abu Dhabi",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: meta.title,
		description: meta.description,
		images: ["/images/hero.webp"],
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
		canonical: "https://piptan.ae/portfolio",
	},
	metadataBase: new URL("https://piptan.ae"),
};

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

export default function ProjectsPage() {
	return (
		<main className="pt-4 sm:pt-9 md:pt-12">
			<section className="container relative mb-20">
				<SectionHeader
					as="h1"
					subtitle="Piptan offers a curated real estate investment portfolio in the UAE, featuring selected residential, commercial, and mixed-use property opportunities across Dubai and Abu Dhabi. Our portfolio is designed for investors looking for potential capital appreciation, rental income, and long-term value in the UAE property market."
					title="Explore Curated Real Estate Investment Opportunities in the UAE"
				/>

				<Separator />

				<CategoriesSelector />

				<Suspense fallback={<PropertiesListSkeleton />}>
					<SuspendedPortfolioList />
				</Suspense>
				<Separator className="my-12 md:my-20" />
			</section>
			<section className="container mt-4 mb-20 space-y-3 text-muted-foreground text-sm sm:text-base md:text-lg">
				<p>
					From established prime communities to emerging investment destinations, we help investors explore{" "}
					<strong className="font-semibold">Dubai real estate investment opportunities</strong> and{" "}
					<strong className="font-semibold">Abu Dhabi property investments</strong> based on their individual financial goals, investment horizon, and preferred returns.
				</p>
			</section>
			<LeadSection
				subtitle="Book a 15-minute investment consult to walk through these projects in detail—no obligation, 24–48h response."
				title={"Book a 15-minute\ninvestment consult"}
				variant="compact"
			/>
		</main>
	);
}

async function SuspendedPortfolioList() {
	const projects = await getProjects();
	const totalItems = projects.length;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: meta.title,
		description: meta.description,
		url: "https://piptan.ae/portfolio",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projects.map((project, index) => {
				const projectUrl = project.link
					? `https://piptan.ae${project.link}`
					: "https://piptan.ae/portfolio";

				return {
					"@type": "ListItem",
					position: index + 1,
					name: project.title ?? "UAE real estate project",
					url: projectUrl,
					item: {
						"@type": "RealEstateListing",
						name: project.title ?? "UAE real estate project",
						description:
							"Premium residential and mixed-use real estate development in the United Arab Emirates.",
						url: projectUrl,
						address: {
							"@type": "PostalAddress",
							addressLocality: project.location ?? "Dubai",
							addressCountry: "AE",
						},
						areaServed: project.location ?? "Dubai",
						category: project.category?.title ?? "Residential real estate",
					},
				};
			}),
		},
	};

	return (
		<>
			<Script id="portfolio-collection-schema" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<Carousel autoplay className="mt-4 w-full md:mt-6 lg:mt-9">
				<CarouselContent className="-ml-1">
					{projects.map((project) => (
						<CarouselItem
							className="pl-1 md:basis-1/2 lg:basis-1/3"
							key={project._id}
						>
							<div className="h-full p-1">
								<PropertyCard
									className="pb-1 pl-1 md:basis-1/2 md:pl-4 lg:basis-1/3"
									data={project}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="mt-6 flex items-center gap-12">
					<p className="shrink-0 text-foreground/80 tracking-widest">
						<CarouselActiveIndex /> / {totalItems.toString().padStart(2, "0")}
					</p>
					<ProgressIndicator totalItems={totalItems} />
					<div className="relative flex gap-2">
						<CarouselPrevious className="static translate-y-0" />
						<CarouselNext className="static translate-y-0" />
					</div>
				</div>
			</Carousel>
		</>
	);
}
