import { useCallback, useEffect, useRef, useState } from "react";

import { Loader2Icon, SearchIcon, XIcon } from "lucide-react";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OverflowArea, OverflowItem } from "@/components/ui/scroll-overflow";
import { cn } from "@/lib/utils";

import { INSIGHT_CATEGORIES_QUERYResult } from "../../../../sanity.types";

interface Props {
  className?: string;
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
  initialTag?: string;
  categories: INSIGHT_CATEGORIES_QUERYResult;
}

export function InsightFilters({
  className,
  onSearch,
  onTagChange,
  initialTag = "all",
  categories,
}: Props) {
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });
  const [activeTag, setActiveTag] = useState(initialTag);
  const [localSearchValue, setLocalSearchValue] = useState(searchQuery || "");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Debounced search function
  const debouncedSearch = useCallback(
    (value: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsSearching(true);
      timeoutRef.current = setTimeout(async () => {
        await setSearchQuery(value || null);
        onSearch(value);
        setIsSearching(false);
      }, 300); // 300ms debounce
    },
    [setSearchQuery, onSearch]
  );

  // Update local search value when URL changes
  useEffect(() => {
    setLocalSearchValue(searchQuery || "");
  }, [searchQuery]);

  const handleSearchChange = (value: string) => {
    setLocalSearchValue(value);
    debouncedSearch(value);
  };

  const handleClearSearch = async () => {
    setLocalSearchValue("");
    setIsSearching(true);
    await setSearchQuery(null);
    onSearch("");
    setIsSearching(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Trigger immediate search
      setIsSearching(true);
      setSearchQuery(localSearchValue || null);
      onSearch(localSearchValue);
      setIsSearching(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleClearSearch();
    }
  };

  const handleTagClick = (tag: string) => {
    const normalizedTag = tag === "All" ? "all" : tag;
    setActiveTag(normalizedTag);
    onTagChange(normalizedTag);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocalSearchValue(suggestion);
    setIsSearching(true);
    setSearchQuery(suggestion);
    onSearch(suggestion);
    setIsSearchFocused(false);
    setIsSearching(false);
  };

  // Common search suggestions
  const searchSuggestions = [
    "market trends",
    "investment tips",
    "property guide",
    "Dubai real estate",
    "buying property",
    "selling property",
    ...categories.map((cat) => cat.title || "").filter(Boolean),
  ];

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

      <div className="relative">
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Search insights..."
          value={localSearchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          className="pr-10 pl-10"
          disabled={isSearching}
        />
        {isSearching ? (
          <Loader2Icon className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2 animate-spin" />
        ) : localSearchValue ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClearSearch}
            className="hover:bg-muted absolute top-1/2 right-1 size-8 -translate-y-1/2"
          >
            <XIcon className="size-4" />
          </Button>
        ) : null}

        {/* Search Suggestions */}
        {isSearchFocused && !localSearchValue && (
          <div className="bg-background absolute top-full right-0 left-0 z-50 mt-1 rounded-md border shadow-lg">
            <div className="p-2">
              <p className="text-muted-foreground mb-2 text-xs font-medium">
                Popular searches:
              </p>
              <div className="space-y-1">
                {searchSuggestions.slice(0, 6).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="hover:bg-muted w-full rounded px-2 py-1 text-left text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
