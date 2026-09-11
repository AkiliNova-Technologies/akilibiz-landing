"use client";

import * as React from "react";
import { PricingCard } from "@/components/marketing/pricing-card";
import { type BillingInterval, pricingPlans } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

const intervals: Array<{ value: BillingInterval; label: string }> = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Yearly" },
];

export function PricingPlans() {
  const [billingInterval, setBillingInterval] =
    React.useState<BillingInterval>("monthly");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div
          role="group"
          aria-label="Billing interval"
          className="inline-flex rounded-full border border-ink-200 bg-white p-1">
          {intervals.map((interval) => {
            const selected = billingInterval === interval.value;
            return (
              <button
                key={interval.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setBillingInterval(interval.value)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                  selected
                    ? "bg-[#102235] text-white"
                    : "text-ink-600 hover:text-ink-900",
                )}>
                {interval.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            position={index + 1}
            billingInterval={billingInterval}
          />
        ))}
      </div>
    </>
  );
}
