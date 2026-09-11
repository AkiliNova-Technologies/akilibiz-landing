"use client";

import { useSearchParams } from "next/navigation";

function useQueryContext() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";
  const billing = searchParams.get("billing") ?? "";
  const enquiry = searchParams.get("enquiry") ?? "";
  const label = enquiry === "trial"
    ? "30-Day Free Trial"
    : plan
      ? `${plan.charAt(0).toUpperCase()}${plan.slice(1)} plan${billing ? ` · ${billing === "annual" ? "Yearly" : "Monthly"}` : ""}`
      : "";

  return { plan, billing, enquiry, label };
}

export function ContactEnquiryLabel() {
  const { label } = useQueryContext();
  return label ? <p className="mt-3 text-sm font-medium text-brand-700">You&apos;re enquiring about: {label}</p> : null;
}

export function ContactQueryFields() {
  const { plan, billing, enquiry } = useQueryContext();
  return <><input type="hidden" name="plan" value={plan} /><input type="hidden" name="billing" value={billing} /><input type="hidden" name="enquiry" value={enquiry} /></>;
}
