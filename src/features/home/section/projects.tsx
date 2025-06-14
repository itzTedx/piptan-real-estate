import { IconHouse } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { PROPERTIES } from "@/constants/mock-data";
import { PropertyCard } from "@/features/properties/components/property-card";

export const ProjectsSection = () => {
  return (
    <section
      className="container py-8 sm:py-12 md:py-16 lg:py-24"
      aria-label="Projects section"
    >
      <div className="mb-6 sm:mb-8 md:mb-12">
        <SectionHeader
          badge="Projects"
          icon={<IconHouse className="size-3 sm:size-4" />}
          title={` More Than Properties,\nWe Build Possibilities.`}
          hasHighlight
          highlightText="We Build Possibilities."
          subtitle="Discover signature developments in Dubai's most sought-after
            communities."
          action={
            <AnimatedButton
              href="/projects"
              text="View all projects"
              variant="outline"
            />
          }
        />
      </div>
      <ul className="grid grid-cols-1 max-sm:divide-y sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {PROPERTIES.map((property) => (
          <PropertyCard
            key={property.id}
            data={property}
            className="max-sm:py-6 first:sm:col-span-2"
          />
        ))}
      </ul>
    </section>
  );
};
