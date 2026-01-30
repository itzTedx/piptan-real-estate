import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";
import { WhatsappButton } from "./whatsapp-button";

interface Props {
	className?: string;
	data: PROJECT_CARD_QUERYResult[number];
}

export const PropertyCard = ({ className, data }: Props) => {
	const price = data.price
		? Number.parseFloat(data.price.replace(/[^0-9.]/g, ""))
		: 0;

	const splitTitle = (title: string) => {
		const parts = title.split(" by ");
		if (parts.length > 1) {
			return {
				main: parts[0],
				subtitle: `by ${parts.slice(1).join(" by ")}`,
			};
		}
		return { main: title, subtitle: "" };
	};

	const { main, subtitle } = splitTitle(data.title || "");
	return (
		<div
			className={cn(
				"group",
				"group flex h-full flex-col overflow-hidden rounded-md",
				className
			)}
		>
			<Link href={`/portfolio/${data.slug || ""}`}>
				<div
					className={cn(
						"relative flex aspect-5/6 shrink-0 flex-col justify-between overflow-hidden rounded-md p-6 outline outline-foreground/20 group-hover:outline-accent-foreground/50"
					)}
				>
					<div className="relative z-10 flex items-start justify-between gap-3">
						{/* <ul className="flex flex-wrap gap-1.5">
              {data.tags?.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul> */}

						{data.category && (
							<p className="group/category flex items-center gap-2 text-foreground/80 text-sm transition-colors hover:text-primary-foreground">
								<span className="size-1 rounded-full bg-foreground/80 transition-colors group-hover/category:bg-primary-foreground" />
								{data.category.title}
							</p>
						)}

						{data.developer && (
							<div className="relative grid aspect-4/3 w-20 shrink-0 place-content-center rounded border border-muted-foreground/10 bg-foreground p-2 text-background">
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
					<div className={cn("relative z-10")}>
						<h3 className="mb-2 text-center font-bold font-jaguar text-5xl tracking-wider transition-colors hover:text-primary-foreground">
							{main}
						</h3>
						{subtitle && (
							<p className="mb-6 text-center font-medium text-foreground/60 text-lg transition-colors">
								{subtitle}
							</p>
						)}

						{/* <p className="text-foreground mb-2 flex items-center gap-1">
              <MapPin className="text-muted-foreground size-4" />
              {data.location}
            </p> */}
						{/* <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <p className="text-foreground">
                  Price:{" "}
                  <span className="font-medium">{formatPrice(price)}</span>
                </p>
                {data.payments && (
                  <Badge variant="secondary">
                    Payment Plan: {data.payments}
                  </Badge>
                )}
              </div>
              <p>{data.bedrooms} Bedrooms</p>
            </div> */}
						<WhatsappButton
							message={`Hello, I'm interested in getting more information about ${data.title}. Project Link: https://www.piptan.ae/portfolio/${data.slug || ""} `}
						/>
					</div>
					<div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-background to-transparent" />
				</div>
			</Link>
		</div>
	);
};
