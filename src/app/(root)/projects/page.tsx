import { Suspense } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { LeadSection } from "@/features/forms/lead-form/section";
import { PropertiesList } from "@/features/properties/components/properties-list";

export default function ProjectsPage() {
  return (
    <main className="pt-4 sm:pt-9 md:pt-12">
      <section className="relative container mb-20">
        <SectionHeader
          title="Properties"
          subtitle="Discover signature developments in Dubai's most sought-after communities."
        />
        <Separator />
        <Suspense>
          <PropertiesList />
        </Suspense>
      </section>
      <LeadSection
        title={`Let the experts help you\nmake the right investment`}
        highlightText="the right investment"
        subtitle="Feel free to contact with us"
        variant="compact"
      />
    </main>
  );
}
