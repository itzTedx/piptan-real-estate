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
    <section className="relative pt-20" aria-label="Project Amenities">
      <h2 className="sticky top-[25vh] py-20 text-center text-6xl leading-snug">
        The amenities{" "}
        <span className="text-muted-foreground">
          speak <br />
          for themselves
        </span>
      </h2>
      <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4" role="list">
        {amenities.map((amenity) => (
          <li
            key={amenity.title}
            className={cn(
              "group bg-primary-foreground/15 relative grid aspect-4/5 place-content-center-safe overflow-hidden rounded-sm backdrop-blur-xl max-md:not-first:odd:mt-[-3em] max-md:even:mt-[14em] md:aspect-square",
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/70 to-transparent to-50% p-5">
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
    <h4 className="text-primary-foreground leading-snug font-medium max-md:px-2 md:text-2xl">
      {title}
    </h4>
  );
};
