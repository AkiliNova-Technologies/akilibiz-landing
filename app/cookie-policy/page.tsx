import type { Metadata } from "next";

import { MarketingWideContainer } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How AkiliBiz uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />
        <MarketingWideContainer className="relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Last updated: September 2026
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer className="max-w-3xl">
          <div className="max-w-none text-[15px] leading-7 text-ink-600">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply information to the site owners.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. How We Use Cookies
            </h2>
            <p>
              AkiliBiz uses cookies and similar technologies for the following purposes:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Essential cookies:</strong> These are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas.
              </li>
              <li>
                <strong>Analytics cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the site.
              </li>
              <li>
                <strong>Preference cookies:</strong> These allow the website to remember choices you make, such as language or region settings.
              </li>
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. Third-Party Cookies
            </h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control these third-party cookies. We recommend reviewing the cookie policies of these third-party services for more information.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. Managing Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies, or to be notified when a cookie is being set. Please note that disabling certain cookies may affect the functionality of our website.
            </p>
            <p className="mt-3">
              Common browser cookie settings can typically be found under:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Chrome: Settings &gt; Privacy and security &gt; Cookies</li>
              <li>Firefox: Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li>Safari: Settings &gt; Privacy &gt; Cookies and website data</li>
              <li>Edge: Settings &gt; Privacy, search, and services &gt; Cookies</li>
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised &quot;Last updated&quot; date.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies, please contact us through our{" "}
              <a href="/contact" className="text-brand-700 underline underline-offset-4 hover:text-brand-800">
                contact page
              </a>
              .
            </p>
          </div>
        </MarketingWideContainer>
      </section>
    </main>
  );
}
