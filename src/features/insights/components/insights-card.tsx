import Image from "next/image";
import Link from "next/link";

import { AnimatedButton } from "@/components/ui/animated-button";
import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils";

import { INSIGHTS_QUERYResult } from "../../../../sanity.types";

interface Props {
  data: INSIGHTS_QUERYResult[number];
}

export const InsightCard = ({ data }: Props) => {
  return (
    <Link
      href={`/insights/${data.slug}`}
      className="bg-muted group flex h-full flex-col overflow-hidden rounded-md"
    >
      {data.image && (
        <div className="relative aspect-5/3 shrink-0 overflow-hidden">
          <Image
            src={urlFor(data.image).url()}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex h-full flex-col items-center justify-between p-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2">
              <div className="bg-foreground size-1.5 rounded-full" />
              {data.categories?.title}
            </span>
            <div>{formatDate(data.createdAt)}</div>
          </div>
          <h3 className="mb-2 text-2xl" title={data.title ?? ""}>
            {data.title}
          </h3>
          <p className="line-clamp-2 text-lg">{data.excerpt}</p>
        </div>

        <AnimatedButton
          text="Read Article"
          variant="secondary"
          className="mt-3 w-full"
        />
      </div>
    </Link>
  );
};
