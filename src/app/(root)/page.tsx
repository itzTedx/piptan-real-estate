import Image from "next/image";

import { ArrowTopRightIcon } from "@sanity/icons";

import MomentumLines from "@/components/animation/momentum-lines";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="-mt-20">
      <section className="relative h-dvh">
        <div className="relative z-10 flex h-full flex-col justify-end py-12">
          <div className="relative z-10 container space-y-6">
            <Separator className="bg-white/80" />
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-4xl">Opening More Doors</h1>
              <p className="text-2xl font-light">
                Invest Smarter. Live Better. Grow Faster.
              </p>
            </div>
          </div>
          <div className="from-background absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t to-transparent" />
        </div>
        <Image src="/images/hero.webp" fill alt="" className="object-cover" />
      </section>
      <section className="relative container grid grid-cols-12 gap-12 py-24">
        <div className="pointer-events-none z-10 col-span-5 space-y-3">
          <p className="pointer-events-none">Who we are?</p>
          <h2 className="pointer-events-none text-5xl font-bold">
            Your Real Estate{" "}
            <span className="text-primary-foreground">
              Partner in Every Step
            </span>
          </h2>
          <Button variant="outline" className="pointer-events-auto w-fit">
            About us <ArrowTopRightIcon />
          </Button>
        </div>
        <p className="pointer-events-none z-10 col-span-7 text-4xl leading-normal font-light text-balance">
          Whether you&apos;re a seasoned investor or new to real estate, Piptan
          Investment delivers seamless capital{" "}
          <span className="font-medium">
            solutions, market-driven insights, and expert guidance;
          </span>{" "}
          Empowering you to invest with confidence.
        </p>
        <div className="absolute inset-x-0 inset-y-0">
          <MomentumLines />
        </div>
      </section>
      <section className="container py-24">
        <p className="mb-3">Our Expertise</p>
        <div className="grid grid-cols-3 gap-6">
          <h2 className="col-span-2 text-5xl font-bold">
            Real Estate Wisdom. <br />
            Built Over Time.
          </h2>
          <p className="text-xl font-light text-balance">
            With deep market knowledge and strategic insights, we help you make
            the right move — every time.
          </p>
        </div>

        <Button>Button</Button>

        <button
          className={cn(
            // Base styles
            "font-inter group relative w-fit cursor-pointer overflow-hidden rounded-full border border-current px-6 py-2 text-lg font-medium tracking-wide text-white",
            // Effect styles
            "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
          )}
        >
          <span
            data-text={"Invert Button"}
            className={cn(
              "relative block overflow-hidden",
              // After child
              "after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:text-black after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
            )}
          >
            <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
              Button
            </span>
          </span>

          <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
        </button>
      </section>
    </main>
  );
}
