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
    <div className="relative -mt-96 h-full">
      <StackingCards totalCards={cards.length}>
        {cards.map(({ description, image, title, id }, i) => {
          return (
            <StackingCardItem
              key={id}
              index={i}
              className="top-[25vh] h-[620px]"
            >
              <div
                className={cn(
                  "bg-background/50 relative mx-auto grid h-fit w-full grid-cols-2 flex-col rounded-xl border p-12 backdrop-blur-2xl"
                )}
              >
                <div className="grid grid-cols-8 gap-3">
                  <p className="text-muted">0{id}</p>
                  <div className="col-span-7 flex flex-1 flex-col">
                    <h3 className="font-jaguar mb-2 text-4xl font-bold">
                      {title}
                    </h3>
                    <p className="text-primary-foreground">{description}</p>
                  </div>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover"
                    fill
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
