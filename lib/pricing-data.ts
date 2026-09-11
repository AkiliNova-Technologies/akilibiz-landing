/** Marketing-site pricing only. Subscription enforcement lives in the platform. */

export type BillingInterval = "monthly" | "annual";
export type PricingPlanId = "starter" | "growth" | "pro" | "enterprise";
export type PricingFeatureAvailability = "included" | "not-included" | "coming-soon";

export interface PricingAmount {
  amount?: number;
  prefix?: string;
  custom?: boolean;
}

export interface PricingFeature {
  text: string;
  availability: PricingFeatureAvailability;
}

export interface PricingPlan {
  id: PricingPlanId;
  name: string;
  tagline: string;
  pricing: { monthly: PricingAmount; annual: PricingAmount };
  highlighted?: boolean;
  contactSales?: boolean;
  teamGuidance: string;
  supportLevel: string;
  onboarding: { type: "self-service" | "included" | "quoted" };
  features: PricingFeature[];
  cta: { label: string; href: string };
}

export function getAnnualSaving(plan: PricingPlan): number | null {
  const monthly = plan.pricing.monthly.amount;
  const annual = plan.pricing.annual.amount;
  if (typeof monthly !== "number" || typeof annual !== "number" || monthly < 0 || annual < 0) return null;
  return Math.max(0, monthly * 12 - annual);
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter", name: "Starter", tagline: "Run your business",
    pricing: { monthly: { amount: 30000 }, annual: { amount: 300000 } },
    teamGuidance: "Best for small teams", supportLevel: "Guided support", onboarding: { type: "self-service" },
    features: [
      { text: "Sales & POS", availability: "included" }, { text: "Products, categories & inventory", availability: "included" },
      { text: "Stock adjustments & history", availability: "included" }, { text: "Customer & supplier records", availability: "included" },
      { text: "Receipts & sales history", availability: "included" }, { text: "Basic finance, reports & VAT recording", availability: "included" },
      { text: "Backup & recovery", availability: "included" }, { text: "Staff access, basic permissions & notifications", availability: "included" },
      { text: "Limited import & export", availability: "included" },
      { text: "Offline-first desktop operation", availability: "included" },
    ], cta: { label: "Get Started", href: "/contact" },
  },
  {
    id: "growth", name: "Growth", tagline: "Control and grow your business",
    pricing: { monthly: { amount: 55000 }, annual: { amount: 550000 } }, highlighted: true,
    teamGuidance: "For growing teams", supportLevel: "Priority guidance", onboarding: { type: "included" },
    features: [
      { text: "Everything in Starter", availability: "included" }, { text: "More staff access, roles & permissions", availability: "included" },
      { text: "Stronger inventory & low-stock visibility", availability: "included" }, { text: "Fuller import & export workflows", availability: "included" },
      { text: "Enhanced sales, finance & VAT reports", availability: "included" }, { text: "Customer & supplier visibility", availability: "included" },
      { text: "Activity & audit history", availability: "included" }, { text: "Management dashboards", availability: "included" },
    ], cta: { label: "Get Started", href: "/contact" },
  },
  {
    id: "pro", name: "Pro", tagline: "Automate and understand your business",
    pricing: { monthly: { amount: 150000 }, annual: { amount: 1500000 } },
    teamGuidance: "For larger operations", supportLevel: "Priority support", onboarding: { type: "included" },
    features: [
      { text: "Everything in Growth", availability: "included" }, { text: "Highest available reporting capabilities", availability: "included" },
      { text: "Stronger audit visibility", availability: "included" }, { text: "Support for higher operational needs", availability: "included" },
      { text: "Assisted onboarding", availability: "included" }, { text: "Tailored reporting guidance", availability: "included" },
    ], cta: { label: "Get Started", href: "/contact" },
  },
  {
    id: "enterprise", name: "Enterprise", tagline: "Manage operations at scale",
    pricing: { monthly: { amount: 250000, prefix: "From" }, annual: { custom: true } }, contactSales: true,
    teamGuidance: "Tailored to your organization", supportLevel: "Dedicated commercial support", onboarding: { type: "quoted" },
    features: [
      { text: "Everything in Pro", availability: "included" }, { text: "Tailored onboarding & implementation assistance", availability: "included" },
      { text: "Data migration assistance, where agreed", availability: "included" }, { text: "Staff training", availability: "included" },
      { text: "Priority support", availability: "included" }, { text: "Tailored operational requirements", availability: "included" }, { text: "Custom commercial discussions", availability: "included" },
    ], cta: { label: "Contact Sales", href: "/contact" },
  },
];
