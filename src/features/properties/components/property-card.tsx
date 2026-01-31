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

import { PORTFOLIO_CARD_QUERY_RESULT } from "../../../../sanity.types";

interface Props {
	className?: string;
	data: PORTFOLIO_CARD_QUERY_RESULT[number];
}

export const PropertyCard = ({ className, data }: Props) => {
	return (
		<div
			className={cn(
				"group flex h-full flex-col overflow-hidden rounded-md",
				className
			)}
		>
			<Link
				className="relative flex aspect-5/6 h-full shrink-0 flex-col items-start justify-between overflow-hidden rounded-md border"
				href={(data.link as Route) || "/"}
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
											alt={data.developer.logo.alt ?? data.developer.name ?? ""}
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
						<div className="group/qr-code size-24 rounded-sm bg-foreground p-1 md:size-20">
							<div className="relative aspect-square">
								<Image
									alt={`${data.title} QR Code`}
									blurDataURL={data.qrCode.asset?.metadata?.lqip ?? undefined}
									className="object-cover transition-transform duration-300 ease-out group-hover/qr-code:scale-150"
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
						alt={data.mainImage?.alt ?? data.title ?? ""}
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
		</div>
	);
};
