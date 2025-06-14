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

  console.log("Carousel Progress: ", progress);
  console.log("Total Items ", totalItems);
  console.log("Active Item ", activeIndex);
  console.log("Max Index ", maxIndex);

  return (
    <div className="bg-muted h-px w-full overflow-hidden rounded-full">
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
