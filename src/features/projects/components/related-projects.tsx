import { IconHouse } from "@/assets/icons";
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
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { PropertyCard } from "@/features/properties/components/property-card";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";

interface RelatedProjectsProps {
  projects: PROJECT_CARD_QUERYResult;
}

export const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  return (
    <section className="pt-20">
      <SectionHeader
        badge="Other projects you might like"
        icon={<IconHouse className="size-3 md:size-4" />}
        title="Residences Chosen with You in Mind"
        hasHighlight
        highlightText="Chosen with You"
        action={
          <AnimatedButton
            text="View all projects"
            href="/projects"
            variant="outline"
          />
        }
      />
      <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
        <CarouselContent className="-ml-1">
          {projects.map((data, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2">
              <div className="h-full p-1">
                <PropertyCard data={data} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center gap-12">
          <p className="text-foreground/80 shrink-0 tracking-widest">
            <CarouselActiveIndex /> /{" "}
            {projects.length.toString().padStart(2, "0")}
          </p>
          <ProgressIndicator totalItems={projects.length} />
          <div className="relative flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
