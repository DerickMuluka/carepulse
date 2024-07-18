import { z } from "zod"

export const UserFormValidation= z.object({
    name: z.string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Username must be at most 50 characters."),
    email: z.string().email("invalid email address."),
    phone: z.string().refine((phone) => /^\+?[1-9]\d{10,15}$/.test(phone),'Invalid phone number')
  })