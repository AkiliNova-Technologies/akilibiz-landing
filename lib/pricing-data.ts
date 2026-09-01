/**
 * AkiliBiz pricing packages.
 *
 * 🚨 BUSINESS INPUT REQUIRED:
 * The monthlyPrice, annualPrice, and onboardingFee fields below are
 * marked with TODO comments indicating the exact fields that need
 * confirmed business figures before publication. Do not publish
 * placeholder amounts to production.
 */

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;

  /** Monthly price in UGX. null = "Contact us" */
  monthlyPrice: number | null;

  /** Annual price in UGX per month (billed annually). null = not offered or contact us */
  annualPrice: number | null;

  /** Annual saving amount in UGX, shown as badge */
  annualSaving?: number;

  /** One-time onboarding/setup fee in UGX. null = none or included */
  onboardingFee: number | null;

  /** Number of users/devices included */
  usersIncluded: string;

  /** Feature list */
  features: PricingFeature[];

  /** Whether this is the recommended/popular plan */
  highlighted: boolean;

  /** Support level description */
  supportLevel: string;

  /** CTA label */
  ctaLabel: string;

  /** CTA destination route */
  href: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For businesses beginning to digitise daily operations.",
    // TODO: BUSINESS INPUT REQUIRED — monthly subscription price in UGX
    monthlyPrice: null,
    // TODO: BUSINESS INPUT REQUIRED — annual price per month in UGX (if offered)
    annualPrice: null,
    // TODO: BUSINESS INPUT REQUIRED — one-time onboarding fee in UGX
    onboardingFee: null,
    usersIncluded: "1 user",
    features: [
      { text: "Sales & POS for a single location", included: true },
      { text: "Core inventory tracking", included: true },
      { text: "Basic VAT and sales reporting", included: true },
      { text: "Single-user access", included: true },
      { text: "Offline-first desktop operation", included: true },
      { text: "Multi-user access with roles", included: false },
      { text: "Customer & supplier management", included: false },
      { text: "Business Insights dashboards", included: false },
    ],
    highlighted: false,
    supportLevel: "Email support",
    ctaLabel: "Get Started",
    href: "/contact",
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing teams that need deeper insights and connected workflows.",
    // TODO: BUSINESS INPUT REQUIRED — monthly subscription price in UGX
    monthlyPrice: null,
    // TODO: BUSINESS INPUT REQUIRED — annual price per month in UGX (if offered)
    annualPrice: null,
    // TODO: BUSINESS INPUT REQUIRED — one-time onboarding fee in UGX
    onboardingFee: null,
    usersIncluded: "Up to 5 users",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Multi-user access with roles", included: true },
      { text: "Customer and supplier management", included: true },
      { text: "Business Insights dashboards", included: true },
      { text: "Advanced reporting and exports", included: true },
      { text: "Multi-location readiness", included: false },
      { text: "Priority onboarding support", included: false },
    ],
    highlighted: true,
    supportLevel: "Priority email & phone support",
    ctaLabel: "Get Started",
    href: "/contact",
  },
  {
    id: "business",
    name: "Business",
    description: "For larger operations preparing for multi-location, online, and tailored support.",
    // null monthlyPrice = "Contact us" — custom pricing for enterprise
    monthlyPrice: null,
    annualPrice: null,
    onboardingFee: null,
    usersIncluded: "Unlimited users",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Multi-location readiness", included: true },
      { text: "Priority onboarding support", included: true },
      { text: "Early access to Business web and Marketplace", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations and setup", included: true },
    ],
    highlighted: false,
    supportLevel: "Dedicated support with account manager",
    ctaLabel: "Talk to us",
    href: "/contact",
  },
];
