"use client";

import { useQueryState } from "nuqs";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { PROPERTIES } from "@/constants/mock-data";
import { EmptyState } from "@/features/properties/components/empty-state";
import { PropertyCard } from "@/features/properties/components/property-card";
import { PropertyFilters } from "@/features/properties/components/property-filters";
import { cn } from "@/lib/utils";

import {
  CATEGORIES_QUERYResult,
  PROJECT_CARD_QUERYResult,
} from "../../../../sanity.types";

interface Props {
  categories: CATEGORIES_QUERYResult;
  projects: PROJECT_CARD_QUERYResult;
}

export function PropertiesList({ categories, projects }: Props) {
  const [searchQuery, setSearchQuery] = useQueryState("q");
  const [tag, setTag] = useQueryState("tag", { defaultValue: "all" });
  const [sortField, setSortField] = useQueryState("sortField", {
    defaultValue: "date",
  });
  const [sortOrder, setSortOrder] = useQueryState<"asc" | "desc">("sortOrder", {
    defaultValue: "desc",
    parse: (value): "asc" | "desc" => (value === "asc" ? "asc" : "desc"),
  });
  const [viewMode, setViewMode] = useQueryState<"grid" | "list">("view", {
    defaultValue: "grid",
    parse: (value): "grid" | "list" => (value === "list" ? "list" : "grid"),
  });

  const handleSortChange = ({
    field,
    order,
  }: {
    field: string;
    order: "asc" | "desc";
  }) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handleClearFilters = async () => {
    await setSearchQuery(null);
    await setTag("all");
    await setSortField("date");
    await setSortOrder("desc");
    await setViewMode("grid");
  };

  // Filter and sort properties based on URL parameters
  const properties = PROPERTIES.filter((property) => {
    const matchesSearch =
      !searchQuery ||
      property.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = tag === "all" || property.category === tag;
    return matchesSearch && matchesTag;
  }).sort((a, b) => {
    const multiplier = sortOrder === "asc" ? 1 : -1;
    switch (sortField) {
      case "date":
        return multiplier * (a.date.getTime() - b.date.getTime());
      case "price":
        return multiplier * (a.price - b.price);
      case "bedrooms":
        return multiplier * ((a.bedrooms ?? 0) - (b.bedrooms ?? 0));
      case "squareFootage":
        return multiplier * (a.area - b.area);
      case "location":
        return multiplier * a.location.localeCompare(b.location);
      default:
        return 0;
    }
  });

  return (
    <div className="relative">
      <PropertyFilters
        onSearch={setSearchQuery}
        onTagChange={setTag}
        onSortChange={handleSortChange}
        onViewChange={setViewMode}
        categories={categories}
        className="bg-muted/40 sticky top-[9%] z-50 my-8 backdrop-blur-2xl"
      />

      {properties.length === 0 ? (
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
          {projects.map((property) => (
            <PropertyCard
              key={property._id}
              data={property}
              layout={viewMode}
              className="max-sm:py-6"
            />
          ))}
        </AnimatedGroup>
      )}
    </div>
  );
}
