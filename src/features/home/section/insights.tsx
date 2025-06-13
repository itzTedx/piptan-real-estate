import { IconCollection } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";

export const InsightsSection = () => {
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
    </section>
  );
};
