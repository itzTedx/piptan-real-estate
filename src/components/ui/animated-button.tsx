import Link from "next/link";
import { type ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ComponentProps<typeof Link> {
  variant?: "default" | "outline" | "secondary" | "primary";
  size?: "default" | "sm" | "lg";
  text: string;
}

const baseStyles =
  "font-medium group pointer-events-auto relative flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]";

const variants = {
  default: "bg-primary text-primary-foreground",
  outline: "bg-foreground/10 text-white",
  secondary:
    "bg-secondary text-primary border-background/20 inset-shadow-foreground/20 inset-shadow-sm",
  primary:
    "bg-primary text-primary-foreground border-background/20 inset-shadow-foreground/20 border-2 inset-shadow-sm",
} as const;

const sizes = {
  default:
    "h-9 px-4 text-sm sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
  sm: "h-8 px-3 text-sm sm:h-9 sm:px-4 sm:text-base",
  lg: "h-10 px-5 text-base sm:h-11 sm:px-6 sm:text-lg md:h-12 md:px-7 md:text-xl",
} as const;

const hoverTextColors = {
  default: "after:text-primary",
  outline: "after:text-primary",
  secondary: "after:text-secondary",
  primary: "after:text-primary",
} as const;

const hoverBackgrounds = {
  default: "bg-white",
  outline: "bg-white",
  secondary: "bg-secondary-foreground",
  primary: "bg-white",
} as const;

const textAnimationStyles =
  "after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0";

const backgroundAnimationStyles =
  "absolute inset-0 translate-y-full rounded-[50%_50%_0_0] transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none";

export const AnimatedButton = ({
  variant = "default",
  size = "default",
  text,
  className,
  ...props
}: AnimatedButtonProps) => {
  return (
    <Link
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span
        data-text={text}
        className={cn(
          "relative block overflow-hidden",
          textAnimationStyles,
          hoverTextColors[variant]
        )}
      >
        <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
          {text}
        </span>
      </span>

      <span
        className={cn(backgroundAnimationStyles, hoverBackgrounds[variant])}
      />
    </Link>
  );
};
