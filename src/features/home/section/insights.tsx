import Image from "next/image";

import { IconCollection } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Carousel,
  CarouselActiveIndex,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { INSIGHTS } from "@/constants/mock-data";

import { ProgressIndicator } from "../components/progress-indicator";

export const InsightsSection = () => {
  const totalItems = INSIGHTS.length;

  return (
    <section className="container py-20">
      <SectionHeader
        badge="Latest Insights"
        title="All the Essentials to Begin Your Property Journey with Piptan"
        subtitle="Explore market trends, property tips, and investment updates to help you stay ahead in the real estate world with confidence."
        icon={<IconCollection className="size-3 sm:size-4" />}
        hasHighlight
        highlightText="Property Journey with Piptan"
        action={
          <AnimatedButton
            href="/about"
            text="View all Insights"
            variant="outline"
          />
        }
      />

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {INSIGHTS.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-1">
                <div className="bg-muted h-full overflow-hidden rounded-md">
                  <div className="relative aspect-5/3 overflow-hidden">
                    <Image
                      src={data.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2">
                        <div className="bg-foreground size-1.5 rounded-full" />
                        {data.tag}
                      </span>
                      <div>{data.date}</div>
                    </div>
                    <h3 className="font-jaguar mb-2 text-2xl">{data.title}</h3>
                    <p className="text-lg">{data.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center gap-12">
          <p className="text-foreground/80 shrink-0 tracking-widest">
            <CarouselActiveIndex /> / {totalItems.toString().padStart(2, "0")}
          </p>
          <ProgressIndicator totalItems={totalItems} />
          <div className="relative flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
