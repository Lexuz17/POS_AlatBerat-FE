import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    // API & Backend
    NEXT_PUBLIC_API_URL: z.string().url(),

    // Auth Related

    // App Configuration
    NEXT_PUBLIC_APP_NAME: z.string().default("POS Alat Berat"),
    NEXT_PUBLIC_COMPANY_NAME: z.string(),
    NEXT_PUBLIC_CURRENCY: z.string().default("IDR"),
    NEXT_PUBLIC_TIMEZONE: z.string().default("Asia/Jakarta"),

    // Report & Export Settings
    NEXT_PUBLIC_REPORT_FORMATS: z.array(z.enum(['PDF', 'EXCEL', 'CSV'])).default(['PDF']),
    NEXT_PUBLIC_DEFAULT_DATE_FORMAT: z.string().default("DD/MM/YYYY"),

    // UI/UX Settings
    NEXT_PUBLIC_DEFAULT_THEME: z.enum(["light", "dark"]).default("light"),
    NEXT_PUBLIC_DEFAULT_LANGUAGE: z.string().default("id"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_CURRENCY: process.env.NEXT_PUBLIC_CURRENCY,
    NEXT_PUBLIC_TIMEZONE: process.env.NEXT_PUBLIC_TIMEZONE,
    NEXT_PUBLIC_REPORT_FORMATS: process.env.NEXT_PUBLIC_REPORT_FORMATS,
    NEXT_PUBLIC_DEFAULT_DATE_FORMAT: process.env.NEXT_PUBLIC_DEFAULT_DATE_FORMAT,
    NEXT_PUBLIC_DEFAULT_THEME: process.env.NEXT_PUBLIC_DEFAULT_THEME,
    NEXT_PUBLIC_DEFAULT_LANGUAGE: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
  },
});
