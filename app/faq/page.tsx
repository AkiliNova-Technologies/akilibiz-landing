import type { Metadata } from "next";
import Image from "next/image";

import { MarketingWideContainer } from "@/components/marketing/container";
import { FAQDirectory } from "@/components/marketing/faq-directory";
import { faqGroups } from "@/lib/faq-groups";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about AkiliBiz, from offline support to VAT tracking and what is planned next.",
};

export default function FAQPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-business-team.jpg"
          alt="African business owners working together at a computer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/35" />

        <MarketingWideContainer className="relative z-10 flex min-h-[340px] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Clear answers before you get started.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              What AkiliBiz can help you run today, how it works offline, and
              what is coming next.
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      {/* FAQ Directory */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 mx-auto">
        <MarketingWideContainer>
          <FAQDirectory groups={faqGroups} />
        </MarketingWideContainer>
      </section>
    </main>
  );
}
