import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface PropertiesListSkeletonProps {
  className?: string;
  viewMode?: "grid" | "list";
}

export function PropertiesListSkeleton({
  className,
  viewMode = "grid",
}: PropertiesListSkeletonProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1",
        className
      )}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-card rounded-lg border p-4">
          <Skeleton className="aspect-[4/3] w-full rounded-md" />
          <div className="mt-4 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
