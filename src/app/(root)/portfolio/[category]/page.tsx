import { Suspense } from "react";

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselActiveIndex,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";

import { LeadSection } from "@/features/forms/lead-form/section";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { getFilteredProjects } from "@/features/projects/actions/projects-actions";
import { CategoriesSelector } from "@/features/projects/components/categories-selector";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";
import { client } from "@/lib/sanity/lib/client";
import { CATEGORIES_QUERY } from "@/lib/sanity/queries/categories-queries";

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
		url: "https://www.piptan.ae/portfolio",
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
		canonical: "https://www.piptan.ae/portfolio",
	},
	metadataBase: new URL("https://www.piptan.ae"),
};

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

export default async function ProjectsPage({
	params,
}: {
	params: Promise<{ category: string }>;
}) {
	const { category } = await params;

	return (
		<main className="pt-4 sm:pt-9 md:pt-12">
			<section className="container relative mb-20">
				<SectionHeader
					as="h1"
					subtitle="Piptan curates a portfolio of premium residential and mixed-use developments across Dubai and Abu Dhabi, with a focus on long-term returns, rental yield stability, and landmark communities such as The Oasis and Grand Polo by Emaar."
					title="Real Estate Investment Portfolio in UAE"
				/>

				<Separator />
				<CategoriesSelector />

				<Suspense fallback={<PropertiesListSkeleton />}>
					<SuspendedPortfolioList categorySlug={category} />
				</Suspense>
				<Separator className="my-12 md:my-20" />
			</section>
			<section className="container mt-4 mb-20 space-y-3 text-muted-foreground text-sm sm:text-base md:text-lg">
				<h2 className="font-jaguar font-semibold text-base text-foreground sm:text-4xl">
					Tailored UAE real estate portfolio
				</h2>
				<p>
					Our{" "}
					<strong className="font-semibold">Dubai real estate projects</strong>{" "}
					and{" "}
					<strong className="font-semibold">
						Abu Dhabi property investment
					</strong>{" "}
					opportunities span waterfront communities, emerging suburban hubs, and
					established prime districts tailored for both end-users and
					institutional investors.
				</p>
				<p>
					Working closely with{" "}
					<strong className="font-semibold">Emaar developments</strong> and
					other tier-one UAE developers, Piptan structures opportunities that
					balance capital appreciation with steady income, guided by rigorous
					market analysis and on-the-ground expertise.
				</p>
				<p>
					This curated{" "}
					<strong className="font-semibold">UAE real estate portfolio</strong>{" "}
					is designed for investors seeking transparent, data-driven
					decision-making, with professional advisory throughout the
					acquisition, financing, and exit stages.
				</p>
			</section>
			<LeadSection
				highlightText="the right investment"
				subtitle="Feel free to contact with us"
				title={"Let the experts help you\nmake the right investment"}
				variant="compact"
			/>
		</main>
	);
}

async function SuspendedPortfolioList({
	categorySlug,
}: {
	categorySlug: string;
}) {
	const { projects } = await getFilteredProjects({
		category: categorySlug,
	});
	const totalItems = projects.length;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: meta.title,
		description: meta.description,
		url: `https://www.piptan.ae/portfolio/${categorySlug}`,
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projects.map((project, index) => {
				const projectUrl = project.link
					? `https://www.piptan.ae${project.link}`
					: "https://www.piptan.ae/portfolio";

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

	if (totalItems === 0) {
		return (
			<Empty className="mt-6">
				<EmptyHeader>
					<EmptyTitle>No projects found in this category</EmptyTitle>
					<EmptyDescription>
						We&apos;re not currently showcasing projects under this filter.
						Explore our full portfolio to discover active real estate
						opportunities across Dubai and Abu Dhabi.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<Button asChild size="sm">
						<Link href="/portfolio">View all projects</Link>
					</Button>
				</EmptyContent>
			</Empty>
		);
	}

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

export async function generateStaticParams() {
	const categories = await client.fetch(CATEGORIES_QUERY);

	return categories.map((category) => ({
		category: category.slug,
	}));
}
