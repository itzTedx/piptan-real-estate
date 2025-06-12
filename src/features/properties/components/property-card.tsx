import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const TAGS = [
  "Luxury",
  "City Living",
  "High-Rise",
  "Great Views",
  "Lifestyle Living",
];

export const PropertyCard = ({ className }: Props) => {
  return (
    <li className={cn("group", className)}>
      <div className="outline-foreground/50 relative aspect-square overflow-hidden rounded-md group-first:aspect-auto group-first:h-[447px] group-hover:outline">
        <ul className="relative z-10 flex flex-wrap gap-1.5 p-6">
          {TAGS.map((tag) => (
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
      <h3 className="font-jaguar my-2 text-3xl">Celestia Residences</h3>
      <p className="text-muted-foreground">Downtown Dubai</p>
      <p>From AED 3.2M</p>
    </li>
  );
};
