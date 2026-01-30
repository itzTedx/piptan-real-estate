import { SanityImageSource } from "@sanity/image-url";

import {
	Carousel,
	CarouselActiveIndex,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { urlFor } from "@/lib/sanity/image";

import ImageViewer from "./zoom-image";

interface ProjectGalleryProps {
	images: SanityImageSource[] | null;
	projectName: string | null;
}

export const ProjectGallery = ({
	images,
	projectName,
}: ProjectGalleryProps) => {
	return (
		images && (
			<section aria-label="Project Gallery" className="pt-20">
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
								className="3xl:basis-1/3 pl-1 md:basis-1/2"
								key={`${projectName} - Gallery Image ${index + 1}`}
							>
								<div className="h-full p-1">
									<div className="relative aspect-square overflow-hidden rounded-md xl:aspect-5/4">
										<ImageViewer
											className="relative aspect-square overflow-hidden rounded-md xl:aspect-5/4"
											classNameImageViewer="object-cover"
											classNameThumbnailViewer="object-cover transition-transform duration-500 hover:scale-105"
											imageTitle={`${projectName} - Gallery Image ${index + 1}`}
											imageUrl={urlFor(img).url()}
											thumbnailUrl={urlFor(img).url()}
										/>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="mt-6 flex items-center gap-12">
						<p
							aria-live="polite"
							className="shrink-0 text-foreground/80 tracking-widest"
						>
							<CarouselActiveIndex /> /{" "}
							{images.length.toString().padStart(2, "0")}
						</p>
						<ProgressIndicator totalItems={images.length} visibleItems={2} />
						<div className="relative flex gap-2">
							<CarouselPrevious
								aria-label="Previous image"
								className="static translate-y-0"
							/>
							<CarouselNext
								aria-label="Next image"
								className="static translate-y-0"
							/>
						</div>
					</div>
				</Carousel>
			</section>
		)
	);
};
