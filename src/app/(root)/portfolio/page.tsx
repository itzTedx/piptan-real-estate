import { Suspense } from "react";

// import { SearchParams } from "nuqs";

import { Carousel, CarouselActiveIndex, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { getProjects } from "@/features/projects/actions/projects-actions";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";

// type PageProps = {
//   searchParams: Promise<SearchParams>;
// };

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

export default async function ProjectsPage() {
  // const {
  //   page,
  //   pageSize,
  //   q: searchQuery,
  //   category,
  // } = await loadSearchParams(searchParams);

  // Fetch categories for filtering
  // const categories = await getCategories();



  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Portfolios"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />

        {/* Filters */}
        {/* <PortfolioFilters categories={categories} /> */}

        <Suspense fallback={<PropertiesListSkeleton />}>
            <SuspendedPortfolioList  />
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

async function SuspendedPortfolioList() {
  const projects = await getProjects();
  const totalItems = projects.length;
  
  return (
    <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
        <CarouselContent className="-ml-4">
          {projects.map((project) => (
            <PropertyCard
            key={project._id}
            data={project}
              className="pl-4 md:basis-1/2 lg:basis-1/3 pb-1"
           />
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center gap-12">
          <p className="text-foreground/80 shrink-0 tracking-widest">
            <CarouselActiveIndex /> / {totalItems.toString().padStart(2, "0")}
          </p>
          <ProgressIndicator totalItems={totalItems} />
          <div className="relative flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
)
}