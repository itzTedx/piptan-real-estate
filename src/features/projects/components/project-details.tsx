import Image from "next/image";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";

import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  image?: SanityImageSource | null;
  title: string | null;
  data: {
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal";
      listItem?: never;
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    image?: SanityImageSource | null;
  } | null;
}

export const ProjectDetails = ({ image, title, data }: ProjectDetailsProps) => {
  return (
    data && (
      <div className="grid gap-6 pt-12 md:grid-cols-12 md:gap-8 lg:gap-12 lg:pt-20">
        {data.description && (
          <div className={cn(image ? "md:col-span-5" : "md:col-span-full")}>
            <h2 className="mb-4 text-2xl leading-snug font-medium sm:text-3xl md:mb-6 md:text-4xl">
              More Details about {title}
            </h2>

            <div className="space-y-3 text-base leading-relaxed sm:text-lg md:text-xl">
              <PortableText value={data.description} />
            </div>
          </div>
        )}
        {image && (
          <div className="bg-muted sticky top-[15vh] aspect-4/3 w-full overflow-hidden rounded-sm border sm:aspect-5/4 md:col-span-7">
            <Image
              src={urlFor(image).url()}
              alt={`${title} - Luxury Property`}
              title={title ?? ""}
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              placeholder={"blur"}
              blurDataURL={urlFor(image).width(10).quality(20).blur(10).url()}
            />
          </div>
        )}
      </div>
    )
  );
};
