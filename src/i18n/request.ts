import { getRequestConfig } from "next-intl/server";

export const locales = ["es", "en"] as const;

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? "en";
  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale,
  };
});
