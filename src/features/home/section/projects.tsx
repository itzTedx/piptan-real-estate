import Link from "next/link";

import { IconDiamond } from "@/assets/icons";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  return (
    <section
      className="container py-8 sm:py-12 md:py-16 lg:py-24"
      aria-label="Projects section"
    >
      <div className="mb-6 sm:mb-8 md:mb-12">
        <p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
          <IconDiamond className="size-3 sm:size-4" />
          Projects
        </p>
        <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          <h2 className="text-2xl font-medium sm:col-span-2 sm:text-3xl md:text-4xl lg:text-5xl">
            More Than Properties, <br />
            We Build Possibilities.
          </h2>
          <p className="text-primary-foreground text-base font-light text-balance sm:text-lg md:text-xl">
            Discover signature developments in Dubai&apos;s most sought-after
            communities.
          </p>
        </div>
        <Link
          href="/about"
          className={cn(
            "font-inter group bg-foreground/10 pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-4 text-sm font-medium tracking-wide text-white sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
            "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
          )}
        >
          <span
            data-text={"View all projects"}
            className={cn(
              "relative block overflow-hidden",
              "after:text-primary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
            )}
          >
            <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
              View all projects
            </span>
          </span>

          <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 max-sm:divide-y sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <PropertyCard key={i} className="max-sm:py-6 first:sm:col-span-2" />
        ))}
      </ul>
    </section>
  );
};
