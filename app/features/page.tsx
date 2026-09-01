import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/marketing/cta-section";
import { MarketingWideContainer } from "@/components/marketing/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See how AkiliBiz handles sales, inventory, customers, suppliers, VAT, reporting, and business insights in one connected system.",
};

const sections = [
  {
    eyebrow: "Sales & POS",
    title: "Sell the way your business actually operates.",
    description:
      "Ring up sales at the counter, take credit orders for regular customers, and issue receipts without switching between separate tools.",
    points: [
      "Point-of-sale workflow built for daily, repeated use",
      "Support for cash, credit, and mixed-payment sales records",
      "Receipts and sales history tied to the same customer record",
    ],
  },
  {
    eyebrow: "Inventory & purchasing",
    title: "Know what you have, and what to reorder.",
    description:
      "Stock levels update as you sell and receive goods, so low-stock risk and product availability stay visible rather than discovered too late.",
    points: [
      "Stock movement tracked across sales, purchases, and adjustments",
      "Low-stock and reorder visibility for products that need attention",
      "Purchasing records linked to suppliers and product history",
    ],
  },
  {
    eyebrow: "Customers & suppliers",
    title: "Keep relationships and balances in one place.",
    description:
      "Customer credit, supplier purchasing, and operational history stay attached to the people and businesses you work with regularly.",
    points: [
      "Customer profiles with sales and credit history",
      "Supplier records tied to purchasing and stock received",
      "Balances that stay traceable back to individual transactions",
    ],
  },
  {
    eyebrow: "VAT & reporting",
    title: "Traceable records, not end-of-month guesswork.",
    description:
      "VAT, sales, stock, receivable, payable, and journal information are recorded as part of daily operations, so reporting reflects what actually happened.",
    points: [
      "VAT recorded against individual sales, not reconstructed later",
      "Sales, stock, receivable, and payable reports drawn from the same data",
      "Journal-level detail available for accounting foundations",
    ],
  },
  {
    eyebrow: "Business insights",
    title: "Understand what is changing, not just what happened.",
    description:
      "AkiliBiz surfaces trends, stock risk, and customer behaviour worth a closer look, based on the operational data already being recorded.",
    points: [
      "Trend visibility across sales and stock movement",
      "Flags for stock risk and slow-moving products",
      "Customer behaviour patterns drawn from real transaction history",
    ],
  },
  {
    eyebrow: "Security & accountability",
    title: "Give staff the right access, and keep a clear trail.",
    description:
      "Multiple staff members can use AkiliBiz with roles suited to their responsibilities, while activity stays traceable for accountability.",
    points: [
      "Role-based access for different staff responsibilities",
      "Multi-user support for growing teams",
      "Operational activity that stays traceable and auditable",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-business-team.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/25" />

        <MarketingWideContainer className="relative z-10 flex min-h-[360px] items-center">
          <div className="max-w-3xl text-white">

            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Practical tools for the real work of running a business.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Sales, stock, people, tax, reporting, and accountability built
              into one connected system for growing businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outlineOnDark"
                className="h-12 rounded-full px-5 text-sm"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Feature sections */}
      <div className="bg-surface-warm">
        {sections.map((section, index) => {
          const darkSection = index === sections.length - 1;
          const sectionNumber = String(index + 1).padStart(2, "0");

          return (
            <section
              key={section.eyebrow}
              className={`px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ${
                darkSection ? "bg-[#0b1722] text-white" : ""
              }`}
            >
              <MarketingWideContainer className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
                <div className="flex max-w-lg flex-col">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold tabular-nums tracking-[0.08em] ${
                      darkSection
                        ? "border border-brand-300/20 bg-brand-500/15 text-brand-100"
                        : "border border-brand-200 bg-brand-50 text-brand-700"
                    }`}
                  >
                    {sectionNumber}
                  </span>

                  <p
                    className={`mt-8 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      darkSection ? "text-brand-300" : "text-brand-700"
                    }`}
                  >
                    {section.eyebrow}
                  </p>

                  <h2
                    className={`mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl ${
                      darkSection ? "text-white" : "text-ink-900"
                    }`}
                  >
                    {section.title}
                  </h2>

                  <p
                    className={`mt-5 text-sm leading-6 sm:text-base ${
                      darkSection ? "text-white/65" : "text-ink-500"
                    }`}
                  >
                    {section.description}
                  </p>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center gap-2 text-xs font-semibold transition-transform hover:translate-x-0.5 ${
                      darkSection ? "text-brand-300" : "text-ink-800"
                    }`}
                  >
                    See it in action
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:pt-4">
                  {section.points.map((point, pointIndex) => (
                    <article
                      key={point}
                      className={`flex min-h-[220px] flex-col rounded-[30px] border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                        darkSection
                          ? "border-white/[0.08] bg-white/[0.045]"
                          : "border-ink-100 bg-white shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)]"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold tabular-nums tracking-[0.1em] ${
                          darkSection ? "text-brand-300" : "text-brand-700"
                        }`}
                      >
                        {sectionNumber}.{String(pointIndex + 1).padStart(2, "0")}
                      </span>

                      <div
                        className={`mt-5 h-px w-8 ${
                          darkSection ? "bg-white/15" : "bg-ink-200"
                        }`}
                      />

                      <p
                        className={`mt-auto text-sm font-medium leading-6 ${
                          darkSection ? "text-white/85" : "text-ink-700"
                        }`}
                      >
                        {point}
                      </p>
                    </article>
                  ))}
                </div>
              </MarketingWideContainer>
            </section>
          );
        })}
      </div>

      <CTASection
        eyebrow="See it in action"
        title="Ready to see AkiliBiz on your own operations?"
        description="Talk to us about how AkiliBiz fits your day-to-day sales, stock, and reporting needs."
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </main>
  );
}