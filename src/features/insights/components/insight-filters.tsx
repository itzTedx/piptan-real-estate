import { useState } from "react";

import { Input } from "@/components/ui/input";
import { OverflowArea, OverflowItem } from "@/components/ui/scroll-overflow";
import { cn } from "@/lib/utils";

import { INSIGHT_CATEGORIES_QUERYResult } from "../../../../sanity.types";

interface Props {
  className?: string;
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
  initialSearch?: string;
  initialTag?: string;
  categories: INSIGHT_CATEGORIES_QUERYResult;
}

export function InsightFilters({
  className,
  onSearch,
  onTagChange,
  initialSearch = "",
  initialTag = "all",
  categories,
}: Props) {
  const [searchValue, setSearchValue] = useState(initialSearch);
  const [activeTag, setActiveTag] = useState(initialTag);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleTagClick = (tag: string) => {
    const normalizedTag = tag === "All" ? "all" : tag;
    setActiveTag(normalizedTag);
    onTagChange(normalizedTag);
  };

  return (
    <div
      className={cn(
        "relative grid grid-cols-4 items-center gap-4 p-4",
        className
      )}
    >
      <OverflowArea containerClassName="col-span-3">
        <OverflowItem
          item="All"
          variant={activeTag === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleTagClick("All")}
        >
          All
        </OverflowItem>
        {categories.map((category) => (
          <OverflowItem
            key={category._id}
            item={category.title || ""}
            variant={
              activeTag === (category.slug || "") ? "default" : "outline"
            }
            size="sm"
            onClick={() => handleTagClick(category.slug || "")}
          >
            {category.title}
          </OverflowItem>
        ))}
      </OverflowArea>
      <Input
        type="search"
        placeholder="Search insights..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
