"use client";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
	type UseEmblaCarouselType,
} from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	autoplay?: boolean;
	plugins?: CarouselPlugin;
	orientation?: "horizontal" | "vertical";
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	activeIndex: number;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

function Carousel({
	orientation = "horizontal",
	opts,
	setApi,
	autoplay = false,
	className,
	children,
	...props
}: React.ComponentProps<"div"> & CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === "horizontal" ? "x" : "y",
		},
		autoplay
			? [
					WheelGesturesPlugin(),
					Autoplay({
						stopOnInteraction: false,
						stopOnFocusIn: true,
						stopOnMouseEnter: true,
						delay: 3000,
					}),
				]
			: [WheelGesturesPlugin()]
	);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState<number>(0);

	const onSelect = React.useCallback((api: CarouselApi) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
		setActiveIndex(api.selectedScrollSnap());
	}, []);

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext]
	);

	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);

	React.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api: api,
				opts,
				orientation:
					orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
				activeIndex,
			}}
		>
			<div
				aria-roledescription="carousel"
				className={cn("relative", className)}
				data-slot="carousel"
				onKeyDownCapture={handleKeyDown}
				role="region"
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	);
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div
			className="overflow-hidden"
			data-slot="carousel-content"
			ref={carouselRef}
		>
			<div
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...props}
			/>
		</div>
	);
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
	const { orientation } = useCarousel();

	return (
		<div
			aria-roledescription="slide"
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			data-slot="carousel-item"
			role="group"
			{...props}
		/>
	);
}

function CarouselPrevious({
	className,

	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<button
			className={cn(
				"absolute size-8 text-foreground hover:text-primary-foreground",
				orientation === "horizontal"
					? "top-1/2 -left-12 -translate-y-1/2"
					: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			data-slot="carousel-previous"
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<svg
				fill="none"
				height="32"
				viewBox="0 0 32 32"
				width="32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.66663 16.0003H25.3333M6.66663 16.0003L12 21.3337M6.66663 16.0003L12 10.667"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<span className="sr-only">Previous slide</span>
		</button>
	);
}

function CarouselNext({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<button
			className={cn(
				"absolute size-8 text-foreground hover:text-primary-foreground",
				orientation === "horizontal"
					? "top-1/2 -right-12 -translate-y-1/2"
					: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			data-slot="carousel-next"
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<svg
				fill="none"
				height="32"
				viewBox="0 0 32 32"
				width="32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.66663 16.0003H25.3333M25.3333 16.0003L20 21.3337M25.3333 16.0003L20 10.667"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			<span className="sr-only">Next slide</span>
		</button>
	);
}

function CarouselActiveIndex() {
	const { activeIndex } = useCarousel();
	const index = activeIndex + 1;

	return index.toString().padStart(2, "0");
}

export {
	Carousel,
	CarouselActiveIndex,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
};
