import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";

import { SearchParams } from "nuqs";

import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { getPaginatedProjects } from "@/features/projects/actions/projects-actions";
import { loadSearchParams } from "@/features/projects/search-params";
import { PortfolioFilters } from "@/features/properties/components/portfolio-filters";
import { PortfolioList } from "@/features/properties/components/portfolio-list";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { getCategories } from "@/lib/sanity/fetch";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

// Force dynamic rendering to prevent caching issues
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProjectsPage({ searchParams }: PageProps) {
  noStore();
  const {
    page,
    pageSize,
    q: searchQuery,
    category,
  } = await loadSearchParams(searchParams);

  // Fetch categories for filtering
  const categories = await getCategories();

  const { projects, total } = await getPaginatedProjects(
    page,
    pageSize,
    searchQuery,
    category
  );

  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Portfolios"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />

        {/* Filters */}
        <PortfolioFilters categories={categories} />

        <Suspense fallback={<PropertiesListSkeleton />}>
          <PortfolioList
            projects={projects}
            total={total}
            page={page}
            pageSize={pageSize}
            searchQuery={searchQuery}
            category={category}
          />
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
