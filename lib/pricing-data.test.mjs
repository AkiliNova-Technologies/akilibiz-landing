import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const { getAnnualSaving, pricingPlans } = await import("./pricing-data.ts");

test("the approved four paid pricing plans and values are represented", () => {
  assert.deepEqual(pricingPlans.map((plan) => plan.id), ["starter", "growth", "pro", "enterprise"]);
  assert.deepEqual(pricingPlans.filter((plan) => plan.highlighted).map((plan) => plan.id), ["growth"]);

  const values = Object.fromEntries(pricingPlans.map((plan) => [plan.id, plan.pricing]));
  assert.equal(values.starter.monthly.amount, 30000);
  assert.equal(values.starter.annual.amount, 300000);
  assert.equal(values.growth.monthly.amount, 55000);
  assert.equal(values.growth.annual.amount, 550000);
  assert.equal(values.pro.monthly.amount, 150000);
  assert.equal(values.pro.annual.amount, 1500000);
  assert.equal(values.enterprise.monthly.amount, 250000);
  assert.equal(values.enterprise.monthly.prefix, "From");
  assert.equal(values.enterprise.annual.custom, true);
  assert.equal(values.enterprise.annual.amount, undefined);
});

test("yearly savings are derived from the stored price values", () => {
  assert.equal(getAnnualSaving(pricingPlans[0]), 60000);
  assert.equal(getAnnualSaving(pricingPlans[1]), 110000);
  assert.equal(getAnnualSaving(pricingPlans[2]), 300000);
  assert.equal(getAnnualSaving(pricingPlans[3]), null);
});

test("pricing UI provides accessible billing controls and required states", async () => {
  const [plans, card, page] = await Promise.all([
    readFile(new URL("../components/marketing/pricing-plans.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/marketing/pricing-card.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/pricing/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(plans, /aria-label="Billing interval"/);
  assert.match(plans, /aria-pressed=\{selected\}/);
  assert.doesNotMatch(plans, /Try AkiliBiz free for 30 days/);
  assert.match(page, /Start Your Free Trial/);
  assert.match(page, /\/contact\?enquiry=trial/);
  assert.match(card, /Custom annual pricing/);
  assert.match(card, /Most Popular/);
  assert.match(card, /Save \{formatUGX\(annualSaving\)\}\/year/);
  assert.match(card, /billingInterval === "monthly" \? "month" : "year"/);
});
