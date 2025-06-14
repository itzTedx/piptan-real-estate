import Image from "next/image";

import {
  Carousel,
  CarouselActiveIndex,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  return (
    <section className="pt-20">
      <h2 className="text-4xl">Project Gallery</h2>
      <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
        <CarouselContent className="-ml-1">
          {images.map((img, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2">
              <div className="h-full p-1">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={img}
                    fill
                    alt=""
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center gap-12">
          <p className="text-foreground/80 shrink-0 tracking-widest">
            <CarouselActiveIndex /> /{" "}
            {images.length.toString().padStart(2, "0")}
          </p>
          <ProgressIndicator totalItems={images.length} />
          <div className="relative flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
