import Image from "next/image";
import Link from "next/link";

import { MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/lib/sanity/image";
import { cn, formatPrice } from "@/lib/utils";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";
import { WhatsappButton } from "./whatsapp-button";

interface Props {
  className?: string;
  layout?: "grid" | "list";
  data: PROJECT_CARD_QUERYResult[number];
}

export const PropertyCard = ({ className, layout = "grid", data }: Props) => {
  const price = data.price ? parseFloat(data.price.replace(/[^0-9.]/g, "")) : 0;

  return (
    <div className={cn("group", layout === "list" && "flex gap-12", className)}>
      <Link href={`/portfolio/${data.slug || ""}`}>
        <div
          className={cn(
            "outline-foreground/20 group-hover:outline-accent-foreground/50 relative flex flex-col justify-between overflow-hidden rounded-md p-6 outline",
            layout === "grid" ? "aspect-4/5" : "aspect-video flex-shrink-0"
          )}
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5">
              {data.tags?.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
            <div className="bg-foreground text-background border-muted-foreground/10 relative grid aspect-4/3 w-20 shrink-0 place-content-center rounded border">
              <p>{data.developer}</p>
            </div>
          </div>
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
          <div
            className={cn(
              "relative z-10",
              layout === "list" && "flex flex-col justify-center"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-jaguar hover:text-primary-foreground text-2xl font-bold transition-colors">
                {data.title}
              </h3>

              {data.category && (
                <p className="text-foreground/80 group/category hover:text-primary-foreground flex items-center gap-2 text-sm transition-colors">
                  <span className="group-hover/category:bg-primary-foreground bg-foreground/80 size-1 rounded-full transition-colors" />
                  {data.category.title}
                </p>
              )}
            </div>
            <p className="text-foreground mb-2 flex items-center gap-1">
              <MapPin className="text-muted-foreground size-4" />
              {data.location}
            </p>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <p className="text-foreground">
                  Price:{" "}
                  <span className="font-medium">{formatPrice(price)}</span>
                </p>
                {data.payments && (
                  <Badge variant="secondary">
                    Payment Plan: {data.payments}
                  </Badge>
                )}
              </div>
              <p>{data.bedrooms} Bedrooms</p>
            </div>
            <WhatsappButton
              message={`Hello, I'm interested in getting more information about ${data.title}. Project Link: https://www.piptan.ae/portfolio/${data.slug || ""} `}
            />
          </div>
          <div className="from-background absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t to-transparent" />
        </div>
      </Link>
    </div>
  );
};
