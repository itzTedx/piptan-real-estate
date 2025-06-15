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
  projectName: string;
}

export const ProjectGallery = ({
  images,
  projectName,
}: ProjectGalleryProps) => {
  return (
    <section className="pt-20" aria-label="Project Gallery">
      <h2 className="text-4xl">Project Gallery</h2>
      <Carousel
        autoplay
        className="mt-4 w-full md:mt-6 lg:mt-9"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="-ml-1">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="3xl:basis-1/3 pl-1 md:basis-1/2"
            >
              <div className="h-full p-1">
                <div className="relative aspect-square overflow-hidden rounded-md xl:aspect-5/4">
                  <Image
                    src={img}
                    alt={`${projectName} - Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex items-center gap-12">
          <p
            className="text-foreground/80 shrink-0 tracking-widest"
            aria-live="polite"
          >
            <CarouselActiveIndex /> /{" "}
            {images.length.toString().padStart(2, "0")}
          </p>
          <ProgressIndicator totalItems={images.length} visibleItems={2} />
          <div className="relative flex gap-2">
            <CarouselPrevious
              className="static translate-y-0"
              aria-label="Previous image"
            />
            <CarouselNext
              className="static translate-y-0"
              aria-label="Next image"
            />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
