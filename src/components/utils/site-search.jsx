"use client";

import * as Popover from "@radix-ui/react-popover";
import Fuse from "fuse.js";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useLocale } from "next-intl";
import en from "../../../messages/en.json";
import es from "../../../messages/es.json";
import { flattenMessages } from "@/lib/utils";

const messages = { en, es };

export default function SiteSearch() {
  const locale = useLocale();
  const translations = messages[locale] || messages.en;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const data = useMemo(() => flattenMessages(translations), [locale]);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["text"],
        includeMatches: true,
        threshold: 0.4,
        distance: 100, // allow distant matches
        minMatchCharLength: 2,
        ignoreLocation: true, // important for substring-like matching
        isCaseSensitive: false,
        useExtendedSearch: true,
      }),
    [data]
  );

  const handleSearch = (value) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const found = fuse.search(`'${value}`);
    setResults(found);
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-accent/30 text-foreground font-semibold rounded-sm"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:opacity-80 transition-opacity"
        >
          <Search className="h-4 w-4" />
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          className="
            w-[90vw] sm:w-[90vw] lg:w-[50vw]
            max-w-[700px]
            bg-popover text-popover-foreground
            shadow-lg rounded-lg p-3 z-[9999]
          "
        >
          <input
            type="text"
            placeholder={locale === "es" ? "Buscar..." : "Search..."}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="
              w-full border border-input rounded-md px-3 py-2 text-sm
              bg-background focus:outline-none focus:ring-2 focus:ring-ring mb-2
            "
          />

          <div className="max-h-64 overflow-y-auto space-y-1">
            {results.length === 0 && query && (
              <p className="text-sm text-muted-foreground px-1">
                {locale === "es"
                  ? "No se encontraron resultados"
                  : "No results found"}
              </p>
            )}

            {results.map(({ item }, i) => (
              <div
                key={i}
                className="px-2 py-2 rounded-md hover:bg-muted transition-colors"
              >
                <p className="text-sm leading-tight">
                  {highlightText(item.text, query)}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {item.key}
                </p>
              </div>
            ))}
          </div>

          <Popover.Arrow className="fill-popover" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
