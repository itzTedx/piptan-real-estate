# Portfolio Filtering Implementation

This document explains the filtering functionality implemented for the portfolio page using Sanity CMS.

## Overview

The portfolio page now supports filtering by:

- **Search Query**: Text search across project titles, locations, developer names, and descriptions
- **Category**: Filter by project categories
- **Pagination**: Maintains pagination while filtering

## Implementation Details

### 1. Sanity Queries

#### New Queries Added:

- `FILTERED_PAGINATED_PROJECTS_QUERY`: Fetches filtered and paginated projects
- `FILTERED_PROJECTS_COUNT_QUERY`: Counts filtered projects for pagination

#### Query Features:

- **Search**: Matches against `title`, `location`, `developer->name`, and `shortDescription`
- **Category Filter**: Filters by `category->slug.current`
- **Pagination**: Uses `$start` and `$end` parameters
- **Ordering**: Results ordered by `_createdAt desc`

### 2. Server Actions

#### Updated Functions:

- `getPaginatedProjects()`: Now accepts `searchQuery` and `category` parameters
- Automatically switches between filtered and unfiltered queries based on parameters

### 3. UI Components

#### New Components:

- `PortfolioFilters`: Search and category filter interface
- `PortfolioEmptyState`: Empty state when no results found

#### Features:

- **Search Input**: Real-time search with debouncing
- **Category Dropdown**: Shows all available categories
- **Clear Filters**: Button to reset all filters
- **Results Counter**: Shows number of results and active filters

### 4. URL State Management

#### Search Parameters:

- `q`: Search query string
- `category`: Selected category (defaults to "all")
- `page`: Current page number
- `pageSize`: Number of items per page (default: 9)

#### URL Structure:

```
/portfolio?q=search&category=residential&page=1
```

### 5. Pagination Integration

Pagination links maintain filter state:

- Previous/Next buttons include current filters
- Page numbers include current filters
- Filter changes reset to page 1

## Usage

### For Users:

1. **Search**: Type in the search box to find projects by title, location, or developer
2. **Category Filter**: Select a category from the dropdown to filter by project type
3. **Clear Filters**: Click the X button to reset all filters
4. **Pagination**: Navigate through pages while maintaining filters

### For Developers:

1. **Adding New Filters**: Extend the Sanity queries and update the UI components
2. **Modifying Search Fields**: Update the query parameters in `FILTERED_PAGINATED_PROJECTS_QUERY`
3. **Customizing UI**: Modify `PortfolioFilters` component for different filter types

## Technical Notes

- **Server-Side Rendering**: All filtering happens server-side for SEO and performance
- **Type Safety**: Full TypeScript support with generated Sanity types
- **Responsive Design**: Filter UI adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Efficient Sanity queries with proper indexing

## Files Modified

1. `src/lib/sanity/queries/projects-queries.ts` - Added new queries
2. `src/features/projects/actions/projects-actions.ts` - Updated server actions
3. `src/app/(root)/portfolio/page.tsx` - Updated page component
4. `src/features/properties/components/portfolio-filters.tsx` - New filter component
5. `src/features/properties/components/portfolio-empty-state.tsx` - New empty state
6. `src/features/projects/search-params.ts` - Updated default page size

## Future Enhancements

- **Advanced Filters**: Price range, bedroom count, completion date
- **Sorting Options**: Sort by price, date, location
- **Saved Searches**: Allow users to save filter combinations
- **Filter Presets**: Quick filter buttons for common searches
