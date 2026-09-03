import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { StoryAndCTA } from "@/components/marketing/story-and-cta";
import { Button } from "@/components/ui/button";
import { getProduct, getAllProductSlugs } from "@/lib/products-data";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = getProduct(slug);
    if (!product) return { title: "Product not found" };
    return {
      title: product.name,
      description: product.shortDescription,
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

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
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-white/80">
                  {product.name}
                </li>
              </ol>
            </nav>

            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {product.heroHeading}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              {product.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-brand-600 px-5 text-sm font-semibold hover:bg-brand-500">
                <Link href={product.ctaHref}>
                  {product.ctaLabel}
                  <ArrowRight />
                </Link>
              </Button>
              {product.secondaryCtaLabel && product.secondaryCtaHref && (
                <Button
                  asChild
                  variant="outlineOnDark"
                  className="h-12 rounded-full px-5 text-sm">
                  <Link href={product.secondaryCtaHref}>
                    {product.secondaryCtaLabel}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Introduction */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="max-w-4xl space-y-6">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Introduction
            </h2>
            <p className="text-md leading-relaxed text-ink-600 sm:text-lg">
              {product.introDescription}
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Key benefits */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <MarketingWideContainer>
          <div className="mb-12">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Why {product.name} matters for your business.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.keyBenefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="flex min-h-[220px] flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-500">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </MarketingWideContainer>
      </section>

      {/* Capabilities */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <MarketingWideContainer>
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] bg-[#0b1722] text-white">
            <Image
              src="/images/marketing/akilibiz-boutique-owner.png"
              alt="A business owner using AkiliBiz to manage her shop"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover object-[68%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/95 via-48% to-[#0b1722]/15" />

            <div className="relative flex min-h-[480px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  What {product.name} will support.
                </h2>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {product.capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 rounded-full bg-white/[0.04] p-2 pr-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100 ">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-white/80">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Relationship note */}
      <section className="px-4 pb-8 sm:px-6 sm:pb-8 lg:px-8">
        <MarketingWideContainer>
          <div className="max-w-5xl">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
              Not a standalone product. A connected part of AkiliBiz.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              {product.relationshipNote}
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <StoryAndCTA
        layout="reversed"
        stories={[
          { text: `${product.name} is part of the AkiliBiz ecosystem — designed to work with Desktop, Web, and Marketplace as one connected platform.` },
          { text: "Whether you are managing a single shop or growing across locations, each product in the ecosystem serves a specific part of your operations." },
          { text: product.status === "coming-soon" ? "This product is currently in development. Get in touch to learn more or be notified when it becomes available." : `Start with ${product.name} today and expand into the full ecosystem as your business grows.` },
        ]}
        storyHeading="Part of something bigger."
        storyEyebrow="The AkiliBiz ecosystem"
        title={
          product.status === "coming-soon"
            ? "Be among the first to know when this is ready."
            : "Ready to get started?"
        }
        description={
          product.status === "coming-soon"
            ? `${product.name} is currently in development. Reach out to learn more or get notified when it becomes available.`
            : `Download AkiliBiz Desktop or talk to us about getting set up with ${product.name}.`
        }
        primaryLabel={product.ctaLabel}
        primaryHref={product.ctaHref}
        secondaryLabel={product.secondaryCtaLabel}
        secondaryHref={product.secondaryCtaHref}
      />
    </main>
  );
}
