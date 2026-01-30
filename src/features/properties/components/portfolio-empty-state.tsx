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
			<div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
				<SearchIcon className="size-10 text-muted-foreground" />
			</div>
			<h3 className="mt-4 font-semibold text-lg">No portfolios found</h3>
			<p className="mt-2 text-muted-foreground text-sm">
				We couldn&apos;t find any portfolios matching your search criteria. Try
				adjusting your filters or search terms.
			</p>

			<Button className="mt-6" onClick={handleClearFilters} variant="outline">
				Clear all filters
			</Button>
		</div>
	);
}
