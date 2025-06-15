import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/lib/sanity/image";
import { cn, formatPrice } from "@/lib/utils";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";

interface Props {
  className?: string;
  layout?: "grid" | "list";
  data: PROJECT_CARD_QUERYResult[number];
}

export const PropertyCard = ({ className, layout = "grid", data }: Props) => {
  const price = data.price ? parseFloat(data.price.replace(/[^0-9.]/g, "")) : 0;

  return (
    <div className={cn("group", layout === "list" && "flex gap-12", className)}>
      <Link href={`/projects/${data.slug || ""}`}>
        <div
          className={cn(
            "outline-foreground/50 relative overflow-hidden rounded-md group-hover:outline",
            layout === "grid"
              ? "aspect-square group-first:aspect-auto group-first:h-[447px]"
              : "aspect-video flex-shrink-0"
          )}
        >
          <ul className="relative z-10 flex flex-wrap gap-1.5 p-6">
            {data.tags?.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
          {data.mainImage && (
            <Image
              src={urlFor(data.mainImage).url()}
              alt={data.mainImage?.alt ?? data.title ?? ""}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              placeholder={
                data.mainImage.asset?.metadata?.lqip ? "blur" : undefined
              }
              blurDataURL={data.mainImage.asset?.metadata?.lqip ?? undefined}
            />
          )}
        </div>
      </Link>
      <div className={cn(layout === "list" && "flex flex-col justify-center")}>
        <div className="flex items-center justify-between">
          <Link href={`/projects/${data.slug || ""}`}>
            <h3 className="font-jaguar hover:text-primary-foreground my-2 text-3xl transition-colors">
              {data.title}
            </h3>
          </Link>
          {data.category && (
            <Link
              href={`/projects?tag=${data.category.slug || ""}`}
              className="text-muted-foreground group/category hover:text-primary-foreground flex items-center gap-2 transition-colors"
            >
              <div className="bg-muted group-hover/category:bg-primary-foreground size-1.5 rounded-full transition-colors" />
              {data.category.title}
            </Link>
          )}
        </div>
        <p className="text-muted-foreground">{data.location}</p>
        <p className="text-primary-foreground">{formatPrice(price)}</p>
      </div>
    </div>
  );
};
