import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  const formatNumber = (num: number) => {
    const formatted = num.toFixed(1);
    return formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted;
  };

  if (price >= 1_000_000_000) {
    return `AED ${formatNumber(price / 1_000_000_000)}B`;
  }
  if (price >= 1_000_000) {
    return `AED ${formatNumber(price / 1_000_000)}M`;
  }
  if (price >= 1_000) {
    return `AED ${formatNumber(price / 1_000)}K`;
  }
  return `AED ${price}`;
}
