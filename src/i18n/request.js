import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  //   const locale = "en";

  const currentLocale = locale || "en";

  // load from file system
  const messages = (await import(`../../messages/${currentLocale}.json`))
    .default;

  return {
    locale: currentLocale,
    messages,
  };
});
