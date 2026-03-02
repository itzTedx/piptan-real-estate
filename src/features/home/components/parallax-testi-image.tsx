"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "motion/react";

import { useTestimonialsScrollContainer } from "./testimonials-scroll-context";

export const ParallaxTestiImage = () => {
	const containerRef = useTestimonialsScrollContainer();

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [350, 0]);

	return (
		<motion.div className="relative aspect-[3/4.5] md:aspect-3/5" style={{ y }}>
			<Image
				alt="Modern residential tower in Dubai – premium apartments for investment"
				className="object-cover brightness-100 saturate-100 transition-all duration-700 group-hover:brightness-110 group-hover:saturate-200"
				fill
				src="/images/residential-tower.webp"
			/>
		</motion.div>
	);
};
