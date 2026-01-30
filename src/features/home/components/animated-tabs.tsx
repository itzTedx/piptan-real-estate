"use client";

import { AnimatePresence, motion } from "motion/react";

import { TextEffect } from "@/components/animation/text-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FEATURES } from "@/constants";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	selectedTab: number;
	onTabChange: (index: number) => void;
}

export const AnimatedTabs = ({
	className,
	selectedTab,
	onTabChange,
}: Props) => {
	return (
		<Tabs
			className={cn(className)}
			onValueChange={(value) => {
				const idx = FEATURES.findIndex((f) => f.title === value);
				if (idx !== -1) onTabChange(idx);
			}}
			value={FEATURES[selectedTab].title}
		>
			<TabsList className="grid h-fit grid-cols-2 gap-1.5 md:grid-cols-3 lg:grid-cols-4">
				{FEATURES.map(({ title }) => (
					<TabsTrigger
						className="p-2 font-medium text-sm uppercase leading-[1.02] backdrop-blur-xs sm:p-3"
						key={title}
						value={title}
					>
						{title}
					</TabsTrigger>
				))}
			</TabsList>

			<AnimatePresence>
				{FEATURES.map(({ title, description }, i) => (
					<TabsContent
						className="p-4 sm:p-8 md:p-10 lg:p-14"
						key={title}
						value={title}
					>
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							initial={{ opacity: 0, y: 20 }}
							layout
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<div className="flex gap-4 max-sm:items-center max-sm:justify-between sm:grid sm:grid-cols-3">
								<h3 className="font-medium text-3xl text-primary leading-[1.1] sm:col-span-2 sm:mb-6 sm:text-4xl lg:text-5xl">
									<TextEffect duration={0.3} text={title} />
								</h3>
								<p className="sm:justify-self-end-safe text-muted/40 text-xl sm:text-2xl">
									0{i + 1}
								</p>
							</div>
							<p className="mt-4 text-balance sm:mt-9text-lg sm:text-xl lg:text-2xl">
								{description}
							</p>
						</motion.div>
					</TabsContent>
				))}
			</AnimatePresence>
		</Tabs>
	);
};
