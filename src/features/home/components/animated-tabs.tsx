"use client";

import { AnimatePresence, motion } from "motion/react";

import { TextEffect } from "@/components/animation/text-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FEATURES } from "@/constants";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const AnimatedTabs = ({ className }: Props) => {
  return (
    <Tabs defaultValue={FEATURES[0].title} className={cn(className)}>
      <TabsList className="grid h-fit grid-cols-2 gap-1.5 md:grid-cols-3 lg:grid-cols-4">
        {FEATURES.map(({ title }) => (
          <TabsTrigger
            key={title}
            value={title}
            className="p-2 text-sm leading-[1.02] font-medium uppercase backdrop-blur-xs sm:p-3"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence>
        {FEATURES.map(({ title, description }, i) => (
          <TabsContent
            value={title}
            key={title}
            className="p-4 sm:p-8 md:p-10 lg:p-14"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              layout
            >
              <div className="flex gap-4 max-sm:items-center max-sm:justify-between sm:grid sm:grid-cols-3">
                <h3 className="text-primary text-3xl leading-[1.1] font-medium sm:col-span-2 sm:mb-6 sm:text-4xl lg:text-5xl">
                  <TextEffect text={title} duration={0.3} />
                </h3>
                <p className="text-muted/40 text-xl sm:justify-self-end-safe sm:text-2xl">
                  0{i + 1}
                </p>
              </div>
              <p className="sm:mt-9text-lg mt-4 text-balance sm:text-xl lg:text-2xl">
                {description}
              </p>
            </motion.div>
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  );
};
