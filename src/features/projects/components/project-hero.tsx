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
    <section className="space-y-12 pb-20">
      <SectionHeader
        title={title}
        titleClassName="font-jaguar"
        action={<AnimatedButton text="Get consultation" variant="outline" />}
        as="h1"
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="relative col-span-3 aspect-video overflow-hidden rounded-sm border shadow-2xl">
          <ul className="relative z-10 flex flex-wrap gap-1.5 p-6">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
          <Image src={image} alt="" fill className="object-cover" />
        </div>

        <Link
          href="/contact"
          className="group relative grid place-content-center-safe overflow-hidden rounded-sm border"
        >
          <p className="relative z-10 text-center text-4xl">
            Book a Private Viewing Today
          </p>
          <Image
            src="/images/side-cta.webp"
            alt=""
            fill
            className="object-cover transition-[scale_rotate_filter] duration-500 group-hover:scale-125 group-hover:-rotate-8 group-hover:brightness-110"
          />
        </Link>
      </div>
      <div className="flex gap-16">
        <div>
          <h2 className="text-muted-foreground mb-3">Location</h2>
          <p className="text-2xl">{location}</p>
        </div>
        <div>
          <h2 className="text-muted-foreground mb-3">Developer</h2>
          <p className="text-2xl">{developer}</p>
        </div>
      </div>
    </section>
  );
};
