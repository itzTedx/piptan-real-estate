import { type MetadataRoute } from "next";

import { getCategories } from "@/features/home/actions";
import { getInsights } from "@/features/insights/actions/query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		// Fetch all categories and insights using existing actions
		const [categories, insights] = await Promise.all([
			getCategories(),
			getInsights(),
		]);

		// Static pages
		const staticPages = [
			{
				url: "https://piptan.ae/",
				lastModified: new Date().toISOString(),
				changeFrequency: "daily" as const,
				priority: 1,
			},
			{
				url: "https://piptan.ae/about",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/portfolio",
				lastModified: new Date().toISOString(),
				changeFrequency: "daily" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/insights",
				lastModified: new Date().toISOString(),
				changeFrequency: "weekly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/contact",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-investment",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-management-in-dubai",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/legal-support",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-valuation",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/relocation-services",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/legal/terms-of-service",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/legal/privacy",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
		];

		// Category pages
		const categoryPages = categories
			.filter((category: { slug: string | null }) => category.slug)
			.map((category: { slug: string | null }) => ({
				url: `https://piptan.ae/portfolio/${category.slug}`,
				lastModified: new Date().toISOString(),
				changeFrequency: "weekly" as const,
				priority: 0.8,
			}));

		// Insight pages
		const insightPages = insights
			.filter((insight: { slug: string | null }) => insight.slug)
			.map((insight: { slug: string | null; createdAt: string }) => ({
				url: `https://piptan.ae/insights/${insight.slug}`,
				lastModified: new Date(insight.createdAt).toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			}));

		return [...staticPages, ...categoryPages, ...insightPages];
	} catch (error) {
		console.error("Error generating sitemap:", error);

		// Fallback to static pages only
		return [
			{
				url: "https://piptan.ae/",
				lastModified: new Date().toISOString(),
				changeFrequency: "daily" as const,
				priority: 1,
			},
			{
				url: "https://piptan.ae/about",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/portfolio",
				lastModified: new Date().toISOString(),
				changeFrequency: "daily" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/insights",
				lastModified: new Date().toISOString(),
				changeFrequency: "weekly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/contact",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-investment",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-management-in-dubai",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/legal-support",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/property-valuation",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/services/relocation-services",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/legal/terms-of-service",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
			{
				url: "https://piptan.ae/legal/privacy",
				lastModified: new Date().toISOString(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			},
		];
	}
}
