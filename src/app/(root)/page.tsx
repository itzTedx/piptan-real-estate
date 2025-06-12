import Image from "next/image";

import { ArrowTopRightIcon } from "@sanity/icons";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
      <section className="container grid grid-cols-12 gap-12 py-24">
        <div className="col-span-5 space-y-3">
          <p>Who we are?</p>
          <h2 className="text-5xl font-bold">
            Your Real Estate{" "}
            <span className="text-primary-foreground">
              Partner in Every Step
            </span>
          </h2>
          <Button variant="outline">
            About us <ArrowTopRightIcon />
          </Button>
        </div>
        <p className="col-span-7 text-4xl leading-normal font-light text-balance">
          Whether you&apos;re a seasoned investor or new to real estate, Piptan
          Investment delivers seamless capital{" "}
          <span className="font-medium">
            solutions, market-driven insights, and expert guidance;
          </span>{" "}
          Empowering you to invest with confidence.
        </p>
      </section>
    </main>
  );
}
