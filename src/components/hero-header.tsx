import { cn } from "@/lib/utils";

import { StaggeredText } from "./animation/staggered-text";

interface TitleSegment {
	text: string;
	className?: string;
}

interface HeroHeaderProps {
	title: string | TitleSegment[];
	description?: string;
	subtitle?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	subtitleClassName?: string;
	className?: string;
	isLogo?: boolean;
}

export function HeroHeader({
	title,
	description,
	subtitle,
	titleClassName,
	descriptionClassName,
	subtitleClassName,
	className,
}: HeroHeaderProps) {
	const renderTitle = () => {
		if (typeof title === "string") {
			return (
				<StaggeredText duration={0.7} staggerChildren={0.03} text={title} />
			);
		}

		return title.map((segment, index) => (
			<span className={cn(segment.className)} key={index}>
				<StaggeredText
					duration={0.7}
					staggerChildren={0.03}
					text={segment.text}
				/>
			</span>
		));
	};

	return (
		<section
			aria-labelledby="hero-title"
			className={cn("relative py-12 text-center md:py-14 lg:py-20", className)}
		>
			<div className="relative z-10">
				{subtitle && (
					<p
						className={cn(
							"z-10 mb-2 text-base text-secondary md:text-xl lg:text-2xl",
							subtitleClassName
						)}
						role="doc-subtitle"
					>
						<StaggeredText text={subtitle} />
					</p>
				)}
				<h1
					className={cn(
						"relative z-10 mb-3 font-grotesk text-5xl text-brand-dark tracking-tight md:text-7xl/18 lg:text-8xl/26",
						titleClassName
					)}
					id="hero-title"
				>
					{renderTitle()}
				</h1>
				{description && (
					<p
						className={cn(
							"mb-16 text-balance font-light text-brand-gray md:text-xl",
							descriptionClassName
						)}
						role="doc-subtitle"
					>
						<StaggeredText
							duration={0.7}
							staggerChildren={0.03}
							text={description}
						/>
					</p>
				)}
			</div>
		</section>
	);
}
