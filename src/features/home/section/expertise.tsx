import Image from "next/image";

import StackingCards, {
  StackingCardItem,
} from "@/components/animation/stacking-cards";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    title: "Luxury Homes",
    description: "Elegant residences in prestigious locations",
    image: "/images/luxury.jpg",
  },
  {
    id: 2,
    title: "Commercial Spaces",
    description: "Strategic properties for business success",
    image: "/images/commercial.jpg",
  },
  {
    id: 3,
    title: "Investment Opportunities",
    description: "High-yield assets for discerning investors",
    image: "/images/investment.jpg",
  },
  {
    id: 4,
    title: "Rental Listings",
    description: "Quality rentals tailored to your lifestyle",
    image: "/images/rental.jpg",
  },
];

export const ExpertiseSection = () => {
  return (
    <div className="relative mt-[-15vh] min-h-screen md:mt-[-70vh] lg:mt-[-80vh] xl:mt-[-45vh]">
      <StackingCards totalCards={cards.length}>
        {cards.map(({ description, image, title, id }, i) => {
          return (
            <StackingCardItem
              key={id}
              index={i}
              className="top-[30vh] h-[500px] md:top-[20vh] md:h-[550px] lg:top-[25vh] lg:h-[620px]"
            >
              <div
                className={cn(
                  "bg-background/50 relative mx-auto grid h-fit w-full grid-cols-1 flex-col gap-6 rounded-xl border p-6 backdrop-blur-2xl md:p-8 lg:grid-cols-2 lg:gap-8 lg:p-12"
                )}
              >
                <div className="grid grid-cols-8 gap-3">
                  <p className="text-muted text-sm md:text-base">0{id}</p>
                  <div className="col-span-7 flex flex-1 flex-col">
                    <h3 className="font-jaguar mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
                      {title}
                    </h3>
                    <p className="text-primary-foreground text-sm md:text-base">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md md:aspect-[16/10]">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </div>
  );
};
