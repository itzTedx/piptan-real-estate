import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

import {
	FILTERED_PROJECTS_QUERY_RESULT,
	PORTFOLIO_CARD_QUERY_RESULT,
} from "../../../../sanity.types";

type PropertyCardData =
	| PORTFOLIO_CARD_QUERY_RESULT[number]
	| FILTERED_PROJECTS_QUERY_RESULT[number];

interface Props {
	className?: string;
	data: PropertyCardData;
}

export const PropertyCard = ({ className, data }: Props) => {
	const developerLogoAlt =
		data.developer?.logo?.alt ??
		(data.developer?.name
			? `${data.developer.name} logo`
			: "Project developer logo");

	const projectImageAlt =
		data.mainImage?.alt ??
		(data.title && data.location
			? `${data.title} in ${data.location} — UAE real estate project`
			: (data.title ?? "UAE real estate project"));

	const href = (data.link as Route) || "/";

	return (
		<article
			className={cn(
				"group flex h-full flex-col overflow-hidden rounded-md",
				className
			)}
			itemScope
			itemType="https://schema.org/RealEstateListing"
		>
			<meta content={data.title ?? ""} itemProp="name" />
			{data.location && (
				<meta content={data.location} itemProp="addressLocality" />
			)}
			<Link
				aria-label={
					data.title
						? `View details for ${data.title}${
								data.location ? ` in ${data.location}` : ""
							}`
						: "View real estate project details"
				}
				className="relative flex aspect-5/6 h-full shrink-0 flex-col items-start justify-between overflow-hidden rounded-md border"
				href={href}
				itemProp="url"
				target="_blank"
			>
				<div className="absolute top-3 right-3 z-10 flex flex-col gap-3">
					<Tooltip delayDuration={100}>
						<TooltipTrigger asChild>
							<Button
								className="flex size-9 -translate-y-full items-center justify-center rounded-md bg-accent/20 opacity-0 backdrop-blur-md transition-all hover:bg-accent/50 group-hover:translate-y-0 group-hover:opacity-100"
								size="icon"
								variant="outline"
							>
								<ArrowUpRight className="size-6 text-foreground" />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="right">
							<div className="flex items-center gap-2">Explore more</div>
						</TooltipContent>
					</Tooltip>
				</div>

				{data.category && (
					<div className="relative z-10 flex items-center gap-2 p-6">
						<Badge>
							<span className="size-1 rounded-full bg-primary/80 transition-colors group-hover/category:bg-primary-foreground" />
							{data.category.title}
						</Badge>
					</div>
				)}
				<div className="relative z-10 flex w-full items-center justify-between gap-1 p-6 lg:p-9">
					<div className="flex flex-col items-start lg:gap-2">
						<h3 className="font-bold font-jaguar text-2xl tracking-wider transition-colors hover:text-primary-foreground lg:text-4xl">
							{data.title}
						</h3>

						<div className="flex gap-2 sm:gap-0.5">
							<span className="font-light tracking-wider">by</span>
							{data.developer && (
								<div className="relative grid w-16 shrink-0 place-content-center text-background leading-none tracking-wider sm:w-20">
									{data.developer.logo ? (
										<Image
											alt={developerLogoAlt}
											height={60}
											src={urlFor(data.developer.logo).url()}
											width={70}
										/>
									) : (
										data.developer.name
									)}
								</div>
							)}
						</div>
					</div>
					{data.qrCode && (
						<div className="size-24 rounded-sm bg-foreground p-1 transition-transform duration-300 ease-out group-hover:scale-150 md:size-20">
							<div className="relative aspect-square">
								<Image
									alt={`${data.title} QR Code`}
									blurDataURL={data.qrCode.asset?.metadata?.lqip ?? undefined}
									className="object-cover"
									fill
									placeholder={
										data.qrCode.asset?.metadata?.lqip ? "blur" : undefined
									}
									src={urlFor(data.qrCode).url()}
								/>
							</div>
						</div>
					)}

					{/* <WhatsappButton
						message={`Hello, I'm interested in getting more information about ${data.title}. Project Link: https://www.piptan.ae/portfolio/${data.slug || ""} `}
					/> */}
				</div>
				{data.mainImage && (
					<Image
						alt={projectImageAlt}
						blurDataURL={data.mainImage.asset?.metadata?.lqip ?? undefined}
						className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
						fill
						placeholder={
							data.mainImage.asset?.metadata?.lqip ? "blur" : undefined
						}
						src={urlFor(data.mainImage).url()}
					/>
				)}
				<div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/70" />
			</Link>
			{data.location && (
				<p className="mt-2 px-1 font-light text-foreground/70 text-xs uppercase tracking-wide sm:text-sm">
					{data.location}
				</p>
			)}
		</article>
	);
};
