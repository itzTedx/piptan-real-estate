"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

const SimpleMarquee = dynamic(
	() => import("@/components/animation/simple-marquee")
);

export const Hero = () => {
	return (
		<section
			aria-label="Hero section"
			className="relative h-[60vh] md:h-[70vh] lg:h-dvh"
		>
			<h1 className="sr-only">Real Estate Investment & Development in UAE</h1>
			<div className="relative z-10 flex h-full flex-col justify-end py-4 sm:py-6 md:py-8 lg:py-12">
				<SimpleMarquee
					baseVelocity={4}
					className="z-10 mb-4 w-full items-center gap-3 overflow-hidden font-jaguar text-6xl sm:mb-6 sm:gap-4 md:gap-6 lg:text-8xl xl:text-9xl"
					direction="left"
					draggable={true}
					repeat={4}
					scrollAwareDirection={true}
					scrollSpringConfig={{ damping: 50, stiffness: 400 }}
					slowDownFactor={0.1}
					slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
					slowdownOnHover
					useScrollVelocity={true}
				>
					<span>Invest & Earn Programs</span>
					<div className="size-1.5 rounded-full bg-foreground sm:size-2 md:size-3 lg:size-4" />
					<span>High ROI Properties</span>
					<div className="size-1.5 rounded-full bg-foreground sm:size-2 md:size-3 lg:size-4" />
					<span>2x Return Investment Plans</span>
					<div className="size-1.5 rounded-full bg-foreground sm:size-2 md:size-3 lg:size-4" />
				</SimpleMarquee>

				<div className="container relative z-10 space-y-3 sm:space-y-4 md:space-y-6">
					<Separator className="bg-white/80" />
					<div className="flex items-center justify-between gap-3">
						<h2 className="text-3xl lg:text-4xl">High Capital Growth</h2>
						<p className="font-light text-sm sm:text-xl md:text-2xl">
							Invest with Purpose.
							<br className="md:hidden" /> Profit with Integrity
						</p>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background to-transparent md:h-2/5" />
			</div>
			<Image
				alt="Luxury real estate property in Dubai showcasing modern architecture and premium living spaces"
				className="object-cover max-md:object-right"
				fill
				priority
				src="/images/hero.webp"
			/>
		</section>
	);
};
