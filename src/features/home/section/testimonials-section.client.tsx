"use client";

import { ReactNode, useRef } from "react";

import { TestimonialsScrollProvider } from "../components/testimonials-scroll-context";

type TestimonialsSectionProps = {
	children: ReactNode;
};

export const TestimonialsSection = ({ children }: TestimonialsSectionProps) => {
	const containerRef = useRef<HTMLElement | null>(null);

	return (
		<TestimonialsScrollProvider value={containerRef}>
			<section className="container py-20" ref={containerRef}>
				{children}
			</section>
		</TestimonialsScrollProvider>
	);
};
