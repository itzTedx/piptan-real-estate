import { type MetadataRoute } from "next";

import { getInsights } from "@/features/insights/actions/query";
import { getProjects } from "@/features/projects/actions/projects-actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all projects and insights using existing actions
    const [projects, insights] = await Promise.all([
      getProjects(),
      getInsights(),
    ]);

    // Static pages
    const staticPages = [
      {
        url: "https://www.piptan.ae/",
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 1,
      },
      {
        url: "https://www.piptan.ae/about",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: "https://www.piptan.ae/portfolio",
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.9,
      },
      {
        url: "https://www.piptan.ae/insights",
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: "https://www.piptan.ae/contact",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: "https://www.piptan.ae/services",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ];

    // Project pages - use current date since _updatedAt is not available in PORTFOLIOS_QUERY
    const projectPages = projects
      .filter((project: { slug: string | null }) => project.slug)
      .map((project: { slug: string | null }) => ({
        url: `https://www.piptan.ae/portfolio/${project.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));

    // Insight pages
    const insightPages = insights
      .filter((insight: { slug: string | null }) => insight.slug)
      .map((insight: { slug: string | null; createdAt: string }) => ({
        url: `https://www.piptan.ae/insights/${insight.slug}`,
        lastModified: new Date(insight.createdAt).toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));

    return [...staticPages, ...projectPages, ...insightPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);

    // Fallback to static pages only
    return [
      {
        url: "https://www.piptan.ae/",
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 1,
      },
      {
        url: "https://www.piptan.ae/about",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: "https://www.piptan.ae/portfolio",
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: 0.9,
      },
      {
        url: "https://www.piptan.ae/insights",
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: "https://www.piptan.ae/contact",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: "https://www.piptan.ae/services",
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ];
  }
}
