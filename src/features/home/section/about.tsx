import Link from "next/link";

import MomentumLines from "@/components/animation/momentum-lines";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section
      className="relative container grid grid-cols-1 gap-4 py-8 sm:grid-cols-6 sm:gap-6 sm:py-12 md:grid-cols-12 md:gap-8 md:py-16 lg:gap-12 lg:py-24"
      aria-label="About section"
    >
      <div className="pointer-events-none z-10 space-y-2 sm:col-span-3 sm:space-y-3 md:col-span-5">
        <p className="pointer-events-none">Who we are?</p>
        <h2 className="pointer-events-none text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
          Your Real Estate <br />
          <span className="text-primary-foreground">Partner in Every Step</span>
        </h2>
        <Link
          href="/about"
          className={cn(
            "font-inter group bg-foreground/10 pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-4 text-sm font-medium tracking-wide text-white sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
            "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
          )}
        >
          <span
            data-text={"About us"}
            className={cn(
              "relative block overflow-hidden",
              "after:text-primary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
            )}
          >
            <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
              About us
            </span>
          </span>

          <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
        </Link>
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
