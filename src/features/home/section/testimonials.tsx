"use client";

import Image from "next/image";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { IconChatBubble } from "@/assets/icons";
import { Logo, WordMark } from "@/assets/logo";
import { FEEDBACKS } from "@/constants/mock-data";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="container py-20">
      <p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
        <IconChatBubble className="size-3 sm:size-4" />
        Testimonials
      </p>
      <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
          Built on Trust.
          <br />
          <span className="text-primary-foreground">Proven by Results.</span>
        </h2>
        <p className="text-primary-foreground text-base font-light sm:text-lg md:text-xl">
          With expert insight and a client-first mindset, we provide clear
          guidance, fast execution, and a smooth journey — helping you secure
          the right property with confidence.
        </p>
      </div>
      <ul className="mt-12 grid grid-cols-1 grid-rows-8 gap-3 md:grid-cols-3 md:grid-rows-3 md:gap-6">
        <li className="sticky top-[calc(50%-12rem)] col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 rounded-sm p-10 max-md:h-fit md:col-start-2">
          <Logo className="h-14 w-auto md:h-20" />
          <WordMark className="h-8 w-auto md:h-11" />
        </li>
        <li className="to-foreground group relative col-start-1 row-span-2 row-start-7 flex flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-b from-[#60A2D7] md:row-span-2 md:row-start-2">
          <h3 className="text-background absolute top-0 p-6 text-4xl md:p-10 md:text-6xl">
            Find the best properties in the{" "}
            <span className="font-medium">Middle East</span>
          </h3>
          <motion.div
            className="relative aspect-3/4 md:aspect-3/5"
            style={{
              y: useTransform(scrollYProgress, [0, 1], [350, 0]),
            }}
          >
            <Image
              src="/images/residential-tower.webp"
              alt=""
              fill
              className="object-cover brightness-100 saturate-100 transition-all duration-700 group-hover:brightness-110 group-hover:saturate-200"
            />
          </motion.div>
        </li>
        {FEEDBACKS.map((f) => (
          <li
            key={f.name}
            className={cn(
              // Base Styles
              "group relative z-10 flex flex-col justify-between rounded-sm p-6 backdrop-blur-2xl md:p-10",
              // Layout
              "nth-[3]:col-start-1 nth-[3]:row-start-2 nth-[4]:row-start-3 nth-[5]:row-start-4 nth-[6]:row-start-5 nth-[7]:row-start-6 max-md:col-start-1 md:nth-[3]:row-start-1 md:nth-[4]:col-start-3 md:nth-[4]:row-start-1 md:nth-[5]:row-start-2 md:nth-[6]:col-start-2 md:nth-[6]:row-start-3 md:nth-[7]:col-start-3 md:nth-[7]:row-start-3",
              // Colors
              "nth-[4]:text-background nth-[5]:bg-foreground/10 nth-[6]:bg-primary nth-[3]:bg-primary/30 nth-[4]:bg-foreground/85 nth-[7]:bg-[#344D35]"
            )}
          >
            <p className="text-xl font-medium text-balance md:text-3xl">
              {f.content}
            </p>
            <div className="mt-4 md:mt-6">
              <h3 className="md:text-xl">{f.name}</h3>
              <span className="text-sm font-medium tracking-wide md:text-lg">
                {f.designation}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
