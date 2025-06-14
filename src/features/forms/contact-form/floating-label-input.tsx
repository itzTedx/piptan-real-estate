import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const formLabelBaseStyles = {
  base: cn(
    "absolute block px-1 text-base",
    "cursor-text text-input",
    "transition-all origin-start"
  ),
  input: cn("top-1/2 -translate-y-1/2"),
  textarea: cn("top-4"),
  focus: cn(
    "group-focus-within:top-0 group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-background group-focus-within:pointer-events-none group-focus-within:cursor-default"
  ),
  filled: {
    input: cn(
      "has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-background has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:cursor-default"
    ),
    textarea: cn(
      "has-[+textarea:not(:placeholder-shown)]:top-0 has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-background has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:cursor-default"
    ),
  },
};

interface FloatingLabelInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  isTextarea?: boolean;
}

export function FloatingLabelInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  isTextarea = false,
}: FloatingLabelInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="sr-only">{label}</FormLabel>
          <FormControl>
            <div className="group relative">
              <FormLabel
                className={cn(
                  formLabelBaseStyles.base,
                  isTextarea
                    ? formLabelBaseStyles.textarea
                    : formLabelBaseStyles.input,
                  formLabelBaseStyles.focus,
                  isTextarea
                    ? formLabelBaseStyles.filled.textarea
                    : formLabelBaseStyles.filled.input
                )}
                htmlFor={name}
              >
                <span
                  className={cn(
                    "bg-muted text-muted-foreground inline-flex px-1"
                  )}
                >
                  {label}
                </span>
              </FormLabel>
              {isTextarea ? (
                <Textarea
                  placeholder=""
                  className={cn("min-h-[120px] resize-none")}
                  {...field}
                  id={name}
                />
              ) : (
                <Input placeholder="" type={type} {...field} id={name} />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
