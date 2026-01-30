"use client";

import { useCarousel } from "@/components/ui/carousel";

interface Props {
	totalItems: number;
	visibleItems?: number;
}

export const ProgressIndicator = ({ totalItems, visibleItems = 4 }: Props) => {
	const { activeIndex } = useCarousel();

	const maxIndex = totalItems - visibleItems;
	const progress = Math.min(100, (activeIndex / (maxIndex + 1)) * 100);

	return (
		<div className="h-px w-full overflow-hidden rounded-full bg-muted">
			<div
				className="h-full bg-primary transition-all duration-300"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};
