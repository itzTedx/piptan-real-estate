"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "@sanity/icons";
import { XIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useQueryState } from "nuqs";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const portfolioFiltersSchema = z.object({
	searchQuery: z.string().optional(),
	category: z.string(),
});

type PortfolioFiltersFormData = z.infer<typeof portfolioFiltersSchema>;

interface PortfolioFiltersProps {
	categories: CATEGORIES_QUERYResult;
	className?: string;
}

export const PortfolioFilters = ({
	categories,
	className,
}: PortfolioFiltersProps) => {
	const [searchQuery, setSearchQuery] = useQueryState("q", {
		defaultValue: "",
	});
	const [category, setCategory] = useQueryState("category", {
		defaultValue: "all",
	});

	const form = useForm<PortfolioFiltersFormData>({
		resolver: zodResolver(portfolioFiltersSchema),
		defaultValues: {
			searchQuery: searchQuery || "",
			category: category || "all",
		},
	});

	// Update form when URL params change
	useEffect(() => {
		form.reset({
			searchQuery: searchQuery || "",
			category: category || "all",
		});
	}, [searchQuery, category, form]);

	const { scrollYProgress } = useScroll();
	const width = useTransform(scrollYProgress, [0.05, 0.1], ["100%", "80%"]);
	const margin = useTransform(scrollYProgress, [0.05, 0.1], ["0px", "auto"]);

	const handleClearFilters = async () => {
		await Promise.all([setSearchQuery(""), setCategory("all")]);
	};

	const onSubmit = async (data: PortfolioFiltersFormData) => {
		await Promise.all([
			setSearchQuery(data.searchQuery || ""),
			setCategory(data.category),
		]);
	};

	return (
		<motion.div
			className={cn(
				"sticky top-[10vh] z-50 my-6 flex h-14 items-center rounded-md border border-foreground/40 bg-background/60 backdrop-blur-lg",
				className
			)}
			style={{
				width,
				marginLeft: margin,
				marginRight: margin,
			}}
		>
			<form
				className="flex h-full w-full items-center"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className="flex h-full items-center">
					<Select
						onValueChange={(value) => {
							form.setValue("category", value);
							setCategory(value);
						}}
						value={form.getValues("category")}
					>
						<SelectTrigger
							className="w-56 rounded-e-none border-0 border-foreground/40 border-r data-[size=default]:h-full"
							id="category"
						>
							<SelectValue placeholder="Category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Show All</SelectItem>
							{categories.map((category) => (
								<SelectItem key={category._id} value={category.slug || ""}>
									{category.title || ""}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="relative h-full flex-1">
					<Input
						placeholder="Search portfolios..."
						type="text"
						{...form.register("searchQuery")}
						className="h-full border-0 pl-10 text-foreground"
					/>
					<SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								className="absolute top-1/2 right-3 -translate-y-1/2"
								onClick={handleClearFilters}
								size="icon"
								type="button"
								variant="ghost"
							>
								<XIcon className="size-4" />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Clear all filters</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div className="mr-1 flex h-full items-center">
					<Button type="submit" variant="outline">
						Search
					</Button>
				</div>
			</form>
		</motion.div>
	);
};
