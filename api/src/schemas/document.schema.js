import { z } from "zod";

//title, description, date, user

export const createDocumentSchema = z.object({
  title: z.string({
    required_error: "Title is require",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  date: z.string().datetime().optional()
});
