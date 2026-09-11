import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { PricingPlans } from "@/components/marketing/pricing-plans";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AkiliBiz subscription plans for businesses digitising daily operations, growing teams, and larger multi-location operations.",
};

export default function PricingPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-hero-section.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/25" />

        <MarketingWideContainer className="relative z-10 flex min-h-[340px] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              A plan for where your business is now.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Start with the AkiliBiz tools your business needs today, try them
              free for 30 days, then choose the plan that fits as your
              operations grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-brand-600 px-5 text-sm font-semibold hover:bg-brand-500">
                <Link href="/contact?enquiry=trial">
                  Start Your Free Trial
                  <ArrowRight />
                </Link>
              </Button>

              <Button
                asChild
                variant="outlineOnDark"
                className="h-12 rounded-full px-5 text-sm">
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline">
                Talk to us about your business
              </Link>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Plans */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_0.6fr] sm:items-end">
            <div className="flex flex-col gap-4">
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Clear plans for businesses at different stages.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-ink-600 sm:justify-self-end">
                Each plan is structured around your team, daily operations, and
                level of support. We can help you choose the right fit.
              </p>
            </div>
          </div>

          <PricingPlans />
        </MarketingWideContainer>
      </section>
    </main>
  );
}
