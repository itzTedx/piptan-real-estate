"use client";

import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PortfolioEmptyStateProps {
  className?: string;
}

export function PortfolioEmptyState({ className }: PortfolioEmptyStateProps) {
  const [, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });
  const [, setCategory] = useQueryState("category", { defaultValue: "all" });

  const handleClearFilters = async () => {
    await setSearchQuery(null);
    await setCategory("all");
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center",
        className
      )}
    >
      <div className="bg-muted flex h-20 w-20 items-center justify-center rounded-full">
        <SearchIcon className="text-muted-foreground size-10" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">No portfolios found</h3>
      <p className="text-muted-foreground mt-2 text-sm">
        We couldn&apos;t find any portfolios matching your search criteria. Try
        adjusting your filters or search terms.
      </p>

      <Button variant="outline" className="mt-6" onClick={handleClearFilters}>
        Clear all filters
      </Button>
    </div>
  );
}
