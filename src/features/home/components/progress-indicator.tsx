"use client";

import { useCarousel } from "@/components/ui/carousel";

interface Props {
  totalItems: number;
}

export const ProgressIndicator = ({ totalItems }: Props) => {
  const { activeIndex } = useCarousel();
  const visibleItems = 3;
  const maxIndex = totalItems - visibleItems;
  const progress = (activeIndex / maxIndex) * 100;

  return (
    <div className="bg-muted h-px w-full overflow-hidden rounded-full">
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
