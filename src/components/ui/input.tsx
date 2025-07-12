import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-foreground/50 selection:bg-primary selection:text-primary-foreground border-input text-foreground flex h-11 w-full min-w-0 border-b bg-transparent px-2 py-1 text-base font-medium shadow-xs transition-[color,box-shadow] outline-none",

        "file:text-background file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",

        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
