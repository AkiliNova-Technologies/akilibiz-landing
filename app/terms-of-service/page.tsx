import type { Metadata } from "next";

import { MarketingWideContainer } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the AkiliBiz website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />
        <MarketingWideContainer className="relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl">
              Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the AkiliBiz website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. Description of Services
            </h2>
            <p>
              AkiliBiz provides a business management platform that includes desktop software, web-based tools, marketplace services, and related features for managing sales, inventory, customers, suppliers, reporting, and other business operations. Specific features and availability may vary by product, plan, and region.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. Account Registration
            </h2>
            <p>
              Certain features of AkiliBiz may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate and complete information when creating your account and to update it as necessary.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. Acceptable Use
            </h2>
            <p>You agree to use AkiliBiz only for lawful purposes and in accordance with these terms. You must not:</p>
            <ul className="mt-3 space-y-2">
              <li>Use the service in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the service or its related systems.</li>
              <li>Interfere with or disrupt the service or servers connected to the service.</li>
              <li>Use the service to transmit harmful, fraudulent, or misleading content.</li>
              <li>Reproduce, distribute, or create derivative works from the service without written permission.</li>
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Your Data
            </h2>
            <p>
              You retain ownership of any business data you enter into AkiliBiz. By using the service, you grant AkiliBiz a limited licence to process your data solely for the purpose of providing and improving the service. We will not sell your business data to third parties.
            </p>
            <p className="mt-3">
              You are responsible for backing up your data. While AkiliBiz may offer backup features, you should maintain your own backup practices to protect against data loss.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. Subscriptions and Payments
            </h2>
            <p>
              Certain features of AkiliBiz may require a paid subscription. Subscription terms, pricing, and payment methods will be communicated at the time of purchase. Subscriptions may be renewed automatically unless cancelled before the renewal date. Fees are non-refundable except where required by applicable law.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              7. Intellectual Property
            </h2>
            <p>
              AkiliBiz and its content, features, and functionality are owned by AkiliBiz and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the service without our written permission.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              8. Disclaimer of Warranties
            </h2>
            <p>
              AkiliBiz is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not warrant that the service will be uninterrupted, error-free, or completely secure. You use the service at your own risk.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, AkiliBiz shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability shall not exceed the amount you paid for the service in the twelve months preceding the claim.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              10. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the service at any time for conduct that we determine violates these terms or is harmful to other users, third parties, or the business interests of AkiliBiz. You may also terminate your account by contacting us.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by posting the updated terms on this page. Your continued use of the service after changes are posted constitutes acceptance of the updated terms.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              12. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Uganda, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Uganda.
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              13. Contact Us
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us through our{" "}
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
