import Image from "next/image";
import Link from "next/link";

import { AnimatedButton } from "@/components/ui/animated-button";

import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils";

import {
	FILTERED_INSIGHTS_QUERYResult,
	INSIGHTS_QUERYResult,
} from "../../../../sanity.types";

interface Props {
	data: INSIGHTS_QUERYResult[number] | FILTERED_INSIGHTS_QUERYResult[number];
}

export const InsightCard = ({ data }: Props) => {
	return (
		<Link
			className="group flex h-full flex-col overflow-hidden rounded-md bg-muted"
			href={`/insights/${data.slug}`}
		>
			{data.image && (
				<div className="relative aspect-5/3 shrink-0 overflow-hidden">
					<Image
						alt=""
						className="object-cover"
						fill
						src={urlFor(data.image).url()}
					/>
				</div>
			)}
			<div className="flex h-full flex-col items-center justify-between p-6">
				<div>
					<div className="mb-3 flex items-center justify-between gap-3">
						<span className="inline-flex items-center gap-2">
							<div className="size-1.5 rounded-full bg-foreground" />
							{data.categories?.title}
						</span>
						<div>{formatDate(data.createdAt)}</div>
					</div>
					<h3 className="mb-2 text-2xl" title={data.title ?? ""}>
						{data.title}
					</h3>
					<p className="line-clamp-2 text-lg">{data.excerpt}</p>
				</div>

				<AnimatedButton
					className="mt-3 w-full"
					text="Read Article"
					variant="secondary"
				/>
			</div>
		</Link>
	);
};
