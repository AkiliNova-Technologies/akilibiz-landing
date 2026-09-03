import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { StoryAndCTA } from "@/components/marketing/story-and-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the AkiliBiz ecosystem — Business Desktop, Business Web, Marketplace, and the connected platform for growing African businesses.",
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-hero-section.png"
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
              One ecosystem. Every part of your business.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              AkiliBiz is more than a single application. It is a connected
              platform designed to support your business from the counter to the
              cloud with Desktop, Web, Marketplace, and more working together as
              one system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-brand-600 px-5 text-sm font-semibold hover:bg-brand-500">
                <Link href="/download">
                  Download Desktop
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outlineOnDark"
                className="h-12 rounded-full px-5 text-sm">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* The AkiliBiz ecosystem */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="grid gap-8 sm:grid-cols-[1fr_0.6fr] sm:items-end">
            <div className="space-y-6">
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Not just software. A connected business platform.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-ink-600 sm:justify-self-end">
                Every AkiliBiz product is designed to work together. A sale at
                the counter, an order online, a stock update on the phone they
                all feed into the same business records.
              </p>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Product cards */}
      <section className="px-4 pb-8 sm:px-6 sm:pb-8 lg:px-8">
        <MarketingWideContainer>
          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group relative flex flex-col rounded-[30px] border border-ink-100 bg-white p-8 shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-38px_rgba(16,34,53,.35)] sm:p-10 overflow-hidden">
                  {product.isFeatured && (
                    <div>
                      <Image
                        src="/images/marketing/akilibiz-boutique-owner.png"
                        alt="A business owner using AkiliBiz to manage her shop"
                        fill
                        sizes="(min-width: 1024px) 90vw, 100vw"
                        className="object-cover object-[68%_center]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/95 via-48% to-[#0b1722]/15" />
                    </div>
                  )}
                  <div className="relative flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className={cn("flex h-15 w-15 shrink-0 items-center justify-center rounded-full  text-xs font-semibold tabular-nums tracking-[0.08em]  transition-colors", product.isFeatured ? "text-brand-100 bg-brand-500/15" : "text-brand-800 border border-brand-200 bg-brand-50")}>
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <Badge
                        variant={
                          product.status === "available" ? "available" : "soon"
                        }>
                        {product.statusLabel}
                      </Badge>
                    </div>

                    <h2
                      className={cn(
                        "mt-8 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight  sm:text-3xl",
                        product.isFeatured ? "text-white" : "text-ink-900",
                      )}>
                      {product.name}
                    </h2>

                    <p
                      className={cn(
                        "mt-3 text-sm leading-6",
                        product.isFeatured ? "text-white/65" : "text-ink-500",
                      )}>
                      {product.shortDescription}
                    </p>

                    <div className="mt-8 grid grid-cols-1 lg: grid-cols-2 gap-2">
                      {product.capabilities.slice(0, 4).map((cap, index) => (
                        <div
                          key={cap}
                          className={cn(
                            "flex items-center gap-3 rounded-full bg-white/[0.04] backdrop-blur-md pl-1.5 pr-4 py-1.5 ",
                            product.isFeatured ? "" : "border border-ink-100",
                          )}>
                          <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full  text-xs font-semibold tabular-nums tracking-[0.08em] bg-brand-500/15", product.isFeatured ? "text-brand-100" : "text-ink-800")}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={cn("text-xs font-medium leading-5", product.isFeatured ? "text-white/85" : "text-ink-600")}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>

                    <span className={cn("mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold  transition-transform group-hover:translate-x-0.5", product.isFeatured ? "text-white/85" : "text-ink-800")}>
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </MarketingWideContainer>
      </section>

      {/* How the products connect */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] bg-[#0b1722] text-white">
            <div className="relative flex min-h-[480px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  One platform. Every part of the business connected.
                </h2>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: "01",
                    label: "Manage your business",
                    detail:
                      "Use AkiliBiz Business Desktop or Web for daily operations.",
                  },
                  {
                    step: "02",
                    label: "Sell to customers online",
                    detail:
                      "Publish products to Marketplace and let customers discover and order.",
                  },
                  {
                    step: "03",
                    label: "Accept payments",
                    detail:
                      "Process payments through AkiliBiz Payments infrastructure.",
                  },
                  {
                    step: "04",
                    label: "Stay connected",
                    detail:
                      "Reports, inventory, and sales all update across the ecosystem.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl bg-white/[0.045] p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100">
                      {item.step}
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      <StoryAndCTA
        layout="reversed"
        stories={[
          { text: "Desktop handles your daily sales and stock. Web lets you check in from anywhere. Marketplace brings customers to your products." },
          { text: "A shop owner in Entebbe started with Desktop for receipts and inventory, then added the web dashboard to monitor sales from home." },
          { text: "As the ecosystem grows, your data stays connected — one business platform, not a collection of separate tools." },
        ]}
        storyHeading="One platform, many ways to work."
        storyEyebrow="The AkiliBiz ecosystem"
        title="Ready to bring your business operations together?"
        description="Start with AkiliBiz Desktop today, and explore the full ecosystem as it grows."
        primaryLabel="Download Desktop"
        primaryHref="/download"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
        imageSrc="/images/marketing/akilibiz-hero-section.png"
      />
    </main>
  );
}
