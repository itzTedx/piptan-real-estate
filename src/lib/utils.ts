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

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, "") // Remove all non-word chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
    .substring(0, 100); // Limit length to 100 chars
}
