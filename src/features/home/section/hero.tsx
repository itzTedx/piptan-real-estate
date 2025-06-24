import Image from "next/image";

import SimpleMarquee from "@/components/animation/simple-marquee";
import { Separator } from "@/components/ui/separator";

export const Hero = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] lg:h-dvh"
      aria-label="Hero section"
    >
      <div className="relative z-10 flex h-full flex-col justify-end py-4 sm:py-6 md:py-8 lg:py-12">
        <SimpleMarquee
          className="font-jaguar z-10 mb-4 w-full items-center gap-3 overflow-hidden text-6xl sm:mb-6 sm:gap-4 md:gap-6 lg:text-8xl xl:text-9xl"
          baseVelocity={4}
          repeat={4}
          draggable={true}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.1}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="left"
        >
          <span>Invest & Earn Programs</span>
          <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
          <span>High ROI Properties</span>
          <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
          <span>2x Return Investment Plans</span>
          <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
        </SimpleMarquee>

        <div className="relative z-10 container space-y-3 sm:space-y-4 md:space-y-6">
          <Separator className="bg-white/80" />
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl lg:text-4xl">High Capital Growth</h1>
            <p className="text-sm font-light sm:text-xl md:text-2xl">
              Invest with Purpose.
              <br className="md:hidden" /> Profit with Integrity
            </p>
          </div>
        </div>
        <div className="from-background absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t to-transparent md:h-2/5" />
      </div>
      <Image
        src="/images/hero.webp"
        fill
        alt="Luxury real estate property in Dubai showcasing modern architecture and premium living spaces"
        className="object-cover max-md:object-right"
        priority
      />
    </section>
  );
};
