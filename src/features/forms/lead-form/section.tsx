"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "motion/react";

import { IconBrandTelegram, IconBrandWhatsapp } from "@/app/assets/icons";
import { Piptan } from "@/app/assets/logo";
import { cn } from "@/lib/utils";

import { LeadForm } from "./form";

interface SocialLinksProps {
	className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
	return (
		<div className={cn("flex w-fit items-center gap-6 md:gap-12", className)}>
			<Link
				className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
				href="/whatsapp"
			>
				<div className="place-content-center-safe grid size-9 rounded-sm bg-foreground text-background">
					<IconBrandWhatsapp />
				</div>
				<span className="underline-offset-2 group-hover:text-primary-foreground group-focus-visible:text-primary-foreground group-focus-visible:underline">
					Whatsapp
				</span>
			</Link>
			<Link
				className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
				href="/telegram"
			>
				<div className="place-content-center-safe grid size-9 rounded-sm bg-foreground text-background">
					<IconBrandTelegram />
				</div>
				<span className="underline-offset-2 group-hover:text-primary-foreground group-focus-visible:text-primary-foreground group-focus-visible:underline">
					Telegram
				</span>
			</Link>
		</div>
	);
};

interface LeadSectionProps {
	title: string;
	highlightText?: string;
	subtitle: string;
	variant?: "default" | "compact";
}

export const LeadSection = ({
	title,
	highlightText,
	subtitle,
	variant = "default",
}: LeadSectionProps) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [200, 0]);

	const renderTitle = () => {
		if (!highlightText) {
			return title.split("\n").map((line, index) => (
				<span key={index}>
					{line}
					{index < title.split("\n").length - 1 && <br />}
				</span>
			));
		}

		const parts = title.split(highlightText);
		return (
			<>
				{parts[0].split("\n").map((line, index) => (
					<span key={`before-${index}`}>
						{line}
						{index < parts[0].split("\n").length - 1 && <br />}
					</span>
				))}
				<span className="font-medium text-primary-foreground">
					{highlightText}
				</span>
				{parts[1]?.split("\n").map((line, index) => (
					<span key={`after-${index}`}>
						{line}
						{index < parts[1].split("\n").length - 1 && <br />}
					</span>
				))}
			</>
		);
	};

	return (
		<section
			className={cn(
				variant === "default"
					? "grid grid-cols-1 gap-6 md:grid-cols-2"
					: "bg-muted"
			)}
			ref={containerRef}
		>
			<div
				className={cn(
					variant === "default"
						? "rounded-sm border bg-muted p-6 sm:p-10 md:p-16 lg:p-20"
						: "container py-10 sm:py-14 md:py-16 lg:py-20"
				)}
			>
				<div className="text-center">
					<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
						{renderTitle()}
					</h3>
					<p className="mt-2 mb-4 text-base text-foreground/70 sm:mb-6 sm:text-lg md:text-xl lg:text-2xl">
						{subtitle}
					</p>
				</div>

				{variant === "compact" && (
					<SocialLinks className="mb-4 max-md:mx-auto sm:mb-6" />
				)}

				<LeadForm className={cn(variant === "default" && "md:flex-col")} />

				<p className="mt-3 text-center text-muted-foreground text-xs sm:mt-4 sm:text-sm md:text-base">
					By submitting this form, you agree to our{" "}
					<Link
						className="underline underline-offset-2 transition-colors hover:text-primary-foreground"
						href="/legal/privacy"
					>
						privacy policy
					</Link>
				</p>

				{variant === "default" && (
					<SocialLinks className="mx-auto mt-4 sm:mt-6" />
				)}
			</div>

			{variant === "default" && (
				<div className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-sm bg-linear-to-b from-[#60A2D7] to-foreground pb-12 sm:pb-16 md:aspect-auto md:pb-20 lg:pb-24">
					<Piptan aria-hidden="true" className="w-full text-white" />

					<motion.div
						className="absolute inset-0 aspect-square"
						style={{
							y,
						}}
					>
						<Image
							alt=""
							className="object-cover brightness-100 saturate-100 transition-all duration-700 group-hover:brightness-110 group-hover:saturate-200"
							fill
							src="/images/residential-tower-wide.webp"
						/>
					</motion.div>
				</div>
			)}
		</section>
	);
};
