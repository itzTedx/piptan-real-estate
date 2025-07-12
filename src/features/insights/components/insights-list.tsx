"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useQueryState } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { InsightFilters } from "@/features/insights/components/insight-filters";
import { InsightCard } from "@/features/insights/components/insights-card";
import { cn } from "@/lib/utils";

import {
  FILTERED_INSIGHTS_QUERYResult,
  INSIGHTS_QUERYResult,
  INSIGHT_CATEGORIES_QUERYResult,
} from "../../../../sanity.types";
import { EmptyState } from "./empty-state";

interface Props {
  categories: INSIGHT_CATEGORIES_QUERYResult;
  initialInsights: INSIGHTS_QUERYResult | FILTERED_INSIGHTS_QUERYResult;
}

export function InsightsList({ categories, initialInsights }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "all",
  });
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  // Force refresh when search parameters change
  useEffect(() => {
    const currentQ = searchParams.get("q");
    const currentCategory = searchParams.get("category");

    // If URL params don't match our state, refresh the page
    if (currentQ !== searchQuery || currentCategory !== category) {
      router.refresh();
    }
  }, [searchParams, searchQuery, category, router]);

  const handleSearch = () => {
    // This will be handled by the URL state and server-side filtering
  };

  const handleTagChange = (tag: string) => {
    setCategory(tag);
  };

  const hasActiveFilters = searchQuery || (category && category !== "all");
  const resultsCount = initialInsights.length;

  return (
    <div className="relative">
      <InsightFilters
        onSearch={handleSearch}
        onTagChange={handleTagChange}
        className={cn(
          "bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
        )}
        initialTag={category || "all"}
        categories={categories}
      />

      {/* Search Results Counter */}
      {hasActiveFilters && (
        <div className="mb-6 text-center">
          <p className="text-muted-foreground text-sm">
            {resultsCount === 0
              ? "No insights found"
              : resultsCount === 1
                ? "1 insight found"
                : `${resultsCount} insights found`}
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

      {initialInsights.length === 0 ? (
        <EmptyState className="my-8" />
      ) : (
        <AnimatedGroup
          preset="blur-slide"
          className={cn(
            "grid gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {initialInsights.map((insight) => (
            <div className="h-full p-1" key={insight._id}>
              <InsightCard data={insight} />
            </div>
          ))}
        </AnimatedGroup>
      )}
    </div>
  );
}
