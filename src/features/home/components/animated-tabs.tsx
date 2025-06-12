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
      <TabsList className="grid grid-cols-4 gap-1.5">
        {FEATURES.map(({ title }) => (
          <TabsTrigger
            key={title}
            value={title}
            className="leading-[1.02] font-medium uppercase backdrop-blur-xs"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        {FEATURES.map(({ title, description }, i) => (
          <TabsContent value={title} key={title} className="p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-3">
                <h3 className="col-span-2 mb-9 text-5xl leading-[1.1] font-medium">
                  <TextEffect text={title} duration={0.3} />
                </h3>
                <p className="text-muted/40 justify-self-end-safe text-2xl">
                  0{i + 1}
                </p>
              </div>
              <p className="text-2xl text-balance">{description}</p>
            </motion.div>
          </TabsContent>
        ))}
      </AnimatePresence>
    </Tabs>
  );
};
