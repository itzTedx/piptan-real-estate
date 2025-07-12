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
import { PropertiesListSkeleton } from "@/features/properties/components/properties-list-skeleton";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn, generatePagination } from "@/lib/utils";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { page, pageSize } = await loadSearchParams(searchParams);

  const { projects, total } = await getPaginatedProjects(page, pageSize);
  const totalPages = Math.ceil(total / pageSize);
  const pagination = generatePagination(page, totalPages);

  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Portfolios"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />
        <Suspense fallback={<PropertiesListSkeleton />}>
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
        </Suspense>

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={page > 1 ? `?page=${page - 1}` : "#"}
                  className={page <= 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {pagination.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href={`?page=${pageNumber}`}
                      isActive={pageNumber === page}
                    >
                      {pageNumber}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href={page < totalPages ? `?page=${page + 1}` : "#"}
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
