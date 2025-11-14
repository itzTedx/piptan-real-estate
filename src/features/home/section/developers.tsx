import Image from "next/image";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { urlFor } from "@/lib/sanity/image";

import { getDevelopers } from "../actions";

export const Developers = async () => {
  const developers = await getDevelopers();
  return (
    <section className="container py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-primary-foreground">Trusted Developers</span>
          <br />
          Behind Every Opportunity
        </h2>
        <p className="text-primary-foreground text-base font-light sm:text-lg md:text-xl">
          Partnering with Dubai’s most reputable developers to deliver secure,
          high-growth investments.
        </p>
      </div>
      <InfiniteSlider>
        {developers.map((developer) => (
          <div
            key={developer._id}
            className="bg-foreground flex aspect-16/6 w-48 items-center justify-center rounded-lg border p-3"
          >
            <Image
              src={urlFor(developer?.logo ?? "").url()}
              alt={developer.name ?? ""}
              className="max-w-full object-contain"
              width={100}
              height={40}
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
};
