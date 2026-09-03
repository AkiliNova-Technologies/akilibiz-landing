import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { StoryAndCTA } from "@/components/marketing/story-and-cta";
import { Button } from "@/components/ui/button";
import {
  solutions,
  getSolution,
  getAllSolutionSlugs,
} from "@/lib/solutions-data";

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const solution = getSolution(slug);
    if (!solution) return { title: "Solution not found" };
    return {
      title: solution.title,
      description: solution.shortDescription,
    };
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const otherSolutions = solutions.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src={solution.image}
          alt={solution.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/25" />

        <MarketingWideContainer className="relative z-10 flex min-h-[360px] items-center">
          <div className="max-w-3xl text-white">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/30">
                  /
                </li>
                <li aria-current="page" className="text-white/80">
                  {solution.title}
                </li>
              </ol>
            </nav>

            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {solution.heroHeading}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              {solution.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-brand-600 px-5 text-sm font-semibold hover:bg-brand-500">
                <Link href="/contact">
                  Book a Demo
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
          </div>
        </MarketingWideContainer>
      </section>

      {/* Introduction */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <div className="max-w-5xl space-y-6">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Introduction
            </h2>
            <p className="text-md leading-relaxed text-ink-600 sm:text-lg">
              {solution.introDescription}
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      {/* Benefits */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <MarketingWideContainer>
          <div className="mb-12">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Built for the work your business does every day.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {solution.benefits.map((benefit, index) => (
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

      {/* Workflow */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <MarketingWideContainer>
          <div className="mb-12">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A simple path from setup to daily use.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solution.workflow.map((step) => (
              <article
                key={step.step}
                className="flex min-h-[240px] flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)] transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-700">
                  {step.step}
                </span>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink-900">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </MarketingWideContainer>
      </section>

      {/* Key features */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <MarketingWideContainer>
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] bg-[#0b1722] text-white">
            <Image
              src="/images/marketing/akilibiz-boutique-owner.jpg"
              alt="A business owner using AkiliBiz to manage her shop"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover object-[68%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/95 via-48% to-[#0b1722]/15" />
            <div className="relative flex min-h-[480px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Everything you need for {solution.title.toLowerCase()}.
                </h2>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {solution.keyFeatures.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-full bg-white/[0.04] p-2 pr-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100 ">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MarketingWideContainer>
      </section>

      {/* CTA */}
      <StoryAndCTA
        layout="reversed"
        stories={[
          { text: `Whether you run a ${solution.title.toLowerCase()} or another type of business, AkiliBiz adapts to the way your operations actually work.` },
          { text: "Start with the features that matter most to your daily workflow, then expand as your business grows and your needs change." },
          { text: "Talk to us about how AkiliBiz fits your specific business we will help you find the right way to get started." },
        ]}
        storyHeading={solution.closingHeading}
        storyEyebrow={solution.title}
        title={solution.closingHeading}
        description={solution.closingDescription}
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
        imageSrc="/images/marketing/akilibiz-boutique-owner.jpg"
      />

      {/* Other solutions */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <MarketingWideContainer>
          <div className="mb-10">
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
              Explore how AkiliBiz supports other businesses.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {otherSolutions.map((other) => (
              <Link
                key={other.slug}
                href={`/solutions/${other.slug}`}
                className="group flex min-h-[200px] flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-38px_rgba(16,34,53,.35)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900">
                  {other.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {other.shortDescription}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold text-ink-800 transition-transform group-hover:translate-x-0.5">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </MarketingWideContainer>
      </section>
    </main>
  );
}
