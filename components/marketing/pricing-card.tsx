import Link from "next/link";
import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PricingPackage } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

function formatUGX(amount: number): string {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingCard({
  plan,
  position,
  className,
}: {
  plan: PricingPackage;
  position: number;
  className?: string;
}) {
  const {
    name,
    description,
    monthlyPrice,
    annualPrice,
    onboardingFee,
    usersIncluded,
    features,
    highlighted,
    supportLevel,
    ctaLabel,
    href,
  } = plan;

  return (
    <article
      className={cn(
        "relative flex min-h-[590px] flex-col rounded-[30px] border p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
        highlighted
          ? "border-[#102235] bg-[#102235] text-white shadow-[0_25px_60px_-38px_rgba(7,59,115,.7)]"
          : "border-ink-100 bg-white shadow-[0_20px_50px_-38px_rgba(16,34,53,.28)]",
        className
      )}
    >
      {highlighted ? (
        <span className="absolute right-6 top-6 rounded-full border border-brand-300/20 bg-brand-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-100">
          Most popular
        </span>
      ) : null}

      <div>
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold tabular-nums tracking-[0.08em]",
            highlighted
              ? "border border-brand-300/20 bg-brand-500/15 text-brand-100"
              : "border border-brand-200 bg-brand-50 text-brand-700"
          )}
        >
          {String(position).padStart(2, "0")}
        </span>

        <p
          className={cn(
            "mt-8 text-[10px] font-bold uppercase tracking-[0.16em]",
            highlighted ? "text-brand-300" : "text-brand-700"
          )}
        >
          {name}
        </p>

        <p
          className={cn(
            "mt-3 min-h-12 text-sm leading-6",
            highlighted ? "text-white/65" : "text-ink-500"
          )}
        >
          {description}
        </p>
      </div>

      <div className="mt-8">
        {monthlyPrice !== null ? (
          <>
            <p
              className={cn(
                "font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em]",
                highlighted ? "text-white" : "text-ink-900"
              )}
            >
              {formatUGX(monthlyPrice)}
              <span
                className={cn(
                  "ml-1 text-sm font-medium tracking-normal",
                  highlighted ? "text-white/55" : "text-ink-500"
                )}
              >
                / month
              </span>
            </p>

            {annualPrice !== null ? (
              <p
                className={cn(
                  "mt-2 text-xs",
                  highlighted ? "text-white/45" : "text-ink-400"
                )}
              >
                {formatUGX(annualPrice)}/month billed annually
              </p>
            ) : null}
          </>
        ) : (
          <>
            <p
              className={cn(
                "font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-[-0.03em]",
                highlighted ? "text-white" : "text-ink-900"
              )}
            >
              Talk to us
            </p>
            <p
              className={cn(
                "mt-2 text-xs",
                highlighted ? "text-white/45" : "text-ink-400"
              )}
            >
              A plan shaped around your operation.
            </p>
          </>
        )}
      </div>

      <div
        className={cn(
          "mt-7 rounded-2xl p-4",
          highlighted ? "bg-white/[0.055]" : "bg-surface-warm"
        )}
      >
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.13em]",
            highlighted ? "text-brand-300" : "text-ink-500"
          )}
        >
          Built for
        </p>

        <p
          className={cn(
            "mt-2 text-sm font-medium",
            highlighted ? "text-white/85" : "text-ink-800"
          )}
        >
          {usersIncluded}
        </p>

        <p
          className={cn(
            "mt-1 text-xs leading-5",
            highlighted ? "text-white/50" : "text-ink-500"
          )}
        >
          {supportLevel}
        </p>
      </div>

      <div
        className={cn(
          "mt-7 h-px",
          highlighted ? "bg-white/10" : "bg-ink-100"
        )}
      />

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature.text}
            className={cn(
              "flex items-start gap-3 text-sm leading-5",
              feature.included
                ? highlighted
                  ? "text-white/80"
                  : "text-ink-700"
                : highlighted
                  ? "text-white/30"
                  : "text-ink-400"
            )}
          >
            {feature.included ? (
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  highlighted ? "text-brand-300" : "text-teal-600"
                )}
                aria-hidden="true"
              />
            ) : (
              <X
                className="mt-0.5 h-4 w-4 shrink-0 text-ink-300"
                aria-hidden="true"
              />
            )}

            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        {onboardingFee !== null ? (
          <p
            className={cn(
              "mb-4 text-xs",
              highlighted ? "text-white/45" : "text-ink-400"
            )}
          >
            One-time setup: {formatUGX(onboardingFee)}
          </p>
        ) : null}

        <Button
          asChild
          className={cn(
            "h-12 w-full rounded-full text-sm font-semibold",
            highlighted
              ? "bg-brand-600 text-white hover:bg-brand-500"
              : "bg-[#102235] text-white hover:bg-[#1a3352]"
          )}
        >
          <Link href={href}>{ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
}