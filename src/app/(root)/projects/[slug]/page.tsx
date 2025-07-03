import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import {
  getProjectBySlug,
  getProjectsCardData,
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

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const projects = await getProjectsCardData();
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="relative container pt-4 sm:pt-9">
      <ProjectHero
        title={project.title ?? "Property"}
        tags={project.overview?.tags}
        image={project.mainImage}
        location={project.location}
        developer={project.developer}
      />
      <ProjectStats
        stats={project.stats}
        description={project.shortDescription}
      />

      <Separator />

      <article className="py-20">
        <ProjectOverview
          overview={project.overview}
          projectName={project.title}
        />
        <Separator />
        <ProjectDetails
          title={project.title}
          data={project.propertyFeatures}
          image={project.propertyFeatures?.image}
        />
        <ProjectFeatures features={project.propertyFeatures?.features} />
        <ProjectAmenities amenities={project.propertyFeatures?.amenities} />
        <ProjectGallery images={project.gallery} projectName={project.title} />
        <ProjectDescription sections={project.descriptionSections} />
        <LeadSection
          title={`Want to know\nmore details?`}
          subtitle="Feel free to contact with us"
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
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
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
