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

import { ProgressIndicator } from "../components/progress-indicator";

export const InsightsSection = () => {
  const totalItems = 12;

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
        <CarouselContent>
          {Array.from({ length: totalItems }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="bg-muted grid aspect-square place-content-center-safe">
                  <span className="text-2xl font-semibold">{index + 1}</span>
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
