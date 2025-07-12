"use client";

import { useEffect, useState } from "react";

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
import { getFilteredInsights } from "@/features/insights/actions/query";
import { InsightFilters } from "@/features/insights/components/insight-filters";
import { InsightCard } from "@/features/insights/components/insights-card";
import { InsightsListSkeleton } from "@/features/insights/components/insights-list-skeleton";
import { cn, generatePagination } from "@/lib/utils";

import {
  FILTERED_INSIGHTS_QUERYResult,
  INSIGHT_CATEGORIES_QUERYResult,
} from "../../../../sanity.types";

type PageProps = {
  initialInsights: FILTERED_INSIGHTS_QUERYResult;
  categories: INSIGHT_CATEGORIES_QUERYResult;
};

export default function InsightsPageWithFiltersAndPagination({
  initialInsights,
  categories,
}: PageProps) {
  const [insights, setInsights] = useState(initialInsights);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const fetchFilteredInsights = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const { insights: filteredInsights } = await getFilteredInsights({
        searchQuery,
        category,
      });
      setInsights(filteredInsights);
      setError(null);
      setPage(1); // Reset to first page when filters change
    } catch (error) {
      console.error("Error fetching filtered insights:", error);
      setError("Failed to update filters. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredInsights();
  }, [searchQuery, category]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagChange = (tag: string) => {
    setCategory(tag);
  };

  // Calculate pagination
  const totalPages = Math.ceil(insights.length / pageSize);
  const pagination = generatePagination(page, totalPages);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedInsights = insights.slice(startIndex, endIndex);

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
        <InsightFilters
          onSearch={handleSearch}
          onTagChange={handleTagChange}
          className={cn(
            "bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
          )}
          initialSearch={searchQuery}
          initialTag={category}
          categories={categories}
        />

        {error && (
          <div className="text-destructive my-4 text-center text-sm">
            {error}
          </div>
        )}

        {isLoading ? (
          <InsightsListSkeleton />
        ) : paginatedInsights.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-lg font-semibold">No insights found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        ) : (
          <>
            <div
              className={cn(
                "grid gap-6",
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {paginatedInsights.map((insight) => (
                <div className="h-full p-1" key={insight._id}>
                  <InsightCard data={insight} />
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setPage(Math.max(1, page - 1))}
                      className={
                        page <= 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>

                  {pagination.map((pageNumber, index) => (
                    <PaginationItem key={index}>
                      {pageNumber === "..." ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          onClick={() => setPage(pageNumber as number)}
                          isActive={pageNumber === page}
                        >
                          {pageNumber}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setPage(Math.min(totalPages, page + 1))}
                      className={
                        page >= totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </section>
    </main>
  );
}
