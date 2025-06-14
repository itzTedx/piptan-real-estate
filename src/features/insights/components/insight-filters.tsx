import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onSearch: (query: string) => void;
  onTagChange: (tag: string) => void;
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

export function InsightFilters({ className, onSearch, onTagChange }: Props) {
  return (
    <div className={cn("flex gap-4 p-4", className)}>
      <div className="flex gap-2 overflow-x-auto">
        {TAGS.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            size="sm"
            onClick={() => onTagChange(tag === "All" ? "all" : tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <Input
        type="search"
        placeholder="Search insights..."
        className="max-w-xs"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
