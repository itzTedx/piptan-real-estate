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
import { getInsights } from "@/features/insights/actions/query";
import { InsightCard } from "@/features/insights/components/insights-card";

import { ProgressIndicator } from "../components/progress-indicator";

export const InsightsSection = async () => {
  const insights = await getInsights();
  const totalItems = insights.length;

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
            href="/insights"
            text="View all Insights"
            variant="outline"
          />
        }
      />

      <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
        <CarouselContent className="-ml-1">
          {insights.map((data, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-1">
                <InsightCard data={data} />
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
