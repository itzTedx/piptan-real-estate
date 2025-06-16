import { useState } from "react";

import { Input } from "@/components/ui/input";
import { OverflowArea, OverflowItem } from "@/components/ui/scroll-overflow";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
  initialSearch?: string;
  initialTag?: string;
}

const TAGS = [
  "All",
  "Market Insights",
  "Smart Investments",
  "Property Guide",
  "Investment Strategy",
  "Market Analysis",
  "Lifestyle",
  "Legal Guide",
  "Market Trends",
  "Investment Tips",
];

export function InsightFilters({
  className,
  onSearch,
  onTagChange,
  initialSearch = "",
  initialTag = "all",
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
        {TAGS.map((tag) => (
          <OverflowItem
            key={tag}
            item={tag}
            variant={
              activeTag === (tag === "All" ? "all" : tag)
                ? "default"
                : "outline"
            }
            size="sm"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </OverflowItem>
        ))}
      </OverflowArea>
      {/* <ScrollArea className="col-span-3 rounded-md border">
        <div className="flex gap-2 p-4">
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant={
                activeTag === (tag === "All" ? "all" : tag)
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </ScrollArea> */}
      <Input
        type="search"
        placeholder="Search insights..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
