import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import config from "../../../next-intl.config";
import { Toaster } from "@/components/ui/toaster";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!config.locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
      <Toaster />
    </NextIntlClientProvider>
  );
}
