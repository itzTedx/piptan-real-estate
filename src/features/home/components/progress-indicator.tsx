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
    <div className="bg-muted h-px w-full overflow-hidden rounded-full">
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
