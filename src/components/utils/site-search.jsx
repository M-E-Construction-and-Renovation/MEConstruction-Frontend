"use client";

import * as Popover from "@radix-ui/react-popover";
import Fuse from "fuse.js";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import en from "../../../messages/en.json";
import es from "../../../messages/es.json";
import { flattenMessages } from "@/lib/utils";
import Link from "next/link";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";

// Long enough that a settled query is reported once, instead of once per keystroke.
const SEARCH_TRACK_DELAY_MS = 900;

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Section ids in the message files already carry their "#", so these join
// directly. Concatenating with a "/" produced "//#hero" for homepage results —
// a protocol-relative URL that sent the visitor off the site entirely.
const resultHref = (item) =>
  item.path ? `${item.path}${item.id ?? ""}` : null;

const messages = { en, es };

export default function SiteSearch() {
  // Detect locale from current pathname, e.g. /en/about or /es/gallery
  const pathname = usePathname();
  const locale =
    pathname?.split("/")[1] === "es"
      ? "es"
      : pathname?.split("/")[1] === "en"
      ? "en"
      : "en"; // fallback to English

  const translations = messages[locale] || messages.en;

  const [open, setOpen] = useState(false);
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

  // Reported after typing settles, so a query counts once and zero-result
  // searches are visible as gaps in the site's content.
  const lastTrackedQuery = useRef("");

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2 || term === lastTrackedQuery.current) return;

    const timer = setTimeout(() => {
      lastTrackedQuery.current = term;
      trackEvent(GA_EVENTS.SITE_SEARCH, {
        search_term: term,
        result_count: results.length,
      });
    }, SEARCH_TRACK_DELAY_MS);

    return () => clearTimeout(timer);
  }, [query, results.length]);

  const highlightText = (text, query) => {
    const term = query.trim();
    if (!term) return text;

    // The search box feeds straight into a RegExp, so anything the user types
    // has to be escaped first: a single "(" used to throw and take the whole
    // popover down with it.
    const pattern = new RegExp(`(${escapeRegExp(term)})`, "i");
    const lowerTerm = term.toLowerCase();

    // Compared by value rather than with regex.test(), which is stateful under
    // the /g flag and was skipping every second match.
    return text.split(pattern).map((part, i) =>
      part.toLowerCase() === lowerTerm ? (
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
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={locale === "es" ? "Buscar en el sitio" : "Search the site"}
          className="hover:opacity-80 transition-opacity"
        >
          <Search aria-hidden="true" className="h-4 w-4" />
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

            {results.map(({ item }, i) => {
              const href = resultHref(item);
              if (!href) return null;

              return (
                <Link
                  key={i}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded-md hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <p className="text-sm leading-tight">
                    {highlightText(item.text, query)}
                  </p>
                </Link>
              );
            })}
          </div>

          <Popover.Arrow className="fill-popover" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
