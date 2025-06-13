"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { BuildingOutline } from "@/assets/building-outline";
import { Logo } from "@/assets/logo";
import { AnimatedButton } from "@/components/ui/animated-button";

export const Cta = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  return (
    <section
      className="bg-primary relative overflow-hidden py-20"
      ref={containerRef}
    >
      <div className="relative z-10 container">
        <h5 className="font-jaguar mb-6 text-7xl">
          Ready to Take the <br />
          Next Step in Real Estate?
        </h5>
        <AnimatedButton href="/contact" text="Contact us" variant="secondary" />
      </div>
      <div className="relative z-10 container mt-36 flex items-center gap-3">
        <Logo className="h-10 w-auto text-white/30" isColor={false} />
        <p className="max-w-sm text-sm text-balance">
          Whether you&apos;re buying your first home or expanding your
          portfolio, Piptan Investment is here to help you make confident, smart
          decisions.
        </p>
      </div>
      <motion.div
        className="absolute top-0 -right-[15%] h-[120%] w-full"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-400, 0]),
        }}
      >
        <BuildingOutline className="absolute top-0 right-0 h-[120%] w-full" />
      </motion.div>
    </section>
  );
};
