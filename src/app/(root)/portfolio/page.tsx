import { Suspense } from "react";

import { SearchParams } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { getPaginatedProjects } from "@/features/projects/actions/projects-actions";
import { loadSearchParams } from "@/features/projects/search-params";
import { PortfolioEmptyState } from "@/features/properties/components/portfolio-empty-state";
import { PortfolioFilters } from "@/features/properties/components/portfolio-filters";
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";
import { getCategories } from "@/lib/sanity/fetch";
import { cn, generatePagination } from "@/lib/utils";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
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
  const totalPages = Math.ceil(total / pageSize);
  const pagination = generatePagination(page, totalPages);

  const hasActiveFilters = searchQuery || (category && category !== "all");
  const resultsCount = projects.length;

  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Portfolios"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />

        {/* Filters */}
        <div className="my-8">
          <PortfolioFilters categories={categories} />
        </div>

        {/* Search Results Counter */}
        {hasActiveFilters && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground text-sm">
              {resultsCount === 0
                ? "No portfolios found"
                : resultsCount === 1
                  ? "1 portfolio found"
                  : `${resultsCount} portfolios found`}
              {searchQuery && <span> for &quot;{searchQuery}&quot;</span>}
              {category && category !== "all" && (
                <span>
                  {" "}
                  in {categories.find((c) => c.slug === category)?.title}
                </span>
              )}
            </p>
          </div>
        )}

        <Suspense fallback={<PropertiesListSkeleton />}>
          {projects.length === 0 ? (
            <PortfolioEmptyState className="my-8" />
          ) : (
            <AnimatedGroup
              preset="blur-slide"
              className={cn(
                "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
              )}
            >
              {projects.map((project) => (
                <PropertyCard
                  key={project._id}
                  data={project}
                  className="max-sm:py-6"
                />
              ))}
            </AnimatedGroup>
          )}
        </Suspense>

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={
                    page > 1
                      ? `?page=${page - 1}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`
                      : "#"
                  }
                  className={page <= 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {pagination.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href={`?page=${pageNumber}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`}
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href={
                    page < totalPages
                      ? `?page=${page + 1}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`
                      : "#"
                  }
                  className={
                    page >= totalPages ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
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
