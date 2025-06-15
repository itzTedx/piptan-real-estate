import Image from "next/image";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

interface Amenity {
  image?: string;
  title: string;
  offset: string;
}

interface ProjectAmenitiesProps {
  amenities: Amenity[];
  projectName: string;
}

export const ProjectAmenities = ({
  amenities,
  projectName,
}: ProjectAmenitiesProps) => {
  return (
    <section
      className="relative pt-10 md:pt-16 lg:pt-20"
      aria-label="Project Amenities"
    >
      <h2 className="sticky top-[25vh] py-10 text-center text-4xl leading-snug md:py-16 md:text-5xl lg:py-20 lg:text-6xl">
        The amenities{" "}
        <span className="text-muted-foreground">
          speak <br />
          for themselves
        </span>
      </h2>
      <ul
        className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-12 lg:grid-cols-4"
        role="list"
      >
        {amenities.map((amenity) => (
          <li
            key={amenity.title}
            className={cn(
              "group bg-primary-foreground/15 relative grid aspect-4/5 place-content-center-safe overflow-hidden rounded-sm backdrop-blur-xl md:aspect-square",
              "not-first:odd:mt-[-3em] even:mt-[14em]",
              "md:not-first:odd:mt-[-2em] md:even:mt-[8em]",
              "lg:not-first:odd:mt-[-3em] lg:even:mt-[14em]",
              amenity.offset
            )}
          >
            {amenity.image ? (
              <>
                <Image
                  src={amenity.image}
                  alt={`${projectName} - ${amenity.title}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/70 to-transparent to-50% p-4 md:p-5">
                  <AmenityTitle title={amenity.title} />
                </div>
                <ProgressiveBlur
                  className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                  blurIntensity={0.5}
                  blurLayers={8}
                />
              </>
            ) : (
              <AmenityTitle title={amenity.title} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const AmenityTitle = ({ title }: { title: string }) => {
  return (
    <h4 className="text-primary-foreground px-4 text-lg leading-snug font-medium md:px-5 md:text-xl lg:text-2xl">
      {title}
    </h4>
  );
};
