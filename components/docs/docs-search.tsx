"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { docsGuides } from "@/lib/docs-data";
import { Input } from "../ui/input";
import { Kbd } from "../ui/kbd";

export function DocsSearch() {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const searchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const focus = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", focus);
    return () => window.removeEventListener("keydown", focus);
  }, []);

  React.useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const results = query.trim()
    ? docsGuides
        .filter((guide) =>
          `${guide.title} ${guide.summary} ${guide.purpose} ${guide.steps.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .slice(0, 6)
    : [];

  const hasQuery = query.trim().length > 0;

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45"
        aria-hidden="true"
      />
      <Input
        ref={inputRef}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        placeholder="Search documentation"
        aria-label="Search guides"
        aria-expanded={isOpen && hasQuery}
        aria-controls="docs-search-results"
        className="h-9 w-full rounded-lg border-white/10 bg-white/8 py-2 pl-10 pr-14 text-sm text-white placeholder:text-white/40 focus-visible:border-white/30 focus-visible:bg-white/12 focus-visible:ring-white/15"
      />
      <Kbd className="pointer-events-none absolute right-3 top-1/2 h-5 -translate-y-1/2 rounded bg-white/8 px-1 text-[10px] text-white/45">
        ⌘K
      </Kbd>
      {isOpen && hasQuery && (
        <div
          id="docs-search-results"
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-xl border border-ink-200 bg-white p-1.5 shadow-2xl shadow-black/20"
        >
          {results.length ? (
            <>
              {results.map((guide) => (
                <Link
                  key={guide.slug}
                  href={"/docs/" + guide.slug}
                  role="option"
                  onClick={() => {
                    setQuery("");
                    setIsOpen(false);
                  }}
                  className="group flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-brand-100/50 focus:bg-ink-50 focus:outline-none"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink-100 text-ink-500 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
                    <Search className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink-900">
                      {guide.title}
                    </span>
                    <span className="mt-0.5 line-clamp-1 block text-xs leading-5 text-ink-500">
                      {guide.summary}
                    </span>
                    <span className="mt-1 block text-[11px] font-medium text-ink-400">
                      {guide.section}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-ink-600" aria-hidden="true" />
                </Link>
              ))}
            </>
          ) : (
            <div className="px-3 py-5 text-center">
              <p className="text-sm font-medium text-ink-700">No matching guides</p>
              <p className="mt-1 text-xs text-ink-500">Try a different search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
