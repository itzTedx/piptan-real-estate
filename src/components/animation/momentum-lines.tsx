"use client";

import { MouseEvent, useRef } from "react";

import gsap from "gsap";

import { cn } from "@/lib/utils";

const THRESHOLD = 200;
const ARRAY_LENGTH = 17;

export default function MomentumLines({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);

	const transformX = (el: HTMLDivElement, value: number) => {
		const xTo = gsap.quickTo(el, "x", {
			duration: 0.8,
			ease: "power3.out",
		});

		xTo(value);
	};

	const toggleOpacity = (el: HTMLDivElement, value: number) => {
		const opacityTo = gsap.quickTo(el, "opacity", {
			duration: 0.8,
			ease: "power3.out",
		});

		opacityTo(value);
	};

	const followMouse = (mouseX: number) => {
		if (!containerRef.current) return;
		const lines = containerRef.current?.querySelectorAll(".line");
		const containerWidth = containerRef.current.offsetWidth;

		lines.forEach((line, index) => {
			const lineDiv = line as HTMLDivElement;

			const relativeLeft =
				lineDiv.offsetLeft - containerRef.current!.offsetLeft;

			const xPercentage = mouseX / containerWidth;
			const linePercentage = relativeLeft / containerWidth;
			const gapPercentage = Math.abs(xPercentage - linePercentage);
			const isLastOrFirst = !index || index === lines.length - 1;
			const threshold = isLastOrFirst ? THRESHOLD / 2 : THRESHOLD;

			const gapDiff = Math.min(
				Math.max(mouseX - relativeLeft, -threshold),
				threshold
			);

			transformX(lineDiv, gapDiff * (1 - gapPercentage));
			toggleOpacity(lineDiv, 1 - gapPercentage);
		});
	};

	const onMouseMove = (e: MouseEvent) => {
		const mouseX = e.nativeEvent.offsetX;
		followMouse(mouseX);
	};

	const onMouseOut = () => {
		const lines = containerRef.current?.querySelectorAll(".line");

		lines?.forEach((line) => {
			transformX(line as HTMLDivElement, 0);
			toggleOpacity(line as HTMLDivElement, 1);
		});
	};
	return (
		<div
			className="flex h-full w-full justify-between p-10"
			onMouseMove={onMouseMove}
			onMouseOut={onMouseOut}
			ref={containerRef}
		>
			{[...new Array(ARRAY_LENGTH).fill(0)].map((_, index) => {
				return (
					<div
						className={cn(
							"line pointer-events-none h-full w-px bg-gradient-to-b from-transparent via-muted to-transparent",
							className
						)}
						key={index}
					/>
				);
			})}
		</div>
	);
}
