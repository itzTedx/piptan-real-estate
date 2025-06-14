import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s-']+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .trim()
    .refine((val) => val.length > 0, {
      message: "Name is required",
    }),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
    .trim()
    .refine((val) => val.length > 0, {
      message: "Phone number is required",
    }),
});

export type LeadFormData = z.infer<typeof leadSchema>;
