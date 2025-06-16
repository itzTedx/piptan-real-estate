"use client";

import { useQueryState } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { PropertyCard } from "@/features/properties/components/property-card";
import { PropertyFilters } from "@/features/properties/components/property-filters";
import { cn } from "@/lib/utils";

import {
  CATEGORIES_QUERYResult,
  PROJECT_CARD_QUERYResult,
} from "../../../../sanity.types";
import { EmptyState } from "./empty-state";

interface Props {
  categories: CATEGORIES_QUERYResult;
  projects: PROJECT_CARD_QUERYResult;
}

export function PropertiesList({ categories, projects }: Props) {
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });
  const [tag, setTag] = useQueryState("tag", { defaultValue: "all" });
  const [sortField, setSortField] = useQueryState("sort", {
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

  const handleClearFilters = async () => {
    await setSearchQuery(null);
    await setTag("all");
    await setSortField("date");
    await setSortOrder("desc");
    await setViewMode("grid");
  };

  const initialValues = { searchQuery, tag, sortField, sortOrder };

  return (
    <div className="relative">
      <PropertyFilters
        initialValues={initialValues}
        onSearch={setSearchQuery}
        onTagChange={setTag}
        onSortChange={({ field, order }) => {
          setSortField(field);
          setSortOrder(order);
        }}
        onViewChange={setViewMode}
        categories={categories}
        className="bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
      />

      {projects.length === 0 ? (
        <EmptyState className="my-8" onClearFilters={handleClearFilters} />
      ) : (
        <AnimatedGroup
          preset="blur-slide"
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
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
