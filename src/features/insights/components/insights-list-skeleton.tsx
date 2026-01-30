import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

export function InsightsListSkeleton() {
	return (
		<div className="space-y-8">
			{/* Filters skeleton */}
			<div className="grid grid-cols-4 items-center gap-4 rounded-md bg-muted/40 p-4">
				<div className="col-span-3 flex gap-2">
					{Array.from({ length: 5 }).map((_, i) => (
						<Skeleton className="h-8 w-20" key={i} />
					))}
				</div>
				<Skeleton className="h-10 w-full" />
			</div>

			{/* Grid skeleton */}
			<div
				className={cn(
					"grid gap-6",
					"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				)}
			>
				{Array.from({ length: 6 }).map((_, i) => (
					<div className="h-full p-1" key={i}>
						<div className="flex h-full flex-col overflow-hidden rounded-md bg-muted">
							<Skeleton className="aspect-5/3 w-full" />
							<div className="flex h-full flex-col items-center justify-between p-6">
								<div className="w-full">
									<div className="mb-3 flex items-center justify-between gap-3">
										<Skeleton className="h-4 w-20" />
										<Skeleton className="h-4 w-16" />
									</div>
									<Skeleton className="mb-2 h-8 w-full" />
									<Skeleton className="h-6 w-full" />
									<Skeleton className="mt-2 h-6 w-3/4" />
								</div>
								<Skeleton className="mt-3 h-10 w-full" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
