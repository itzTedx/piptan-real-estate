"use client";

import { useState } from "react";

import { PROPERTIES } from "@/constants/mock-data";
import { PropertyCard } from "@/features/properties/components/property-card";
import { PropertyFilters } from "@/features/properties/components/property-filters";
import { cn } from "@/lib/utils";

// Mock data for demonstration

export function PropertiesList() {
  const [properties, setProperties] = useState(PROPERTIES);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleSearch = (query: string) => {
    const filtered = PROPERTIES.filter((property) =>
      property.name.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filtered);
  };

  const handleTagChange = (tag: string) => {
    if (tag === "All") {
      setProperties(PROPERTIES);
    } else {
      const filtered = PROPERTIES.filter((property) => property.type === tag);
      setProperties(filtered);
    }
  };

  const handleSortChange = (sort: "asc" | "desc") => {
    const sorted = [...properties].sort((a, b) => {
      const dateA = a.date.getTime();
      const dateB = b.date.getTime();
      return sort === "asc" ? dateA - dateB : dateB - dateA;
    });
    setProperties(sorted);
  };

  return (
    <>
      <PropertyFilters
        onSearch={handleSearch}
        onTagChange={handleTagChange}
        onSortChange={handleSortChange}
        onViewChange={setViewMode}
        className="mb-8"
      />

      <ul
        className={cn(
          "grid gap-6",
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        )}
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            data={property}
            className="max-sm:py-6"
          />
        ))}
      </ul>
    </>
  );
}
