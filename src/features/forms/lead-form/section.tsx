"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { IconBrandTelegram, IconBrandWhatsapp } from "@/app/assets/icons";
import { Piptan } from "@/app/assets/logo";
import { cn } from "@/lib/utils";

import { LeadForm } from "./form";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn("flex w-fit items-center gap-6 md:gap-12", className)}>
      <Link
        href="/whatsapp"
        className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
      >
        <div className="text-background bg-foreground grid size-9 place-content-center-safe rounded-sm">
          <IconBrandWhatsapp />
        </div>
        <span className="group-hover:text-primary-foreground group-focus-visible:text-primary-foreground underline-offset-2 group-focus-visible:underline">
          Whatsapp
        </span>
      </Link>
      <Link
        href="/telegram"
        className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
      >
        <div className="text-background bg-foreground grid size-9 place-content-center-safe rounded-sm">
          <IconBrandTelegram />
        </div>
        <span className="group-hover:text-primary-foreground group-focus-visible:text-primary-foreground underline-offset-2 group-focus-visible:underline">
          Telegram
        </span>
      </Link>
    </div>
  );
};

interface LeadSectionProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  variant?: "default" | "compact";
}

export const LeadSection = ({
  title,
  highlightText,
  subtitle,
  variant = "default",
}: LeadSectionProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const renderTitle = () => {
    if (!highlightText) {
      return title.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < title.split("\n").length - 1 && <br />}
        </span>
      ));
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0].split("\n").map((line, index) => (
          <span key={`before-${index}`}>
            {line}
            {index < parts[0].split("\n").length - 1 && <br />}
          </span>
        ))}
        <span className="text-primary-foreground font-medium">
          {highlightText}
        </span>
        {parts[1]?.split("\n").map((line, index) => (
          <span key={`after-${index}`}>
            {line}
            {index < parts[1].split("\n").length - 1 && <br />}
          </span>
        ))}
      </>
    );
  };

  return (
    <section
      className={cn(
        variant === "default"
          ? "grid grid-cols-1 gap-6 md:grid-cols-2"
          : "bg-muted"
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          variant === "default"
            ? "bg-muted rounded-sm border p-6 sm:p-10 md:p-16 lg:p-20"
            : "container py-10 sm:py-14 md:py-16 lg:py-20"
        )}
      >
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            {renderTitle()}
          </h3>
          <p className="text-foreground/70 mt-2 mb-4 text-base sm:mb-6 sm:text-lg md:text-xl lg:text-2xl">
            {subtitle}
          </p>
        </div>

        {variant === "compact" && (
          <SocialLinks className="mb-4 max-md:mx-auto sm:mb-6" />
        )}

        <LeadForm className={cn(variant === "default" && "md:flex-col")} />

        <p className="text-muted-foreground mt-3 text-center text-xs sm:mt-4 sm:text-sm md:text-base">
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy"
            className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
          >
            privacy policy
          </Link>
        </p>

        {variant === "default" && (
          <SocialLinks className="mx-auto mt-4 sm:mt-6" />
        )}
      </div>

      {variant === "default" && (
        <div className="to-foreground group relative flex aspect-square flex-col justify-end overflow-hidden rounded-sm bg-gradient-to-b from-[#60A2D7] pb-12 sm:pb-16 md:aspect-auto md:pb-20 lg:pb-24">
          <Piptan className="w-full text-white" aria-hidden="true" />

          <motion.div
            className="absolute inset-0 aspect-square"
            style={{
              y,
            }}
          >
            <Image
              src="/images/residential-tower-wide.webp"
              alt=""
              fill
              className="object-cover brightness-100 saturate-100 transition-all duration-700 group-hover:brightness-110 group-hover:saturate-200"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};
