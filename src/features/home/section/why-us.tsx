import Image from "next/image";

import { BuildingOutline } from "@/assets/building-outline";
import { IconDiamond } from "@/assets/icons";

import { AnimatedTabs } from "../components/animated-tabs";

export const WhyUsSection = () => {
  return (
    <section
      className="bg-primary relative overflow-hidden"
      aria-label="Why choose us section"
    >
      <div className="container py-8 sm:py-12 md:py-16 lg:py-24">
        <p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
          <IconDiamond className="size-3 sm:size-4" />
          Why choose us?
        </p>
        <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
            Where Real Estate <br />
            <span className="text-primary-foreground">
              Meets Real Potential
            </span>
          </h2>
          <p className="text-primary-foreground text-base font-light sm:text-lg md:text-xl">
            At Piptan Investment, we offer more than properties - we offer peace
            of mind. With expert guidance and premium listings, we help you make
            confident, future-ready real estate decisions.
          </p>
        </div>
      </div>
      <div className="relative z-10 container grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 md:pb-16 lg:pb-24">
        <div className="absolute top-0 -left-[10vw] hidden aspect-5/3 w-2/3 sm:block">
          <Image
            src="/images/isolated-home.webp"
            fill
            alt="Modern luxury home showcasing premium architecture and design"
            className="object-cover"
          />
        </div>
        <AnimatedTabs className="sm:col-start-2" />
      </div>
      <BuildingOutline className="absolute top-0 -right-12 hidden sm:block" />
    </section>
  );
};
