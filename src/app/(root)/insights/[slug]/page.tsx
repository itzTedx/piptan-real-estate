import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

import { HeroHeader } from "@/components/hero-header";

import {
	getInsightBySlug,
	getInsightBySlugStatic,
	getInsightsStatic,
} from "@/features/insights/actions/query";
import { InsightContent } from "@/features/insights/components/insight-content";
import { urlFor } from "@/lib/sanity/image";

const BASE_URL = "https://www.piptan.ae";

interface Params {
	slug: string;
}

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

// Generate static params for all insights
export async function generateStaticParams() {
	try {
		const insights = await getInsightsStatic();

		return insights
			.filter((insight: { slug: string | null }) => insight.slug) // Only include insights with slugs
			.map((insight: { slug: string | null }) => ({
				slug: insight.slug!,
			}));
	} catch (error) {
		console.error("Error generating static params for insights:", error);
		return [];
	}
}

// Generate metadata for the page
export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const insight = await getInsightBySlugStatic(slug);

	if (!insight) {
		return {
			title: "Insight Not Found | Piptan Investments",
			description:
				"The requested insight could not be found on Piptan Investments.",
		};
	}

	const metaTitle =
		insight.seo?.meta_title || `${insight.title} | Piptan Investments`;
	const metaDescription =
		insight.seo?.meta_description ||
		insight.excerpt ||
		"Expert real estate insights from Piptan Investments on the Dubai property market.";

	const metaKeywords =
		insight.seo?.meta_keywords
			?.split(",")
			.map((keyword) => keyword.trim())
			.filter(Boolean) ||
		[
			insight.title ?? "",
			insight.categories?.title ?? "",
			"Dubai real estate",
			"property investment Dubai",
			"Piptan Investments insights",
		].filter(Boolean);

	const url = `${BASE_URL}/insights/${slug}`;

	return {
		title: metaTitle,
		description: metaDescription,
		keywords: metaKeywords,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: metaTitle,
			description: metaDescription,
			url,
			type: "article",
			publishedTime: insight.createdAt,
			modifiedTime: insight.updatedAt || insight.createdAt,
			images: insight.seo?.ogImage
				? [
						{
							url: urlFor(insight.seo.ogImage).url(),
							width: 1200,
							height: 630,
							alt: insight.title || "Insight image",
						},
					]
				: insight.image?.asset?.url
					? [
							{
								url: insight.image.asset.url,
								width: insight.image.asset.metadata?.dimensions?.width || 1200,
								height: insight.image.asset.metadata?.dimensions?.height || 630,
								alt: insight.image.alt || insight.title || "Insight image",
							},
						]
					: [
							{
								url: "/images/blogs/transport-logistics-products.jpg",
								width: 1200,
								height: 630,
								alt: "Piptan Investments Dubai real estate insight",
							},
						],
		},
		twitter: {
			card: "summary_large_image",
			title: metaTitle,
			description: metaDescription,
			images: insight.seo?.ogImage
				? [urlFor(insight.seo.ogImage).url()]
				: insight.image?.asset?.url
					? [insight.image.asset.url]
					: ["/images/blogs/transport-logistics-products.jpg"],
		},
	};
}

// Structured data for the article
const generateArticleStructuredData = (insight: {
	title: string | null;
	excerpt: string | null;
	slug: string | null;
	image: {
		asset: {
			url: string | null;
		} | null;
	} | null;
	author: {
		name: string | null;
	} | null;
	createdAt: string;
	updatedAt?: string;
}) => {
	const url = insight.slug
		? `${BASE_URL}/insights/${insight.slug}`
		: `${BASE_URL}/insights`;

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: insight.title,
		description:
			insight.excerpt ||
			"Expert real estate insights from Piptan Investments on the Dubai property market.",
		image:
			insight.image?.asset?.url ||
			"/images/blogs/transport-logistics-products.jpg",
		author: insight.author
			? {
					"@type": "Person",
					name: insight.author.name,
				}
			: {
					"@type": "Organization",
					name: "Piptan Investments",
				},
		publisher: {
			"@type": "Organization",
			name: "Piptan Investments",
			logo: {
				"@type": "ImageObject",
				url: "/images/logo.png",
			},
		},
		datePublished: insight.createdAt,
		dateModified: insight.updatedAt || insight.createdAt,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		url,
	};
};

const generateBreadcrumbStructuredData = (insight: {
	title: string | null;
	slug: string | null;
}) => {
	const itemUrl = insight.slug
		? `${BASE_URL}/insights/${insight.slug}`
		: `${BASE_URL}/insights`;

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: BASE_URL,
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Insights",
				item: `${BASE_URL}/insights`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: insight.title || "Insight",
				item: itemUrl,
			},
		],
	};
};

export default async function InsightsSlugPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const insight = await getInsightBySlug(slug);

	if (!insight) {
		notFound();
	}

	const articleStructuredData = generateArticleStructuredData(insight);
	const breadcrumbStructuredData = generateBreadcrumbStructuredData(insight);

	return (
		<>
			<main className="container relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
				<HeroHeader
					className="mx-auto max-w-6xl"
					subtitle="Insights & News"
					title={insight.title || "Insight"}
					titleClassName="lg:text-6xl text-balance"
				/>

				{insight.image && (
					<figure className="container relative -mt-12 mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl">
						<Image
							alt={insight.image.alt || insight.title || "Insight image"}
							className="object-cover"
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
							src={
								insight.image.asset?.url ||
								"/images/blogs/transport-logistics-products.jpg"
							}
						/>
					</figure>
				)}

				<InsightContent data={insight} />
			</main>
			<Script type="application/ld+json">
				{JSON.stringify(articleStructuredData)}
			</Script>
			<Script type="application/ld+json">
				{JSON.stringify(breadcrumbStructuredData)}
			</Script>
		</>
	);
}
