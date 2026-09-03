import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BusinessStories,
  type StoryItem,
} from "@/components/marketing/business-stories";

export function StoryAndCTA({
  stories,
  storyHeading = "Built for Businesses That Want to Grow.",
  storyEyebrow = "Business stories",
  storyLabel,
  layout = "normal",
  eyebrow,
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  imageSrc = "/images/marketing/akilibiz-final-cta-team.jpg",
  imageAlt = "AkiliBiz team supporting growing businesses",
}: {
  stories: StoryItem[];
  storyHeading?: string;
  storyEyebrow?: string;
  storyLabel?: string;
  layout?: "normal" | "reversed";
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  const storyBlock = (
    <BusinessStories
      stories={stories}
      heading={storyHeading}
      eyebrow={storyEyebrow}
      storyLabel={storyLabel}
    />
  );

  const ctaBlock = (
    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-brand-700 p-7 text-white sm:min-h-[400px] sm:p-11">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 65vw, 100vw"
        className="object-cover object-right"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-700/90 to-brand-900/20" />

      <div className="relative flex min-h-[300px] max-w-xl flex-col justify-center sm:min-h-[320px]">
        {eyebrow ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-100">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-200" />
            {eyebrow}
          </p>
        ) : null}

        <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
          {title}
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-6 text-white/82 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            className="h-12 rounded-full bg-[#102235] px-5 text-sm font-semibold hover:bg-[#1a3352]"
          >
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>

          {secondaryLabel && secondaryHref ? (
            <Button
              asChild
              variant="outlineOnDark"
              className="h-12 rounded-full px-5 text-sm"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
      <div
        className={cn(
          "mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[0.62fr_1.38fr]",
          layout === "reversed" && "lg:grid-cols-[1.38fr_0.62fr]"
        )}
      >
        {layout === "reversed" ? (
          <>
            {ctaBlock}
            {storyBlock}
          </>
        ) : (
          <>
            {storyBlock}
            {ctaBlock}
          </>
        )}
      </div>
    </section>
  );
}
