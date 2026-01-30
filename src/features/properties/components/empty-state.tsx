"use client";

import { SearchIcon } from "@sanity/icons";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface EmptyStateProps {
	className?: string;
}

export function EmptyState({ className }: EmptyStateProps) {
	const [, setSearchQuery] = useQueryState("q", {
		defaultValue: "",
	});
	const [, setTag] = useQueryState("tag", { defaultValue: "all" });
	const [, setSortField] = useQueryState("sort", {
		defaultValue: "date",
	});
	const [, setSortOrder] = useQueryState<"asc" | "desc">("order", {
		defaultValue: "desc",
		parse: (value): "asc" | "desc" => (value === "asc" ? "asc" : "desc"),
	});
	const [, setViewMode] = useQueryState<"grid" | "list">("view", {
		defaultValue: "grid",
		parse: (value): "grid" | "list" => (value === "list" ? "list" : "grid"),
	});

	const handleClearFilters = async () => {
		await setSearchQuery(null);
		await setTag("all");
		await setSortField("date");
		await setSortOrder("desc");
		await setViewMode("grid");
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
			<h3 className="mt-4 font-semibold text-lg">No properties found</h3>
			<p className="mt-2 text-muted-foreground text-sm">
				We couldn&apos;t find any properties matching your search criteria. Try
				adjusting your filters or search terms.
			</p>

			<Button className="mt-6" onClick={handleClearFilters} variant="outline">
				Clear all filters
			</Button>
		</div>
	);
}
