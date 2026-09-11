import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("selected plan and billing context are carried into the enquiry email", async () => {
  const [fields, template] = await Promise.all([
    readFile(new URL("../app/contact/query-context.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/templates/akilibiz-contact-email-template.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(fields, /name="plan"/);
  assert.match(fields, /name="billing"/);
  assert.match(fields, /name="enquiry"/);
  assert.match(template, /Pricing interest:/);
  assert.match(template, /30-Day Free Trial/);
});
