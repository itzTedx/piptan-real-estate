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
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

/**
 * Utility function to pluralize a word based on count and optional custom plural form
 * @param word - The word to pluralize
 * @param count - The count to determine if pluralization is needed
 * @param plural - Optional custom plural form
 * @returns The pluralized word if count is not 1, otherwise the original word
 */
export function plural(word: string, count: number, plural?: string): string {
  if (count === 1) return word;

  if (plural) return plural;

  // Common English pluralization rules
  const lastChar = word.slice(-1);
  const lastTwoChars = word.slice(-2);

  if (
    lastTwoChars === "ch" ||
    lastTwoChars === "sh" ||
    lastChar === "x" ||
    lastChar === "s" ||
    lastChar === "z"
  ) {
    return `${word}es`;
  }

  if (
    lastChar === "y" &&
    !["a", "e", "i", "o", "u"].includes(word.slice(-2, -1))
  ) {
    return `${word.slice(0, -1)}ies`;
  }

  if (lastChar === "f") {
    return `${word.slice(0, -1)}ves`;
  }

  if (lastTwoChars === "fe") {
    return `${word.slice(0, -2)}ves`;
  }

  return `${word}s`;
}
