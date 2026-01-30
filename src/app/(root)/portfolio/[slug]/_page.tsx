import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";

import { LeadSection } from "@/features/forms/lead-form/section";
import {
	getProjectBySlug,
	getProjectBySlugStatic,
	getProjectsCardData,
	getProjectsSlugsStatic,
} from "@/features/projects/actions/projects-actions";
import { ProjectAmenities } from "@/features/projects/components/project-amenities";
import { ProjectDescription } from "@/features/projects/components/project-description";
import { ProjectDetails } from "@/features/projects/components/project-details";
import { ProjectFeatures } from "@/features/projects/components/project-features";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { ProjectHero } from "@/features/projects/components/project-hero";
import { ProjectOverview } from "@/features/projects/components/project-overview";
import { ProjectStats } from "@/features/projects/components/project-stats";
import { RelatedProjects } from "@/features/projects/components/related-projects";

type Params = Promise<{ slug: string }>;

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

// Generate static params for all projects
export async function generateStaticParams() {
	try {
		const projects = await getProjectsSlugsStatic();

		return projects
			.filter((project: { slug: string | null }) => project.slug) // Only include projects with slugs
			.map((project: { slug: string | null }) => ({
				slug: project.slug,
			}));
	} catch (error) {
		console.error("Error generating static params for projects:", error);
		return [];
	}
}

export default async function ProjectPage({ params }: { params: Params }) {
	const { slug } = await params;
	const projects = await getProjectsCardData();
	const project = await getProjectBySlug(slug);

	if (!project) notFound();

	return (
		<main className="container relative pt-4 sm:pt-9">
			<ProjectHero
				developer={project.developer}
				image={project.mainImage}
				location={project.location}
				tags={project.overview?.tags}
				title={project.title ?? "Property"}
			/>
			<ProjectStats
				description={project.shortDescription}
				stats={project.stats}
			/>

			<Separator />

			<article className="py-20">
				<ProjectOverview
					overview={project.overview}
					projectName={project.title}
				/>
				<Separator />
				<ProjectDetails
					data={project.propertyFeatures}
					image={project.propertyFeatures?.image}
					title={project.title}
				/>
				<ProjectFeatures features={project.propertyFeatures?.features} />
				<ProjectAmenities amenities={project.propertyFeatures?.amenities} />
				<ProjectGallery images={project.gallery} projectName={project.title} />
				<ProjectDescription sections={project.descriptionSections} />
				<LeadSection
					subtitle="Feel free to contact with us"
					title={"Want to know\nmore details?"}
					variant="default"
				/>
				<RelatedProjects projects={projects} />
			</article>
		</main>
	);
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = await getProjectBySlugStatic(slug);
	if (!project) {
		return {
			title: "Project Not Found | Piptan Investments",
			description: "This project could not be found.",
			robots: { index: false, follow: false },
		};
	}
	const seo = project.seo || {};
	const title =
		seo.title ||
		`${project.title} - Luxury Living | Piptan Investments` ||
		"Project | Piptan Investments";
	const description =
		seo.description ||
		project.shortDescription ||
		"Discover luxury real estate projects in Dubai.";
	const keywords = seo.keywords || [];
	const imageUrl = project.mainImage?.asset?.url || "/images/hero.webp";
	const canonical = `https://www.piptan.ae/projects/${project.slug}`;
	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: "Piptan Investments",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			locale: "en_US",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl],
			creator: "@piptan",
		},
		alternates: { canonical },
		metadataBase: new URL("https://www.piptan.ae"),
	};
}
