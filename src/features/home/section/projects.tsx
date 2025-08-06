import { IconHouse } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Carousel, CarouselActiveIndex, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { getProjectsCardData } from "@/features/projects/actions/projects-actions";
import { PropertyCard } from "@/features/properties/components/property-card";
import { ProgressIndicator } from "../components/progress-indicator";

export const ProjectsSection = async () => {
  const projects = await getProjectsCardData();
  const totalItems = projects.length;
  return (
    <section
      className="container py-8 sm:py-12 md:py-16 lg:py-24"
      aria-label="Portfolios section"
    >
      <div className="mb-6 sm:mb-8 md:mb-12">
        <SectionHeader
          badge="Portfolios"
          icon={<IconHouse className="size-3 sm:size-4" />}
          title={` More Than Portfolios,\nWe Build Possibilities.`}
          hasHighlight
          highlightText="We Build Possibilities."
          subtitle="Discover signature developments in Dubai's most sought-after
            communities."
          action={
            <AnimatedButton
              href="/portfolio"
              text="View all Portfolios"
              variant="outline"
            />
          }
        />
      </div>
      <Carousel className="mt-4 w-full md:mt-6 lg:mt-9" autoplay>
        <CarouselContent className="-ml-1">
        {projects.map((project) => (
            <CarouselItem
            key={project._id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full p-1">
              <PropertyCard
           
            data={project}
              className="md:pl-4 pl-1 md:basis-1/2 lg:basis-1/3 pb-1"
           />
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
      
      {/* <ul className="grid grid-cols-1 max-sm:divide-y sm:grid-cols-2 sm:gap-6">
        {projects.map((project) => (
          <PropertyCard
            key={project._id}
            data={project}
            className="max-sm:py-6"
          />
        ))}
      </ul> */}
    </section>
  );
};
