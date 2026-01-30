"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { AnimatedButton } from "@/components/ui/animated-button";

import { BuildingOutline } from "@/app/assets/building-outline";
import { Logo } from "@/app/assets/logo";

export const Cta = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	return (
		<section
			aria-labelledby="cta-heading"
			className="relative overflow-hidden bg-primary py-12 md:py-20"
			ref={containerRef}
			role="region"
		>
			<div className="container relative z-10 max-md:text-center">
				<h2
					className="mb-3 font-jaguar text-5xl leading-tight md:mb-6 md:text-6xl lg:text-7xl"
					id="cta-heading"
				>
					Ready to Take the <br className="hidden sm:block" />
					Next Step in Real Estate?
				</h2>
				<AnimatedButton
					aria-label="Contact us for real estate investment opportunities"
					className="max-md:mx-auto"
					href="/contact"
					text="Contact us"
					variant="secondary"
				/>
			</div>

			<div className="container relative z-10 mt-12 flex flex-col items-center gap-4 sm:mt-20 sm:flex-row sm:gap-3 md:mt-36">
				<Logo
					aria-hidden="true"
					className="h-8 w-auto text-white/30 sm:h-10"
					isColor={false}
				/>
				<p className="text-balance text-sm text-white/90 max-md:text-center sm:text-base md:max-w-sm">
					Whether you&apos;re buying your first home or expanding your
					portfolio, Piptan Investment is here to help you make confident, smart
					decisions.
				</p>
			</div>

			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute top-0 right-0 h-96 w-full md:-right-[15%] md:h-[120%]"
				style={{
					y: useTransform(scrollYProgress, [0, 1], [-400, 0]),
				}}
			>
				<BuildingOutline className="absolute top-0 right-0 h-[120%] w-full" />
			</motion.div>
		</section>
	);
};
