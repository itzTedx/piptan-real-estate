import { SectionHeader } from "@/components/ui/section-header";
import { LeadSection } from "@/features/forms/lead-form/section";
import { PropertyCard } from "@/features/properties/components/property-card";

export default function ProjectsPage() {
  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="container">
        <SectionHeader
          title="Properties"
          subtitle="Discover signature developments in Dubai’s most sought-after communities."
        />
        <ul className="grid grid-cols-1 max-sm:divide-y sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <PropertyCard key={i} className="max-sm:py-6" />
          ))}
        </ul>
      </section>
      <LeadSection />
    </main>
  );
}
