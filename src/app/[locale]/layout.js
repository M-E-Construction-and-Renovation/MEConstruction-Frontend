import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
// import { locales } from "../../../next-intl.config.js";
import config from "../../../next-intl.config";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  console.log(locale);

  if (!config.locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
