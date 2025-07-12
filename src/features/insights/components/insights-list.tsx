"use client";

import { useCallback, useEffect, useState } from "react";

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

type InsightItem =
  | INSIGHTS_QUERYResult[number]
  | FILTERED_INSIGHTS_QUERYResult[number];

interface Props {
  categories: INSIGHT_CATEGORIES_QUERYResult;
  initialInsights: INSIGHTS_QUERYResult | FILTERED_INSIGHTS_QUERYResult;
}

export function InsightsList({ categories, initialInsights }: Props) {
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "all",
  });
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const [insights, setInsights] = useState<InsightItem[]>(initialInsights);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Client-side filtering function
  const filterInsights = useCallback(() => {
    setIsLoading(true);

    try {
      const filtered = initialInsights.filter((insight) => {
        const matchesSearch =
          !searchQuery ||
          insight.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (insight.categories &&
            "title" in insight.categories &&
            insight.categories.title
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()));

        const matchesCategory =
          category === "all" ||
          (insight.categories &&
            "slug" in insight.categories &&
            insight.categories.slug === category);

        return matchesSearch && matchesCategory;
      });

      setInsights(filtered);
      setError(null);
    } catch (error) {
      console.error("Error filtering insights:", error);
      setError("Failed to update filters. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [initialInsights, searchQuery, category]);

  useEffect(() => {
    filterInsights();
  }, [filterInsights]);

  const handleSearch = () => {
    // This will be handled by the URL state
  };

  const handleTagChange = (tag: string) => {
    setCategory(tag);
  };

  return (
    <div className="relative">
      <InsightFilters
        onSearch={handleSearch}
        onTagChange={handleTagChange}
        className={cn(
          "bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
        )}
        initialSearch={searchQuery || ""}
        initialTag={category || "all"}
        categories={categories}
      />

      {error && (
        <div className="text-destructive my-4 text-center text-sm">{error}</div>
      )}

      {insights.length === 0 ? (
        <EmptyState className="my-8" />
      ) : (
        <AnimatedGroup
          preset="blur-slide"
          className={cn(
            "grid gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            isLoading && "opacity-50"
          )}
        >
          {insights.map((insight) => (
            <div className="h-full p-1" key={insight._id}>
              <InsightCard data={insight} />
            </div>
          ))}
        </AnimatedGroup>
      )}
    </div>
  );
}
