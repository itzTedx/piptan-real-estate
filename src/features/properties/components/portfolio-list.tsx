
import { AnimatedGroup } from "@/components/animation/animated-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PortfolioEmptyState } from "@/features/properties/components/portfolio-empty-state";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn, generatePagination } from "@/lib/utils";

import {
  FILTERED_PAGINATED_PROJECTS_QUERYResult,
  PAGINATED_PROJECTS_QUERYResult,
} from "../../../../sanity.types";

interface PortfolioListProps {
  projects:
    | PAGINATED_PROJECTS_QUERYResult
    | FILTERED_PAGINATED_PROJECTS_QUERYResult;
  total: number;
  page: number;
  pageSize: number;
  searchQuery?: string;
  category?: string;
}

export function PortfolioList({
  projects,
  total,
  page,
  pageSize,
  searchQuery,
  category,
}: PortfolioListProps) {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const [currentCategory] = useQueryState("category", {
  //   defaultValue: "all",
  // });
  // const [currentSearchQuery] = useQueryState("q", {
  //   defaultValue: "",
  // });

  // // Force refresh when search parameters change
  // useEffect(() => {
  //   const currentQ = searchParams.get("q");
  //   const currentCategoryParam = searchParams.get("category");

  //   // If URL params don't match our state, refresh the page
  //   if (
  //     currentQ !== currentSearchQuery ||
  //     currentCategoryParam !== currentCategory
  //   ) {
  //     router.refresh();
  //   }
  // }, [searchParams, currentSearchQuery, currentCategory, router]);

  const totalPages = Math.ceil(total / pageSize);
  const pagination = generatePagination(page, totalPages);

  return (
    <>
      {projects.length === 0 ? (
        <PortfolioEmptyState className="my-8" />
      ) : (
          
        <AnimatedGroup
          preset="blur-slide"
          className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2")}
        >
          {projects.map((project) => (
            <PropertyCard
              key={project._id}
              data={project}
              className="max-sm:py-6"
            />
          ))}
        </AnimatedGroup>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  page > 1
                    ? `?page=${page - 1}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`
                    : "#"
                }
                className={page <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {pagination.map((pageNumber, index) => (
              <PaginationItem key={index}>
                {pageNumber === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href={`?page=${pageNumber}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`}
                    isActive={pageNumber === page}
                  >
                    {pageNumber}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={
                  page < totalPages
                    ? `?page=${page + 1}${searchQuery ? `&q=${searchQuery}` : ""}${category && category !== "all" ? `&category=${category}` : ""}`
                    : "#"
                }
                className={
                  page >= totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
