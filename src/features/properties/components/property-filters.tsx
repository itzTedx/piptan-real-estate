"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "@sanity/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { XIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import { CATEGORIES_QUERYResult } from "../../../../sanity.types";

const propertyFiltersSchema = z.object({
  searchQuery: z.string().optional(),
  tag: z.string(),
  sortField: z.enum(["date", "price", "location", "bedrooms", "area"]),
  sortOrder: z.enum(["asc", "desc"]),
  viewMode: z.enum(["grid", "list"]),
});

type PropertyFiltersFormData = z.infer<typeof propertyFiltersSchema>;

interface PropertyFiltersProps {
  initialValues: {
    category: string;
    searchQuery: string;
    sortOrder: "desc" | "asc";
  };

  onCategoryChange: (tag: string) => void;
  onSortChange: (sort: { field: string; order: "asc" | "desc" }) => void;
  onViewChange: (view: "grid" | "list") => void;
  categories: CATEGORIES_QUERYResult;
  className?: string;
}

export const PropertyFilters = ({
  initialValues,
  onCategoryChange,
  onSortChange,
  onViewChange,
  categories,
  className,
}: PropertyFiltersProps) => {
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });
  const [tag, setTag] = useQueryState("category", {
    defaultValue: initialValues.category,
  });

  const [viewMode, setViewMode] = useQueryState<"grid" | "list">("view", {
    defaultValue: "grid",
    parse: (value): "grid" | "list" => (value === "list" ? "list" : "grid"),
  });

  const form = useForm<PropertyFiltersFormData>({
    resolver: zodResolver(propertyFiltersSchema),
    defaultValues: {
      searchQuery: searchQuery || "",
      tag: tag || initialValues.category,

      viewMode: viewMode || "grid",
    },
  });

  // Update form when URL params change
  useEffect(() => {
    form.reset({
      searchQuery: searchQuery || "",
      tag: tag || initialValues.category,

      viewMode: viewMode || "grid",
    });
  }, [searchQuery, tag, viewMode, form, initialValues]);

  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0.05, 0.1], ["100%", "80%"]);
  const margin = useTransform(scrollYProgress, [0.05, 0.1], ["0px", "auto"]);

  const handleClearFilters = async () => {
    await Promise.all([setSearchQuery(""), setTag("all"), setViewMode("grid")]);
    onCategoryChange("all");
    onSortChange({ field: "date", order: "desc" });
    onViewChange("grid");
  };

  const onSubmit = async (data: PropertyFiltersFormData) => {
    await Promise.all([
      setSearchQuery(data.searchQuery || ""),
      setTag(data.tag),

      setViewMode(data.viewMode),
    ]);
    onCategoryChange(data.tag);
    onSortChange({ field: data.sortField, order: data.sortOrder });
    onViewChange(data.viewMode);
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full items-center"
      >
        <div className="flex h-full items-center">
          <Select
            value={form.getValues("tag")}
            onValueChange={(value) => {
              form.setValue("tag", value);
              setTag(value);
              onCategoryChange(value);
            }}
          >
            <SelectTrigger
              id="type"
              className="border-foreground/40 w-32 rounded-e-none border-0 border-r data-[size=default]:h-full"
            >
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Show All</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category._id} value={category.slug || ""}>
                  {category.title?.split(" ")[0] || ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative h-full flex-1">
          <Input
            type="text"
            placeholder="Search properties..."
            {...form.register("searchQuery")}
            className="text-foreground h-full border-0 pl-10"
          />
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
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

        <div className="flex h-full items-center gap-2">
          <Select
            value={form.getValues("sortField")}
            onValueChange={(value) => {
              form.setValue(
                "sortField",
                value as "date" | "price" | "location" | "bedrooms" | "area"
              );
              // setSortField(value);
              onSortChange({
                field: value,
                order: form.getValues("sortOrder"),
              });
            }}
          >
            <SelectTrigger id="sort" className="border-foreground/40 w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date Added</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="bedrooms">Bedrooms</SelectItem>
              <SelectItem value="area">Area</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              const newOrder =
                form.getValues("sortOrder") === "asc" ? "desc" : "asc";
              form.setValue("sortOrder", newOrder);
              // setSortOrder(newOrder);
              onSortChange({
                field: form.getValues("sortField"),
                order: newOrder,
              });
            }}
            className="border-foreground/40 bg-transparent backdrop-blur-none"
          >
            <IconSort
              className={cn(
                form.getValues("sortOrder") === "asc"
                  ? "scale-y-100"
                  : "-scale-y-100"
              )}
            />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              form.setValue("viewMode", "grid");
              setViewMode("grid");
              onViewChange("grid");
            }}
            className={cn(
              "border-foreground/40 bg-transparent backdrop-blur-none",
              form.getValues("viewMode") === "grid" && "bg-foreground/20"
            )}
          >
            <IconGrid />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => {
              form.setValue("viewMode", "list");
              setViewMode("list");
              onViewChange("list");
            }}
            className={cn(
              "border-foreground/40 bg-transparent backdrop-blur-none",
              form.getValues("viewMode") === "list" && "bg-foreground/20"
            )}
          >
            <IconList />
          </Button>

          <AnimatedButton
            text="Search"
            type="submit"
            variant="outline"
            className="w-full sm:w-auto"
          />
        </div>
      </form>
    </motion.div>
  );
};
