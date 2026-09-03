"use client";
import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { FAQGroup } from "@/lib/faq-groups";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FAQDirectory({ groups }: { groups: FAQGroup[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [openItem, setOpenItem] = React.useState("");
  const [isPaused, setIsPaused] = React.useState(false);
  const total = groups.length;
  const active = groups[activeIndex];

  function goTo(index: number) {
    setActiveIndex(index);
    setOpenItem("");
  }

  function nextGroup() {
    setActiveIndex((i) => (i + 1) % total);
    setOpenItem("");
  }

  function prevGroup() {
    setActiveIndex((i) => (i - 1 + total) % total);
    setOpenItem("");
  }

  // Auto-advance
  React.useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
      setOpenItem("");
    }, 7000);
    return () => window.clearInterval(id);
  }, [isPaused, total]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.58fr)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left — accordion panel */}
      <div>

        <p className="mt-4 max-w-md text-sm leading-6 text-ink-500">
          {active.shortDescription}
        </p>

        {/* Accordion */}

        {/* TODO: I want this take 2 cols for large screens */}
        <div className="grid grid-col-1 lg:grid-col-2">
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="mt-8 flex flex-col gap-2.5"
        >
          {active.items.map((item) => {
            const value = `${active.slug}-${item.question}`;
            const isOpen = openItem === value;
            return (
              <AccordionItem
                key={item.question}
                value={value}
                className={cn(
                  "rounded-2xl border-0 px-0",
                  isOpen
                    ? "bg-white shadow-[0_20px_50px_-38px_rgba(16,34,53,.22)]"
                    : "bg-surface-warm"
                )}
              >
                <AccordionTrigger className="px-5 py-4 text-sm sm:px-6 sm:text-base">
                  <span className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "text-[10px] font-bold tracking-[.14em]",
                        isOpen ? "text-brand-700" : "text-ink-400"
                      )}
                    >
                      {String(active.items.indexOf(item) + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm leading-7 text-ink-500 sm:px-6 sm:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        </div>
      </div>

      {/* Right — navigation panel */}
      <div className="flex flex-col justify-between rounded-[30px] bg-[#06131f] p-8 text-white sm:p-10">
        <div>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-semibold leading-tight tracking-[-.04em]">
            Questions before you get started.
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/65">
            Clear answers about using AkiliBiz today and what is coming next.
          </p>
        </div>

        {/* Group tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {groups.map((group, i) => (
            <button
              key={group.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-pressed={i === activeIndex}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200",
                i === activeIndex
                  ? "bg-brand-600 text-white"
                  : "bg-white/[0.06] text-white/55 hover:bg-white/[0.1] hover:text-white/80"
              )}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Prev / Next controls */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prevGroup}
            aria-label="Previous question group"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:border-brand-400/40 hover:bg-brand-600 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {groups.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-6 bg-brand-500"
                    : "w-2 bg-white/20"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextGroup}
            aria-label="Next question group"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:border-brand-400/40 hover:bg-brand-600 hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 border-t border-white/10 pt-7">
          <h3 className="text-sm font-semibold">Still need help?</h3>
          <p className="mt-2 text-sm leading-6 text-white/55">
            Tell us about your business and we will help you find the right next
            step.
          </p>
          <Button
            asChild
            variant="outlineOnDark"
            className="mt-5 rounded-full border-white/20 bg-white text-[#06131f] hover:bg-white/90"
          >
            <Link href="/contact">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
