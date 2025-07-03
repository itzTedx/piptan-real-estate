import Image from "next/image";
import Link from "next/link";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { urlFor } from "@/lib/sanity/image";

interface ProjectHeroProps {
  title: string;
  tags?: string[] | null;
  image: SanityImageSource | null;
  location: string | null;
  developer: string | null;
}

export const ProjectHero = ({
  title,
  tags,
  image,
  location,
  developer,
}: ProjectHeroProps) => {
  return (
    <header
      className="space-y-6 pb-10 md:space-y-12 md:pb-20"
      aria-label="Project Overview"
    >
      <SectionHeader
        title={title}
        titleClassName="font-jaguar"
        action={<AnimatedButton text="Get consultation" variant="outline" />}
        as="h1"
      />
      <figure className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="relative aspect-video overflow-hidden rounded-sm border shadow-2xl md:col-span-3">
          <nav
            className="relative z-10 hidden flex-wrap gap-1.5 p-4 sm:flex md:p-6"
            aria-label="Property features"
          >
            {tags &&
              tags.map((tag) => (
                <Badge key={tag} className="text-sm md:text-base">
                  {tag}
                </Badge>
              ))}
          </nav>
          {image && (
            <Image
              src={urlFor(image).url()}
              alt={`${title} - Luxury Property in ${location}`}
              title={title ?? ""}
              fill
              quality={100}
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
              placeholder={"blur"}
              blurDataURL={urlFor(image).width(10).quality(20).blur(10).url()}
            />
          )}
        </div>

        <Link
          href="/contact"
          className="group relative grid aspect-[4/1] place-content-center-safe overflow-hidden rounded-sm border md:aspect-auto"
          aria-label="Book a private viewing"
        >
          <p className="relative z-10 px-4 text-center text-xl font-medium md:text-3xl lg:text-4xl">
            Book a Private <br />
            Viewing Today
          </p>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/side-cta-wide.webp"
            />
            <Image
              src="/images/side-cta.webp"
              alt="Book a private viewing"
              fill
              className="object-cover transition-[scale_rotate_filter] duration-700 ease-out group-hover:scale-125 group-hover:brightness-110 md:group-hover:-rotate-8"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </picture>
        </Link>
      </figure>
      <address className="flex flex-col gap-6 not-italic md:flex-row md:gap-16">
        {location && (
          <div>
            <h2 className="text-muted-foreground mb-2 text-sm md:mb-3 md:text-base">
              Location
            </h2>
            <p className="text-xl md:text-2xl">{location}</p>
          </div>
        )}
        {developer && (
          <div>
            <h2 className="text-muted-foreground mb-2 text-sm md:mb-3 md:text-base">
              Developer
            </h2>
            <p className="text-xl md:text-2xl">{developer}</p>
          </div>
        )}
      </address>
    </header>
  );
};
