import { IconInfo } from "@/assets/icons";
import MomentumLines from "@/components/animation/momentum-lines";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";

export const AboutSection = () => {
  return (
    <section
      className="relative container grid grid-cols-1 gap-4 py-8 sm:grid-cols-6 sm:gap-6 sm:py-12 md:grid-cols-12 md:gap-8 md:py-16 lg:gap-12 lg:py-24"
      aria-label="About section"
    >
      <div className="pointer-events-none z-10 space-y-2 sm:col-span-3 sm:space-y-3 md:col-span-5">
        <SectionHeader
          badge="Who we are?"
          icon={<IconInfo className="size-3 sm:size-4" />}
          title={`Your Real Estate\nPartner in Every Step`}
          hasHighlight
          highlightText="Partner in Every Step"
          action={
            <AnimatedButton href="/about" text="About us" variant="outline" />
          }
        />
      </div>
      <p className="text-primary-foreground pointer-events-none z-10 text-lg leading-normal font-light text-balance sm:col-span-3 sm:text-xl md:col-span-7 md:text-2xl lg:text-4xl">
        Whether you&apos;re a seasoned investor or new to real estate, Piptan
        Investment delivers seamless capital{" "}
        <span className="font-medium">
          solutions, market-driven insights, and expert guidance
        </span>{" "}
        - Empowering you to invest with confidence.
      </p>
      <div className="absolute inset-x-0 inset-y-0">
        <MomentumLines />
      </div>
    </section>
  );
};
