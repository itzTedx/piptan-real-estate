import { Suspense } from "react";

// import { SearchParams } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { getProjectsCardData } from "@/features/projects/actions/projects-actions";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn } from "@/lib/utils";

// type PageProps = {
//   searchParams: Promise<SearchParams>;
// };

export default async function ProjectsPage() {
  // export default async function ProjectsPage({ searchParams }: PageProps) {
  // const { q, category } = await loadSearchParams(searchParams);

  // const categories = await getCategories();
  // const { projects } = await getFilteredProjects({
  //   searchQuery: q,
  //   category,
  // });

  const projects = await getProjectsCardData();

  // console.log("projects", projects);

  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Properties"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />
        <Suspense fallback={<PropertiesListSkeleton />}>
          <AnimatedGroup
            preset="blur-slide"
            className={cn(
              "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              // viewMode === "grid"
              //   ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              //   : "grid-cols-1",
              // isLoading && "opacity-50"
            )}
          >
            {projects.map((project) => (
              <PropertyCard
                key={project._id}
                data={project}
                // layout={viewMode}
                className="max-sm:py-6"
              />
            ))}
          </AnimatedGroup>
          {/* <PropertiesList categories={categories} initialProjects={projects} /> */}
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
