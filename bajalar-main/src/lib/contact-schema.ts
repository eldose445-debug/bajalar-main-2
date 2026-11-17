import { z } from "zod";

export const SERVICE_OPTIONS = ["web", "ai", "shop", "digital", "other"] as const;

type ContactErrors = { name: string; phone: string; service: string; message: string };

/** Phone: digits, spaces, +, -, () allowed; must contain 10–15 digits. */
export function isValidPhone(value: string) {
  if (!/^[+\d\s()-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function makeContactSchema(errors: ContactErrors) {
  return z.object({
    name: z.string().trim().min(2, errors.name).max(100, errors.name),
    phone: z.string().trim().refine(isValidPhone, errors.phone),
    service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: errors.service }) }),
    message: z.string().trim().max(1000, errors.message),
  });
}
