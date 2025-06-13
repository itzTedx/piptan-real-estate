"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { BuildingOutline } from "@/assets/building-outline";
import { Logo } from "@/assets/logo";
import { AnimatedButton } from "@/components/ui/animated-button";

export const Cta = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      className="bg-primary relative overflow-hidden py-12 md:py-20"
      ref={containerRef}
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="relative z-10 container max-md:text-center">
        <h2
          id="cta-heading"
          className="font-jaguar mb-3 text-5xl leading-tight md:mb-6 md:text-6xl lg:text-7xl"
        >
          Ready to Take the <br className="hidden sm:block" />
          Next Step in Real Estate?
        </h2>
        <AnimatedButton
          href="/contact"
          text="Contact us"
          variant="secondary"
          className="max-md:mx-auto"
          aria-label="Contact us for real estate investment opportunities"
        />
      </div>

      <div className="relative z-10 container mt-12 flex flex-col items-center gap-4 sm:mt-20 sm:flex-row sm:gap-3 md:mt-36">
        <Logo
          className="h-8 w-auto text-white/30 sm:h-10"
          isColor={false}
          aria-hidden="true"
        />
        <p className="text-sm text-balance text-white/90 max-md:text-center sm:text-base md:max-w-sm">
          Whether you&apos;re buying your first home or expanding your
          portfolio, Piptan Investment is here to help you make confident, smart
          decisions.
        </p>
      </div>

      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-96 w-full md:-right-[15%] md:h-[120%]"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-400, 0]),
        }}
        aria-hidden="true"
      >
        <BuildingOutline className="absolute top-0 right-0 h-[120%] w-full" />
      </motion.div>
    </section>
  );
};
