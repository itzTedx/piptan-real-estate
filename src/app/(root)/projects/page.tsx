import { SectionHeader } from "@/components/ui/section-header";
import { LeadSection } from "@/features/forms/lead-form/section";
import { PropertiesList } from "@/features/properties/components/properties-list";

export default function ProjectsPage() {
  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="container">
        <SectionHeader
          title="Properties"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <PropertiesList />
      </section>
      <LeadSection />
    </main>
  );
}
