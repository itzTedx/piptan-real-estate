"use client";

import { useState } from "react";

import { SearchIcon, SortIcon, ThLargeIcon, ThListIcon } from "@sanity/icons";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TAGS = ["Show all", "Residential", "Commercial", "Luxury", "Investment"];

interface PropertyFiltersProps {
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
  onSortChange: (sort: "asc" | "desc") => void;
  onViewChange: (view: "grid" | "list") => void;
  className?: string;
}

export const PropertyFilters = ({
  onSearch,
  onTagChange,
  onSortChange,
  onViewChange,
  className,
}: PropertyFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    onTagChange(tag);
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
    onSortChange(order);
  };

  const handleViewChange = (view: "grid" | "list") => {
    setViewMode(view);
    onViewChange(view);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagChange(tag)}
              className="rounded-full"
            >
              {tag === "Show all" ? "Showing all" : tag}
            </Button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              handleSortChange(sortOrder === "asc" ? "desc" : "asc")
            }
            className={cn("h-9 w-9", sortOrder === "asc" && "rotate-180")}
          >
            <SortIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleViewChange("grid")}
            className={cn(
              "h-9 w-9",
              viewMode === "grid" && "bg-primary text-primary-foreground"
            )}
          >
            <ThLargeIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleViewChange("list")}
            className={cn(
              "h-9 w-9",
              viewMode === "list" && "bg-primary text-primary-foreground"
            )}
          >
            <ThListIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <AnimatedButton
        text="Search"
        onClick={handleSearch}
        variant="primary"
        className="w-full sm:w-auto"
      />
    </div>
  );
};
