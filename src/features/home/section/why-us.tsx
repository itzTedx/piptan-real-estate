"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import {
	AnimatePresence,
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "motion/react";

import { BuildingOutline } from "@/app/assets/building-outline";
import { IconDiamond } from "@/app/assets/icons";

import { AnimatedTabs } from "../components/animated-tabs";

export const WhyUsSection = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	// Images for each tab (replace with your actual image paths)
	const images = [
		"/images/puzzle.svg",
		"/images/growth.svg",
		"/images/maze.svg",
		"/images/magnifier.svg",
	];

	// --- Combine scroll and tab animation for y ---
	const tabY = useMotionValue(0);
	const scrollY = useTransform(scrollYProgress, [0, 1], [150, -20]);
	const combinedY = useTransform(
		[scrollY, tabY],
		([s, t]) => (s as number) + (t as number)
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: we need to stop the animation when the component unmounts
	useEffect(() => {
		tabY.set(80); // Start below
		const controls = animate(tabY, 0, {
			duration: 0.5,
			ease: [0.42, 0, 0.58, 1],
		});
		return () => controls.stop();
	}, [selectedTab, tabY]);

	return (
		<section
			aria-label="Why choose us section"
			className="relative overflow-hidden bg-primary"
			ref={containerRef}
		>
			<div className="container py-8 sm:py-12 md:py-16 lg:py-24">
				<p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
					<IconDiamond className="size-3 sm:size-4" />
					Why choose us?
				</p>
				<div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
					<h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
						Where Real Estate <br />
						<span className="text-primary-foreground">
							Meets Real Potential
						</span>
					</h2>
					<p className="font-light text-base text-primary-foreground sm:text-lg md:text-xl">
						At Piptan Investment, we offer more than properties - we offer peace
						of mind. With expert guidance and premium listings, we help you make
						confident, future-ready real estate decisions.
					</p>
				</div>
			</div>
			<div className="container z-50 grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 md:pb-16 lg:pb-24">
				<AnimatePresence mode="wait">
					<motion.div
						animate={{ opacity: 1 }}
						className="absolute top-1/2 left-0 hidden aspect-5/3 w-[60%] -translate-y-1/2 sm:block"
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						key={selectedTab}
						style={{ y: combinedY }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<Image
							alt="Modern luxury home showcasing premium architecture and design"
							className="object-contain"
							fill
							src={images[selectedTab]}
						/>
					</motion.div>
				</AnimatePresence>
				<AnimatedTabs
					className="relative z-10 sm:col-start-2"
					onTabChange={setSelectedTab}
					selectedTab={selectedTab}
				/>
			</div>
			<BuildingOutline className="pointer-events-none absolute top-0 -right-12 hidden sm:block" />
		</section>
	);
};
