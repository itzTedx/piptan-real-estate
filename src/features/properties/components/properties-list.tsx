"use client";

import { useCallback, useEffect, useState } from "react";

import { useQueryState } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { getFilteredProjects } from "@/features/projects/actions/projects-actions";
import { PropertyCard } from "@/features/properties/components/property-card";
import { PropertyFilters } from "@/features/properties/components/property-filters";
import { cn } from "@/lib/utils";

import {
  CATEGORIES_QUERYResult,
  FILTERED_PROJECTS_QUERYResult,
} from "../../../../sanity.types";
import { EmptyState } from "./empty-state";

interface Props {
  categories: CATEGORIES_QUERYResult;
  initialProjects: FILTERED_PROJECTS_QUERYResult;
}

export function PropertiesList({ categories, initialProjects }: Props) {
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "all",
  });
  const [, setSortField] = useQueryState("sort", {
    defaultValue: "date",
  });
  const [sortOrder, setSortOrder] = useQueryState<"asc" | "desc">("order", {
    defaultValue: "desc",
    parse: (value): "asc" | "desc" => (value === "asc" ? "asc" : "desc"),
  });
  const [viewMode, setViewMode] = useQueryState<"grid" | "list">("view", {
    defaultValue: "grid",
    parse: (value): "grid" | "list" => (value === "list" ? "list" : "grid"),
  });
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const [projects, setProjects] = useState(initialProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFilteredProjects = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const { projects: filteredProjects } = await getFilteredProjects({
        searchQuery,
        category,
      });
      setProjects(filteredProjects);
      setError(null);
    } catch (error) {
      console.error("Error fetching filtered projects:", error);
      setError("Failed to update filters. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, category, isLoading]);

  useEffect(() => {
    fetchFilteredProjects();
  }, [fetchFilteredProjects]);

  const initialValues = { category, searchQuery, sortOrder };

  // console.log("initial Projects: ", initialProjects);

  return (
    <div className="relative">
      <PropertyFilters
        initialValues={initialValues}
        onCategoryChange={setCategory}
        onSortChange={({ field, order }) => {
          setSortField(field);
          setSortOrder(order);
        }}
        onViewChange={setViewMode}
        categories={categories}
        className={cn(
          "bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
        )}
      />

      {error && (
        <div className="text-destructive my-4 text-center text-sm">{error}</div>
      )}

      {projects.length === 0 ? (
        <EmptyState className="my-8" />
      ) : (
        <AnimatedGroup
          preset="blur-slide"
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1",
            isLoading && "opacity-50"
          )}
        >
          {projects.map((project) => (
            <PropertyCard
              key={project._id}
              data={project}
              layout={viewMode}
              className="max-sm:py-6"
            />
          ))}
        </AnimatedGroup>
      )}
    </div>
  );
}
