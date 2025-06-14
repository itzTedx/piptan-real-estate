import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn, formatPrice, slugify } from "@/lib/utils";

import { Property } from "../types";

interface Props {
  className?: string;
  layout?: "grid" | "list";
  data: Property;
}

export const PropertyCard = ({ className, layout = "grid", data }: Props) => {
  return (
    <Link
      href={`/projects/${slugify(data.name)}`}
      className={cn("group", layout === "list" && "flex gap-12", className)}
    >
      <div
        className={cn(
          "outline-foreground/50 relative overflow-hidden rounded-md group-hover:outline",
          layout === "grid"
            ? "aspect-square group-first:aspect-auto group-first:h-[447px]"
            : "aspect-video flex-shrink-0"
        )}
      >
        <ul className="relative z-10 flex flex-wrap gap-1.5 p-6">
          {data.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
        <Image
          src="/images/luxury.jpg"
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className={cn(layout === "list" && "flex flex-col justify-center")}>
        <h3 className="font-jaguar my-2 text-3xl">{data.name}</h3>
        <p className="text-muted-foreground">{data.location}</p>
        <p className="text-primary-foreground">{formatPrice(data.price)}</p>
      </div>
    </Link>
  );
};
