/**
 * AkiliBiz pricing packages.
 */

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  annualSaving?: number;
  onboardingFee: number | null;
  usersIncluded: string;
  features: PricingFeature[];
  highlighted: boolean;
  supportLevel: string;
  ctaLabel: string;
  href: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For businesses beginning to digitise daily operations.",
    monthlyPrice: 25000,
    annualPrice: 20000,
    annualSaving: 60000,
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
    description:
      "For growing teams that need deeper insights and connected workflows.",
    monthlyPrice: 55000,
    annualPrice: 45000,
    annualSaving: 120000,
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
    description:
      "For larger operations preparing for multi-location, online, and tailored support.",
    monthlyPrice: 95000,
    annualPrice: 80000,
    annualSaving: 180000,
    onboardingFee: null,
    usersIncluded: "Unlimited users",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Multi-location readiness", included: true },
      { text: "Priority onboarding support", included: true },
      {
        text: "Early access to Business web and Marketplace",
        included: true,
      },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations and setup", included: true },
    ],

    highlighted: false,
    supportLevel: "Dedicated support with account manager",
    ctaLabel: "Get Started",
    href: "/contact",
  },
];
