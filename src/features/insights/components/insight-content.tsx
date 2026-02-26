import Image from "next/image";
import Link from "next/link";

import { PortableText } from "next-sanity";

import { urlFor } from "@/lib/sanity/image";
import { formatDate } from "@/lib/utils";

import { INSIGHT_BY_SLUG_QUERY_RESULT } from "../../../../sanity.types";

interface Props {
	data: INSIGHT_BY_SLUG_QUERY_RESULT;
}

export const InsightContent = ({ data }: Props) => {
	if (!data) return null;
	return (
		<article className="prose lg:prose-xl prose-invert mx-auto max-w-prose prose-li:marker:text-brand-gray/50">
			{/* Article Header */}
			<header className="mb-8">
				<div className="mb-4 flex items-center justify-between gap-4 text-sm">
					{data.categories && (
						<div>
							{data.categories.slug ? (
								<Link
									className="inline-block rounded-full bg-brand-gray/10 px-3 py-1 font-medium text-brand-gray underline-offset-4 hover:underline"
									href={`/insights?tag=${encodeURIComponent(data.categories.slug)}`}
								>
									{data.categories.title}
								</Link>
							) : (
								<span className="inline-block rounded-full bg-brand-gray/10 px-3 py-1 font-medium text-brand-gray">
									{data.categories.title}
								</span>
							)}
						</div>
					)}

					<Link
						className="ml-auto text-muted-foreground underline-offset-4 hover:underline"
						href="/insights"
					>
						All insights
					</Link>
				</div>

				<h1 className="mb-4 font-bold text-4xl leading-tight lg:text-5xl">
					{data.title}
				</h1>

				{data.excerpt && (
					<p className="text-muted-foreground text-xl leading-relaxed">
						{data.excerpt}
					</p>
				)}

				{/* Author and Date */}
				<div className="mt-6 flex flex-wrap items-center gap-4 border-border border-t pt-6 text-muted-foreground text-sm">
					<time className="ml-auto" dateTime={data.createdAt}>
						{formatDate(data.createdAt)}
					</time>
				</div>
			</header>

			{/* Article Body */}
			{data.body && (
				<div className="space-y-6">
					<PortableText
						components={{
							types: {
								image: ({ value }) => (
									<figure>
										<div className="relative aspect-video w-full overflow-hidden rounded-lg">
											<Image
												alt={value.alt || "Article image"}
												className="object-cover"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
												src={urlFor(value).url()}
											/>
										</div>
										{value.alt && (
											<figcaption className="mt-2 text-center text-muted-foreground text-sm">
												{value.alt}
											</figcaption>
										)}
									</figure>
								),
							},
							block: {
								h1: ({ children }) => (
									<h1 className="font-bold text-3xl lg:text-4xl">{children}</h1>
								),
								h2: ({ children }) => (
									<h2 className="font-bold text-2xl lg:text-3xl">{children}</h2>
								),
								h3: ({ children }) => (
									<h3 className="font-bold text-xl lg:text-2xl">{children}</h3>
								),
								h4: ({ children }) => (
									<h4 className="font-bold text-lg lg:text-xl">{children}</h4>
								),
								blockquote: ({ children }) => (
									<blockquote className="border-brand-gray/30 border-l-4 pl-4 italic">
										{children}
									</blockquote>
								),
							},
						}}
						value={data.body}
					/>
				</div>
			)}
		</article>
	);
};
