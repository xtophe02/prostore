import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (val) => /^[0-9]+(\.[0-9]{2})?$/.test(formatNumberWithDecimal(Number(val))),
    {
      message: "Price must be a number with up to 2 decimal places",
    }
  );
//Schema for inserting a product
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  price: currency,
  stock: z.coerce.number().min(0, "Stock must be at least 0"),
  brand: z.string().min(3, "Brand must be at least 3 characters long"),
  category: z.string().min(3, "Category must be at least 3 characters long"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable(),
});
