import Image from "next/image";
import Link from "next/link";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

interface ProjectHeroProps {
  title: string;
  tags: string[];
  image: string;
  location: string;
  developer: string;
}

export const ProjectHero = ({
  title,
  tags,
  image,
  location,
  developer,
}: ProjectHeroProps) => {
  return (
    <header className="space-y-12 pb-20" aria-label="Project Overview">
      <SectionHeader
        title={title}
        titleClassName="font-jaguar"
        action={<AnimatedButton text="Get consultation" variant="outline" />}
        as="h1"
      />
      <figure className="grid grid-cols-4 gap-4">
        <div className="relative col-span-3 aspect-video overflow-hidden rounded-sm border shadow-2xl">
          <nav
            className="relative z-10 flex flex-wrap gap-1.5 p-6"
            aria-label="Property features"
          >
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </nav>
          <Image
            src={image}
            alt={`${title} - Luxury Property in ${location}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
          />
        </div>

        <Link
          href="/contact"
          className="group relative grid place-content-center-safe overflow-hidden rounded-sm border"
          aria-label="Book a private viewing"
        >
          <p className="relative z-10 text-center text-4xl">
            Book a Private Viewing Today
          </p>
          <Image
            src="/images/side-cta.webp"
            alt="Book a private viewing"
            fill
            className="object-cover transition-[scale_rotate_filter] duration-500 group-hover:scale-125 group-hover:-rotate-8 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </Link>
      </figure>
      <address className="flex gap-16 not-italic">
        <div>
          <h2 className="text-muted-foreground mb-3">Location</h2>
          <p className="text-2xl">{location}</p>
        </div>
        <div>
          <h2 className="text-muted-foreground mb-3">Developer</h2>
          <p className="text-2xl">{developer}</p>
        </div>
      </address>
    </header>
  );
};
