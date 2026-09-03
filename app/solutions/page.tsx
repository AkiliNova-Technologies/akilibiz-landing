import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "How AkiliBiz supports retail shops, supermarkets, pharmacies, hardware stores, fashion outlets, and growing multi-user businesses.",
};

export default function SolutionsPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-boutique-owner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/25" />

        <MarketingWideContainer className="relative z-10 flex min-h-[360px] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Built for the work behind every business day.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              AkiliBiz brings the daily work of selling, stocking, purchasing,
              tracking customers, and understanding performance into one
              connected system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outlineOnDark"
                className="h-12 rounded-full px-5 text-sm"
              >
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Business types */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="grid gap-8 sm:grid-cols-[1fr_0.6fr] sm:items-end">
            <div className="space-y-6">
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                One dependable foundation. Different ways to use it.
              </h2>
            <p className="max-w-2xl text-sm leading-6 text-ink-600 sm:justify-self-end">
              Start with how your business already works. AkiliBiz helps bring
              the operational records behind it into one clear system.
            </p>
            </div>

          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ slug, title, shortDescription }, index) => (
              <Link
                key={slug}
                href={`/solutions/${slug}`}
                className="group flex min-h-[265px] flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-38px_rgba(16,34,53,.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-500">
                  {shortDescription}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold text-ink-800 transition-transform group-hover:translate-x-0.5">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </MarketingWideContainer>
      </section>

      {/* Shared foundation */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <MarketingWideContainer>
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] bg-[#0b1722] text-white">
            <Image
              src="/images/marketing/akilibiz-business-team.png"
              alt="Business owners reviewing their daily operations together"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover object-[70%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/94 via-53% to-[#0b1722]/15" />

            <div className="relative flex min-h-[520px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Your business may be different. The records behind it should
                  still connect.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                  Every solution above runs on the same operational foundation.
                  As your business grows, AkiliBiz Desktop keeps the work behind
                  your sales visible, traceable, and easier to manage.
                </p>

                <Button
                  asChild
                  variant="outlineOnDark"
                  className="mt-8 rounded-full border-white/20 bg-white/[0.04] px-5 hover:bg-white/[0.1]"
                >
                  <Link href="/features">
                    See the full feature set
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </MarketingWideContainer>
      </section>
    </main>
  );
}
