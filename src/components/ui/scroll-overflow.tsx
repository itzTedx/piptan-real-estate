"use client";

import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type ScrollOverflowProps = ComponentProps<typeof ScrollArea> & {
  containerClassName?: string;
};

export const OverflowArea = ({
  className,
  containerClassName,
  children,
  ...props
}: ScrollOverflowProps) => (
  <ScrollArea
    className={cn(
      "w-full overflow-x-auto whitespace-nowrap",
      containerClassName
    )}
    {...props}
  >
    <div className={cn("flex w-max flex-nowrap items-center gap-2", className)}>
      {children}
    </div>
    <ScrollBar className="hidden" orientation="horizontal" />
  </ScrollArea>
);
export type ScrollOverflowProp = Omit<
  ComponentProps<typeof Button>,
  "onClick"
> & {
  item: string;
  onClick?: (item: string) => void;
};

export const OverflowItem = ({
  item,
  onClick,
  className,
  variant = "outline",
  size = "sm",
  children,
  ...props
}: ScrollOverflowProp) => {
  const handleClick = () => {
    onClick?.(item);
  };
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("cursor-pointer rounded-full px-4", className)}
      onClick={handleClick}
      {...props}
    >
      {children || item}
    </Button>
  );
};
