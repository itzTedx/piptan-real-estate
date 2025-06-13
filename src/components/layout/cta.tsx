"use client";

import Link from "next/link";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { BuildingOutline } from "@/assets/building-outline";
import { Logo } from "@/assets/logo";
import { cn } from "@/lib/utils";

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
        <Link
          href="/contact"
          className={cn(
            "font-inter group bg-secondary text-primary pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-4 text-sm font-medium tracking-wide sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
            "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
          )}
        >
          <span
            data-text={"Contact us"}
            className={cn(
              "relative block overflow-hidden",
              "after:text-secondary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
            )}
          >
            <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
              Contact us
            </span>
          </span>

          <span className="bg-secondary-foreground absolute inset-0 translate-y-full rounded-[50%_50%_0_0] transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
        </Link>
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
