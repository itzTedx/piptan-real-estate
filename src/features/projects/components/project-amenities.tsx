import Image from "next/image";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";

interface Amenity {
  image: string;
  title: string;
  offset: string;
}

interface ProjectAmenitiesProps {
  amenities: Amenity[];
}

export const ProjectAmenities = ({ amenities }: ProjectAmenitiesProps) => {
  return (
    <section className="relative pt-20">
      <h2 className="sticky top-[25vh] py-20 text-center text-6xl leading-snug">
        The amenities{" "}
        <span className="text-muted-foreground">
          speak <br />
          for themselves
        </span>
      </h2>
      <ul className="mt-12 grid grid-cols-2 gap-9 md:grid-cols-4">
        {amenities.map((amenity) => (
          <li
            key={amenity.title}
            className={`group relative aspect-square ${amenity.offset} bg-muted overflow-hidden rounded-md`}
          >
            <Image
              src={amenity.image}
              alt={amenity.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="from-foreground/70 absolute inset-0 z-10 flex items-end bg-gradient-to-t to-transparent to-50% p-6">
              <h4 className="text-primary text-xl leading-snug font-medium">
                {amenity.title}
              </h4>
            </div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full"
              blurIntensity={0.5}
              blurLayers={6}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
