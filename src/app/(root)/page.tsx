import Image from "next/image";
import Link from "next/link";

import MomentumLines from "@/components/animation/momentum-lines";
import SimpleMarquee from "@/components/animation/simple-marquee";
import { Separator } from "@/components/ui/separator";
import { ExpertiseSection } from "@/features/home/section/expertise";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="-mt-20">
      <section className="relative h-dvh">
        <div className="relative z-10 flex h-full flex-col justify-end py-12">
          <SimpleMarquee
            className="font-jaguar z-10 mb-6 w-full items-center gap-6 overflow-hidden text-9xl"
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
            <span>Luxury Homes</span>
            <div className="bg-foreground size-4 rounded-full" />
            <span>Commercial Spaces</span>
            <div className="bg-foreground size-4 rounded-full" />
            <span>Investment Opportunities</span>
            <div className="bg-foreground size-4 rounded-full" />
          </SimpleMarquee>

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
          <Link
            href="/about"
            className={cn(
              // Base styles
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-11 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-6 text-lg font-medium tracking-wide text-white",
              // Effect styles
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"About us"}
              className={cn(
                "relative block overflow-hidden",
                // After child
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
      <section className="relative container py-24">
        <div className="sticky top-[10vh] mb-96">
          <p className="mb-3">Our Expertise</p>
          <div className="z-10 grid grid-cols-3 gap-6">
            <h2 className="col-span-2 text-5xl font-bold">
              Real Estate Wisdom. <br />
              Built Over Time.
            </h2>
            <p className="text-xl font-light text-balance">
              With deep market knowledge and strategic insights, we help you
              make the right move — every time.
            </p>
          </div>
        </div>
        <ExpertiseSection />
      </section>
      <section className="container py-24">
        <div className="mb-12">
          <p className="mb-3">Projects</p>
          <div className="z-10 mb-4 grid grid-cols-3 gap-6">
            <h2 className="col-span-2 text-5xl font-bold">
              More Than Properties, <br />
              We Build Possibilities.
            </h2>
            <p className="text-primary-foreground text-xl font-light text-balance">
              Discover signature developments in Dubai’s most sought-after
              communities.
            </p>
          </div>
          <Link
            href="/about"
            className={cn(
              // Base styles
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-11 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-6 text-lg font-medium tracking-wide text-white",
              // Effect styles
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"View all projects"}
              className={cn(
                "relative block overflow-hidden",
                // After child
                "after:text-primary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
              )}
            >
              <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
                View all projects
              </span>
            </span>

            <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
          </Link>
        </div>
        <ul className="grid grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <PropertyCard key={i} className="first:col-span-2" />
          ))}
        </ul>
      </section>
    </main>
  );
}
