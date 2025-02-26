import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Authentication
    JWT_SECRET: z.string().min(32),
    JWT_EXPIRATION_TIME: z.string().default("8h"),
    JWT_REFRESH_TOKEN_EXPIRES_IN: z.string().default("7d"),

    // Extenral services
    SMTP_HOST: z.string(),

    // Printer setting
    RECEIPT_PRINTER_IP: z.string().ip(),
    RECEIPT_PRINTER_PORT: z.number(),

    // Report Generation
    REPORT_TEMPLATE_PATH: z.string(),
  },
  experimental__runtimeEnv: {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
    JWT_REFRESH_TOKEN_EXPIRES_IN: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    SMTP_HOST: process.env.SMTP_HOST,
    RECEIPT_PRINTER_IP: process.env.RECEIPT_PRINTER_IP,
    RECEIPT_PRINTER_PORT: process.env.RECEIPT_PRINTER_PORT,
    REPORT_TEMPLATE_PATH: process.env.REPORT_TEMPLATE_PATH,
  },
});
