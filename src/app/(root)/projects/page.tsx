import { Suspense } from "react";

import { SearchParams } from "nuqs";

import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { getFilteredProjects } from "@/features/projects/actions/projects-actions";
import { loadSearchParams } from "@/features/projects/search-params";
import { PropertiesList } from "@/features/properties/components/properties-list";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { getCategories } from "@/lib/sanity/fetch";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { q } = await loadSearchParams(searchParams);

  console.log("Query: ", q);

  const categories = await getCategories();
  // const projects = await getProjectsCardData();
  const { projects } = await getFilteredProjects({
    searchQuery: q,
  });

  console.log("Projects", projects);

  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Properties"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />
        <Suspense fallback={<PropertiesListSkeleton />}>
          <PropertiesList categories={categories} projects={projects} />
        </Suspense>
      </section>
      <LeadSection
        title={`Let the experts help you\nmake the right investment`}
        highlightText="the right investment"
        subtitle="Feel free to contact with us"
        variant="compact"
      />
    </main>
  );
}
