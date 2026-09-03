"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { FAQGroup } from "@/lib/faq-groups";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FAQDirectoryProps = {
  groups: FAQGroup[];
};

export function FAQDirectory({ groups }: FAQDirectoryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [openItem, setOpenItem] = React.useState("");
  const [isPaused, setIsPaused] = React.useState(false);

  const total = groups.length;
  const active = groups[activeIndex];

  function nextGroup() {
    setActiveIndex((index) => (index + 1) % total);
    setOpenItem("");
  }

  function prevGroup() {
    setActiveIndex((index) => (index - 1 + total) % total);
    setOpenItem("");
  }

  React.useEffect(() => {
    if (isPaused || total <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % total);
      setOpenItem("");
    }, 8000);

    return () => window.clearInterval(id);
  }, [isPaused, total]);

  if (!active) {
    return null;
  }

  return (
    <div
      className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.72fr)] xl:gap-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      {/* FAQ content */}
      <section className="min-w-0">
        {/* Active category heading */}
        <div className="flex flex-col gap-5 border-b border-ink-900/[0.08] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-[-0.035em] text-ink-900 sm:text-3xl">
              {active.label}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-ink-500 sm:text-[15px]">
              {active.shortDescription}
            </p>
          </div>
        </div>

        {/* Questions */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="mt-7 grid gap-3 xl:grid-cols-2 xl:items-start">
          {active.items.map((item, index) => {
            const value = `${active.slug}-${index}`;
            const isOpen = openItem === value;

            return (
              <AccordionItem
                key={item.question}
                value={value}
                className={cn(
                  "group overflow-hidden border-none transition-[background-color,border-color] duration-200",
                  isOpen
                    ? "bg-white rounded-[22px]"
                    : "bg-surface-warm hover:bg-white",
                )}>
                <AccordionTrigger className="gap-4 px-5 py-5 text-left hover:no-underline sm:px-6">
                  <span className="flex min-w-0 flex-1 items-start gap-4">
                    <span
                      className={cn(
                        "mt-0.5 flex h-7 min-w-7 items-center justify-center rounded-full text-[10px] font-bold tracking-[0.08em] transition-colors",
                        isOpen
                          ? "bg-brand-600 text-white"
                          : "bg-white text-ink-400 group-hover:text-brand-700",
                      )}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "pr-2 text-sm font-semibold leading-6 transition-colors sm:text-[15px]",
                        isOpen
                          ? "text-ink-900"
                          : "text-ink-700 group-hover:text-ink-900",
                      )}>
                      {item.question}
                    </span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="ml-11 border-t border-ink-900/[0.06] pt-4">
                    <p className="text-sm leading-7 text-ink-500">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Previous / next */}
        <div className="flex items-center justify-between gap-5 py-6">
          <button
            type="button"
            onClick={prevGroup}
            aria-label="Previous FAQ category"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-transparent text-brand-900 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={nextGroup}
            aria-label="Next FAQ category"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-transparent text-brand-900 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Navigation / support card */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[30px] bg-[#06131f] text-white">
          {/* Card heading */}
          <div className="px-7 pb-7 pt-8 sm:px-8 sm:pt-9">
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-sora)] text-[28px] font-semibold leading-[1.15] tracking-[-0.045em] sm:text-3xl">
              Questions before you get started?
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Explore answers about AkiliBiz Desktop, payments, security,
              pricing and the wider AkiliBiz ecosystem.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white/[0.025] px-7 py-7 sm:px-8">
            <p className="text-sm font-semibold text-white">Still need help?</p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
              Tell us what you are trying to do and we will point you in the
              right direction.
            </p>

            <Button
              asChild
              className="mt-5 h-11 rounded-full bg-white px-5 text-[#06131f] hover:bg-white/90">
              <Link href="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
