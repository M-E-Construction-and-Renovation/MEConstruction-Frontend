"use client";

import * as Popover from "@radix-ui/react-popover";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "en", label: "United States | English" },
    { code: "es", label: "United States | Español" },
  ];

  const handleChange = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";

    startTransition(() => {
      router.push(newPath);
    });
  };

  const currentLabel = locales.find((l) => l.code === currentLocale)?.label;

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button className="hidden lg:flex items-center gap-2 hover:opacity-80 bg-transparent cursor-pointer text-sm font-medium">
          <Globe className="h-4 w-4" />
          {currentLabel}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="center"
          className="w-auto bg-popover text-popover-foreground dark:bg-gray-800 dark:text-gray-100 rounded shadow-md py-1 z-51"
        >
          {locales
            .filter((l) => l.code !== currentLocale)
            .map((locale) => (
              <div
                key={locale.code}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm"
                onClick={() => handleChange(locale.code)}
              >
                {locale.label}
              </div>
            ))}
          <Popover.Arrow className="fill-popover dark:fill-gray-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
