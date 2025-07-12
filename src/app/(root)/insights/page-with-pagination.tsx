import { Suspense } from "react";

import { SearchParams } from "nuqs";

import { IconCollection } from "@/assets/icons";
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
import { getPaginatedInsights } from "@/features/insights/actions/query";
import { InsightCard } from "@/features/insights/components/insights-card";
import { InsightsListSkeleton } from "@/features/insights/components/insights-list-skeleton";
import { cn, generatePagination } from "@/lib/utils";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function InsightsPageWithPagination({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const pageSize = Number(params.pageSize) || 9;

  const { insights, total } = await getPaginatedInsights(page, pageSize);

  const totalPages = Math.ceil(total / pageSize);
  const pagination = generatePagination(page, totalPages);

  return (
    <main className="container space-y-12 pt-4 sm:pt-9 md:pt-12">
      <section>
        <SectionHeader
          badge="Insights"
          title="All the Essentials to Begin Your Property Journey with Piptan"
          subtitle="Explore market trends, property tips, and investment updates to help you stay ahead in the real estate world with confidence."
          icon={<IconCollection className="size-3 sm:size-4" />}
          hasHighlight
          highlightText="Property Journey with Piptan"
        />
      </section>
      <Separator />
      <section className="mb-20">
        <Suspense fallback={<InsightsListSkeleton />}>
          <div
            className={cn(
              "grid gap-6",
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {insights.map((insight) => (
              <div className="h-full p-1" key={insight._id}>
                <InsightCard data={insight} />
              </div>
            ))}
          </div>
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
    </main>
  );
}
