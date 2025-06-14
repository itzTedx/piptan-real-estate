"use client";

import { useState } from "react";

import { SearchIcon } from "@sanity/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { XIcon } from "lucide-react";

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
import { cn } from "@/lib/utils";

import { PropertyType } from "../types";

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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0.05, 0.1], ["100%", "80%"]);
  const margin = useTransform(scrollYProgress, [0.05, 0.1], ["0px", "auto"]);

  const handleSearch = () => {
    onSearch(searchQuery);
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
        <XIcon className="absolute top-1/2 right-3 size-4 -translate-y-1/2" />
      </div>

      <div className="flex items-center gap-2.5 px-1">
        <Select defaultValue="1">
          <SelectTrigger id="sort" className="border-foreground/40 w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Date Added</SelectItem>
            <SelectItem value="2">Price</SelectItem>
            <SelectItem value="4">Location</SelectItem>
            <SelectItem value="5">Bedrooms</SelectItem>
            <SelectItem value="6">Square Footage</SelectItem>
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
