import {
	createLoader,
	parseAsFloat,
	parseAsString,
	parseAsStringEnum,
} from "nuqs/server";

// Define all possible sort fields
const SORT_FIELDS = ["date", "price", "location", "bedrooms", "area"];
export type SortField = (typeof SORT_FIELDS)[number];

// Define all possible view modes
const VIEW_MODES = ["grid", "list"];
export type ViewMode = (typeof VIEW_MODES)[number];

// Define all possible sort orders
const SORT_ORDERS = ["asc", "desc"];
export type SortOrder = (typeof SORT_ORDERS)[number];

export const searchParams = {
	// Search query
	q: parseAsString.withDefault(""),

	// Category/tag filter
	category: parseAsString.withDefault("all"),

	// Sorting
	sort: parseAsStringEnum(SORT_FIELDS).withDefault("date"),
	order: parseAsStringEnum(SORT_ORDERS).withDefault("desc"),

	// View mode
	view: parseAsStringEnum(VIEW_MODES).withDefault("grid"),

	// Pagination
	page: parseAsFloat.withDefault(1),
	pageSize: parseAsFloat.withDefault(9),
};

// Create type from the search params
export type SearchParams = {
	[K in keyof typeof searchParams]: ReturnType<
		(typeof searchParams)[K]["parse"]
	>;
};

// Create the loader
export const loadSearchParams = createLoader(searchParams);
