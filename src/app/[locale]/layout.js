import { Toaster } from "@/components/ui/toaster";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    <div lang={locale}>
      {children} <Toaster />
    </div>
  );
}
