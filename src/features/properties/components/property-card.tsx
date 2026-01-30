import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";

interface Props {
	className?: string;
	data: PROJECT_CARD_QUERYResult[number];
}

export const PropertyCard = ({ className, data }: Props) => {
	return (
		<div
			className={cn(
				"group",
				"group flex h-full flex-col overflow-hidden rounded-md",
				className
			)}
		>
			<Link
				className="relative aspect-5/6 shrink-0 overflow-hidden rounded-md border p-9"
				href={`/portfolio/${data.slug || ""}`}
			>
				{/* <div className="relative z-10 flex items-start justify-between gap-3">
						{data.category && (
							<p className="group/category flex items-center gap-2 text-foreground/80 text-sm transition-colors hover:text-primary-foreground">
								<span className="size-1 rounded-full bg-foreground/80 transition-colors group-hover/category:bg-primary-foreground" />
								{data.category.title}
							</p>
						)}
					</div> */}
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
				<div className="relative z-10 flex h-full flex-col items-center justify-end gap-3">
					<h3 className="text-center font-bold font-jaguar text-5xl tracking-wider transition-colors hover:text-primary-foreground">
						{data.title}
					</h3>

					{data.developer && (
						<div className="relative grid w-20 shrink-0 place-content-center text-background">
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
					<Button size="sm">Explore portflio</Button>
					{/* <WhatsappButton
							message={`Hello, I'm interested in getting more information about ${data.title}. Project Link: https://www.piptan.ae/portfolio/${data.slug || ""} `}
						/> */}
				</div>
				<div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background to-transparent" />
			</Link>
		</div>
	);
};
