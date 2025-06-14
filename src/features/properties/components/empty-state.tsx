import { SearchIcon } from "@sanity/icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  className?: string;
  onClearFilters?: () => void;
}

export function EmptyState({ className, onClearFilters }: EmptyStateProps) {
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
      <h3 className="mt-4 text-lg font-semibold">No properties found</h3>
      <p className="text-muted-foreground mt-2 text-sm">
        We couldn&apos;t find any properties matching your search criteria. Try
        adjusting your filters or search terms.
      </p>
      {onClearFilters && (
        <Button variant="outline" className="mt-6" onClick={onClearFilters}>
          Clear all filters
        </Button>
      )}
    </div>
  );
}
