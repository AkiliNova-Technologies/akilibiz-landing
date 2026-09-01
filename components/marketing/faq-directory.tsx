"use client";
import * as React from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import type { FAQItem } from "@/components/marketing/faq-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const PAGE_SIZE = 5;
export function FAQDirectory({ items }: { items: FAQItem[] }) {
  const shellRef = React.useRef<HTMLDivElement>(null);
  const [page, setPage] = React.useState(0);
  const [openItem, setOpenItem] = React.useState("");
  const pageCount = Math.ceil(items.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visibleItems = items.slice(start, start + PAGE_SIZE);
  function changePage(nextPage: number) {
    setPage(nextPage);
    setOpenItem("");
    shellRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }
  return (
    <div
      ref={shellRef}
      className="grid scroll-mt-24 overflow-hidden lg:grid-cols-[minmax(290px,.82fr)_minmax(0,1.3fr)]">
      <aside className="flex min-h-[500px] flex-col bg-[#06131f] p-7 text-white sm:p-10">
        <div>
          <span
            className="block h-10 w-1 rounded-full bg-[#f6a64b]"
            aria-hidden="true"
          />
          <p className="mt-8 text-[10px] font-bold uppercase tracking-[.16em] text-[#f6a64b]">
            FAQ
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">
            Questions before you get started.
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/70">
            Clear answers about using AkiliBiz today and what is coming next.
          </p>
        </div>
        <div className="mt-auto border-t border-white/10 pt-7">
          <h3 className="font-semibold">Still need help?</h3>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Tell us about your business and we will help you find the right next
            step.
          </p>
          <Button
            asChild
            variant="outlineOnDark"
            className="mt-5 rounded-full border-white/20 bg-white text-[#06131f] hover:bg-white/90">
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>
      </aside>
      <div className="p-6 sm:p-10">
        <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-[-.03em] text-ink-900 sm:text-3xl">
          Everything business owners ask first.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink-500">
          Start with the practical details, then explore the guides when you are
          ready.
        </p>
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="mt-8 flex flex-col gap-3">
          {visibleItems.map((item, index) => {
            const overallIndex = start + index;
            const value = "faq-" + overallIndex;
            const isOpen = openItem === value;
            return (
              <AccordionItem
                key={item.question}
                value={value}
                className={cn(
                  "rounded-2xl px-0",
                  isOpen
                    ? "border-brand-200 bg-white"
                    : "border-ink-100 bg-surface-warm",
                )}>
                <AccordionTrigger className="px-5 py-4 text-sm sm:px-6 sm:text-base">
                  <span className="flex items-center gap-4">
                    <span
                      className={cn(
                        "text-xs font-bold tracking-[.14em]",
                        isOpen ? "text-[#d97316]" : "text-ink-400",
                      )}>
                      {String(overallIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-[#d97316]" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-ink-500" />
                  )}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pl-[4.75rem] text-sm leading-7 text-ink-500 sm:px-6 sm:pb-6 sm:pl-[5.25rem]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="mt-7 flex flex-col gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            Showing {start + 1}–{Math.min(start + PAGE_SIZE, items.length)} of{" "}
            {items.length} questions
          </p>
          <nav
            aria-label="FAQ pagination"
            className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => changePage(page - 1)}
              disabled={page === 0}
              aria-label="Previous FAQ page"
              className="rounded-lg border border-ink-200 px-3 py-2 text-sm disabled:opacity-40">
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => changePage(index)}
                aria-label={"Go to FAQ page " + (index + 1)}
                aria-current={page === index ? "page" : undefined}
                className={cn(
                  "min-h-9 min-w-9 rounded-lg border px-3 py-2 text-sm font-semibold",
                  page === index
                    ? "border-[#06131f] bg-[#06131f] text-white"
                    : "border-ink-200 bg-surface-warm text-ink-700",
                )}>
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => changePage(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next FAQ page"
              className="rounded-lg border border-ink-200 px-3 py-2 text-sm disabled:opacity-40">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
