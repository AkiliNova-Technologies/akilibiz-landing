import type { Metadata } from "next";

import { MarketingWideContainer } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AkiliBiz collects, uses, and protects your information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />
        <MarketingWideContainer className="relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl">
              Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              AkiliBiz (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. Information We Collect
            </h2>
            <p>
              We may collect information you provide directly, including your name, business name, email address, phone number, and message content when you submit a contact form or communicate with us.
            </p>
            <p className="mt-3">
              We may also collect certain information automatically when you visit our website, such as your IP address, browser type, device information, and usage data through cookies and similar technologies.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 space-y-2">
              <li>Respond to your enquiries and provide customer support.</li>
              <li>Send you information about AkiliBiz products and services, where you have opted in.</li>
              <li>Improve our website, products, and services.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and providing our services, subject to appropriate confidentiality obligations. We may also disclose information where required by law or to protect our rights.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              8. Cookies
            </h2>
            <p>
              Our website may use cookies and similar technologies to improve your experience and analyse website usage. You can control cookies through your browser settings. For more details, see our Cookie Policy.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information, please contact us through our{" "}
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
