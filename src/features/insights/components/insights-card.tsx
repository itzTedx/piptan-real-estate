import Image from "next/image";

import { AnimatedButton } from "@/components/ui/animated-button";

interface Props {
  data: {
    image: string;
    tag: string;
    date: string;
    title: string;
    description: string;
  };
}

export const InsightCard = ({ data }: Props) => {
  return (
    <div className="bg-muted group flex h-full flex-col overflow-hidden rounded-md">
      <div className="relative aspect-5/3 shrink-0 overflow-hidden">
        <Image
          src={data.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex h-full flex-col items-center justify-between p-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2">
              <div className="bg-foreground size-1.5 rounded-full" />
              {data.tag}
            </span>
            <div>{data.date}</div>
          </div>
          <h3 className="mb-2 text-2xl" title={data.title}>
            {data.title}
          </h3>
          <p className="line-clamp-2 text-lg">{data.description}</p>
        </div>

        <AnimatedButton
          text="Read Article"
          href="/"
          variant="secondary"
          className="mt-3 w-full"
        />
      </div>
    </div>
  );
};
