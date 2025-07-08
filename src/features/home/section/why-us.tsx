"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";

import { BuildingOutline } from "@/assets/building-outline";
import { IconDiamond } from "@/assets/icons";

import { AnimatedTabs } from "../components/animated-tabs";

export const WhyUsSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Images for each tab (replace with your actual image paths)
  const images = [
    "/images/isolated-home.webp",
    "/images/residential-tower-wide.webp",
    "/images/feature3.webp",
    "/images/feature4.webp",
  ];

  // --- Combine scroll and tab animation for y ---
  const tabY = useMotionValue(0);
  const scrollY = useTransform(scrollYProgress, [0, 1], [150, -20]);
  const combinedY = useTransform(
    [scrollY, tabY],
    ([s, t]) => (s as number) + (t as number)
  );

  useEffect(() => {
    tabY.set(80); // Start below
    const controls = animate(tabY, 0, {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    });
    return () => controls.stop();
  }, [selectedTab]);

  return (
    <section
      className="bg-primary relative overflow-hidden"
      aria-label="Why choose us section"
      ref={containerRef}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            className="absolute top-0 -left-[15vw] hidden aspect-5/3 w-2/3 sm:block 2xl:-left-[11vw]"
            style={{ y: combinedY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={images[selectedTab]}
              fill
              alt="Modern luxury home showcasing premium architecture and design"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatedTabs
          className="sm:col-start-2"
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>
      <BuildingOutline className="absolute top-0 -right-12 hidden sm:block" />
    </section>
  );
};
