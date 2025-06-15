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
