"use client";

import { SearchIcon } from "@sanity/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { XIcon } from "lucide-react";
import { useQueryState } from "nuqs";

import { IconGrid, IconList, IconSort } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { PropertyType } from "../types";

interface PropertyFiltersProps {
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
  onSortChange: (sort: { field: string; order: "asc" | "desc" }) => void;
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
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });
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

  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0.05, 0.1], ["100%", "80%"]);
  const margin = useTransform(scrollYProgress, [0.05, 0.1], ["0px", "auto"]);

  const handleClearFilters = async () => {
    await setSearchQuery("");
    await setSortField("date");
    await setSortOrder("desc");
    await setViewMode("grid");
    onSearch("");
    onTagChange("all");
    onSortChange({ field: "date", order: "desc" });
    onViewChange("grid");
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleSortChange = async (order: "asc" | "desc") => {
    await setSortOrder(order);
    onSortChange({ field: sortField, order });
  };

  const handleSortFieldChange = async (field: string) => {
    await setSortField(field);
    onSortChange({ field, order: sortOrder });
  };

  const handleViewChange = async (view: "grid" | "list") => {
    await setViewMode(view);
    onViewChange(view);
  };

  return (
    <motion.div
      style={{
        width,
        marginLeft: margin,
        marginRight: margin,
      }}
      className={cn(
        "border-foreground/40 flex h-14 items-center rounded-md border",
        className
      )}
    >
      <div className="flex h-full items-center">
        <Select
          defaultValue="all"
          onValueChange={(value) => onTagChange(value)}
        >
          <SelectTrigger
            id="type"
            className="border-foreground/40 w-32 rounded-e-none border-0 border-r data-[size=default]:h-full"
          >
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Show All</SelectItem>
            <SelectItem value={PropertyType.Residential}>
              Residential
            </SelectItem>
            <SelectItem value={PropertyType.Luxury}>Luxury</SelectItem>
            <SelectItem value={PropertyType.Commercial}>Commercial</SelectItem>
            <SelectItem value={PropertyType.Investment}>Investment</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative h-full flex-1">
        <Input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-foreground h-full border-0 pl-10"
        />
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleClearFilters}
              size="icon"
              variant="ghost"
              className="absolute top-1/2 right-3 -translate-y-1/2"
            >
              <XIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clear all filters</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2.5 px-1">
        <Select defaultValue={sortField} onValueChange={handleSortFieldChange}>
          <SelectTrigger id="sort" className="border-foreground/40 w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Added</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="location">Location</SelectItem>
            <SelectItem value="bedrooms">Bedrooms</SelectItem>
            <SelectItem value="squareFootage">Square Footage</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSortChange(sortOrder === "asc" ? "desc" : "asc")}
          className="border-foreground/40 bg-transparent backdrop-blur-none"
        >
          <IconSort
            className={cn(sortOrder === "asc" ? "scale-y-100" : "-scale-y-100")}
          />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleViewChange("grid")}
          className={cn(
            "border-foreground/40 bg-transparent backdrop-blur-none",
            viewMode === "grid" && "bg-foreground/20"
          )}
        >
          <IconGrid />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleViewChange("list")}
          className={cn(
            "border-foreground/40 bg-transparent backdrop-blur-none",
            viewMode === "list" && "bg-foreground/20"
          )}
        >
          <IconList />
        </Button>

        <AnimatedButton
          text="Search"
          onClick={handleSearch}
          variant="outline"
          className="w-full sm:w-auto"
        />
      </div>
    </motion.div>
  );
};
