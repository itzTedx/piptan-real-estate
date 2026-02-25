import { Route } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getCategories } from "@/features/home/actions";

export const CategoriesSelector = async () => {
	const categories = await getCategories();
	if (categories.length) {
		return (
			<div className="mt-6 flex flex-wrap gap-2">
				<CategoryButton>
					<Link href="/portfolio">All</Link>
				</CategoryButton>
				{categories.map((category) => (
					<CategoryButton key={category._id}>
						<Link href={`/portfolio/${category.slug}` as Route}>
							{category.title}
						</Link>
					</CategoryButton>
				))}
			</div>
		);
	}
	return (
		<div className="mt-6 flex flex-wrap gap-2">
			<CategoryButton>
				<Link href="/portfolio">All</Link>
			</CategoryButton>
		</div>
	);
};

export function CategoryButton({ children }: { children: React.ReactNode }) {
	return (
		<Button
			asChild
			className="hover:border-secondary-light/50 hover:bg-primary"
			variant="outline"
		>
			{children}
		</Button>
	);
}
