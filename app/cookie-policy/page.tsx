import type { Metadata } from "next";
import Link from "next/link";

import { MarketingWideContainer } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how AkiliBiz uses cookies and similar technologies across its websites, business services, marketplace, and related digital platforms.",
};

export default function CookiePolicyPage() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />

        <MarketingWideContainer className="relative z-10">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Legal
            </p>

            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-5xl">
              Cookie Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              This Cookie Policy explains how AkiliBiz uses cookies, local
              storage, pixels, and similar technologies across our websites and
              online services.
            </p>

            <p className="mt-5 text-sm leading-6 text-white/45">
              Last updated: September 2026
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer className="max-w-3xl">
          <article className="max-w-none text-[15px] leading-7 text-ink-600">
            <p>
              This Cookie Policy applies to websites, web applications,
              marketplace experiences, account portals, and other online
              services operated under the AkiliBiz platform where this policy
              is displayed or referenced.
            </p>

            <p className="mt-4">
              It should be read together with our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                Privacy Policy
              </Link>
              , which explains more broadly how AkiliBiz collects, uses,
              protects, and shares personal information.
            </p>

            {/* Section 1 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              1. What Are Cookies and Similar Technologies?
            </h2>

            <p className="mt-4">
              Cookies are small text files stored on your computer, mobile
              phone, tablet, or other device when you visit a website. They
              allow a website to recognise a device, remember information
              between pages or visits, maintain authenticated sessions, save
              preferences, and support other website functionality.
            </p>

            <p className="mt-4">
              AkiliBiz may also use technologies that perform similar
              functions, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>browser local storage and session storage;</li>
              <li>authentication and session tokens;</li>
              <li>software development kit identifiers;</li>
              <li>pixels, tags, and similar measurement technologies;</li>
              <li>device or browser identifiers where permitted; and</li>
              <li>
                other technologies necessary to provide, secure, measure, or
                improve our online services.
              </li>
            </ul>

            <p className="mt-4">
              In this policy, we generally use the term{" "}
              <strong className="font-semibold text-ink-800">
                &quot;cookies&quot;
              </strong>{" "}
              to refer collectively to cookies and similar technologies unless
              a distinction is necessary.
            </p>

            {/* Section 2 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. Where This Policy Applies
            </h2>

            <p className="mt-4">
              AkiliBiz is being developed as a broader digital business
              ecosystem. Depending on the service you use, cookies or similar
              technologies may be used across:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>the AkiliBiz marketing and informational website;</li>
              <li>AkiliBiz Business web services and account portals;</li>
              <li>the AkiliBiz Marketplace and customer-facing services;</li>
              <li>authentication, registration, and account-management pages;</li>
              <li>customer-support and contact experiences;</li>
              <li>documentation, download, and product-update pages;</li>
              <li>future web-based administrative dashboards; and</li>
              <li>
                other browser-based AkiliBiz services that link to this policy.
              </li>
            </ul>

            <p className="mt-4">
              The AkiliBiz Desktop application may use local application
              storage and other device-side technologies that are technically
              different from browser cookies. Where relevant, information about
              such storage will be addressed through the applicable privacy,
              product, or software documentation.
            </p>

            {/* Section 3 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. Why AkiliBiz Uses Cookies
            </h2>

            <p className="mt-4">
              We may use cookies where they are necessary to operate AkiliBiz,
              to remember user choices, to understand how our services are
              being used, to improve performance, and to protect our systems
              and users.
            </p>

            <p className="mt-4">
              The particular cookies used may change as AkiliBiz services
              evolve. They generally fall into the categories described below.
            </p>

            {/* Section 4 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. Strictly Necessary Cookies
            </h2>

            <p className="mt-4">
              Strictly necessary cookies are required for essential website or
              platform functionality. Without them, some AkiliBiz services may
              not operate correctly.
            </p>

            <p className="mt-4">They may be used to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>maintain secure login and authenticated sessions;</li>
              <li>
                identify whether a user is signed in to an AkiliBiz account;
              </li>
              <li>route requests securely between application services;</li>
              <li>
                protect login, registration, and account-management workflows;
              </li>
              <li>help prevent cross-site request forgery and similar attacks;</li>
              <li>detect suspicious or abusive traffic;</li>
              <li>maintain security-related settings;</li>
              <li>remember cookie consent decisions;</li>
              <li>support load balancing and service availability; and</li>
              <li>
                preserve information necessary to complete actions requested by
                the user.
              </li>
            </ul>

            <p className="mt-4">
              Because these technologies are required to provide services you
              request, they generally cannot be disabled through an AkiliBiz
              cookie preference interface. You may still be able to block them
              through your browser, but doing so may prevent parts of the
              platform from working.
            </p>

            {/* Section 5 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Preference and Functional Cookies
            </h2>

            <p className="mt-4">
              Preference cookies help AkiliBiz remember settings you have
              selected so that your experience can remain consistent between
              visits.
            </p>

            <p className="mt-4">These may include preferences such as:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>preferred language or locale;</li>
              <li>regional formatting preferences;</li>
              <li>theme or display choices;</li>
              <li>accessibility-related settings;</li>
              <li>dismissed notices or announcements;</li>
              <li>navigation and interface preferences; and</li>
              <li>
                other non-essential settings intended to improve usability.
              </li>
            </ul>

            {/* Section 6 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. Analytics and Performance Cookies
            </h2>

            <p className="mt-4">
              Analytics technologies may help us understand how visitors use
              AkiliBiz websites and web applications. This allows us to identify
              problems, measure performance, understand which pages are useful,
              and improve the overall experience.
            </p>

            <p className="mt-4">
              Depending on the analytics services implemented, information
              collected may include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>pages visited;</li>
              <li>approximate visit duration;</li>
              <li>navigation paths;</li>
              <li>referring pages or websites;</li>
              <li>browser and device type;</li>
              <li>operating system;</li>
              <li>general geographic region;</li>
              <li>website performance information;</li>
              <li>application errors and failed requests; and</li>
              <li>
                aggregated interaction information such as button or feature
                usage.
              </li>
            </ul>

            <p className="mt-4">
              Where reasonably possible, we aim to use analytics information in
              an aggregated or privacy-conscious manner rather than using it to
              directly identify individual visitors.
            </p>

            {/* Section 7 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              7. Security, Fraud Prevention, and Abuse Detection
            </h2>

            <p className="mt-4">
              AkiliBiz may use cookies, device signals, session identifiers, or
              related technologies to protect users, businesses, and the
              platform.
            </p>

            <p className="mt-4">These technologies may help us:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>detect unusual login activity;</li>
              <li>identify potentially automated or malicious traffic;</li>
              <li>limit abuse of forms or public endpoints;</li>
              <li>reduce account takeover risks;</li>
              <li>protect authentication sessions;</li>
              <li>investigate technical or security incidents; and</li>
              <li>
                enforce reasonable security controls across AkiliBiz services.
              </li>
            </ul>

            {/* Section 8 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              8. Authentication and Account Sessions
            </h2>

            <p className="mt-4">
              Where AkiliBiz provides account-based services, authentication
              cookies or tokens may be used to keep users signed in and to
              determine whether requests are being made by an authenticated
              user.
            </p>

            <p className="mt-4">
              Authentication-related cookies may contain or reference random
              session identifiers or cryptographically protected tokens. We do
              not intend to store account passwords directly inside browser
              cookies.
            </p>

            <p className="mt-4">
              Some authentication cookies may expire automatically when your
              browser session ends, while others may remain for a limited
              period where features such as &quot;remember me&quot; or
              persistent login are provided.
            </p>

            {/* Section 9 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              9. Marketplace Cookies
            </h2>

            <p className="mt-4">
              When AkiliBiz Marketplace services become available, additional
              cookies may be necessary to support customer-facing shopping and
              marketplace functionality.
            </p>

            <p className="mt-4">For example, cookies may support:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>customer sessions;</li>
              <li>shopping carts or saved items;</li>
              <li>marketplace account authentication;</li>
              <li>delivery or regional preferences;</li>
              <li>checkout state;</li>
              <li>fraud-prevention mechanisms;</li>
              <li>order-related navigation; and</li>
              <li>marketplace performance analytics.</li>
            </ul>

            <p className="mt-4">
              AkiliBiz will update this policy where necessary as marketplace
              functionality and supporting technologies are introduced.
            </p>

            {/* Section 10 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              10. Payment-Related Technologies
            </h2>

            <p className="mt-4">
              AkiliBiz may integrate with payment providers or payment
              infrastructure to facilitate transactions. Depending on the
              payment method and provider, payment-related pages or external
              payment services may use their own cookies or security
              technologies.
            </p>

            <p className="mt-4">
              These may be necessary for fraud detection, transaction security,
              payment-session management, regulatory compliance, or completing
              a payment requested by the user.
            </p>

            <p className="mt-4">
              Where payment processing is handled through a separate provider,
              that provider&apos;s privacy and cookie practices may apply to
              information processed on its systems.
            </p>

            {/* Section 11 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              11. First-Party and Third-Party Cookies
            </h2>

            <p className="mt-4">
              <strong className="font-semibold text-ink-800">
                First-party cookies
              </strong>{" "}
              are set directly by AkiliBiz or by infrastructure operating on
              our behalf under an AkiliBiz domain.
            </p>

            <p className="mt-4">
              <strong className="font-semibold text-ink-800">
                Third-party cookies
              </strong>{" "}
              may be set by another organisation whose service has been
              integrated into an AkiliBiz webpage.
            </p>

            <p className="mt-4">
              Examples of third-party services that could use cookies or
              similar technologies include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>website analytics providers;</li>
              <li>hosting and content-delivery providers;</li>
              <li>security and anti-abuse services;</li>
              <li>authentication providers;</li>
              <li>payment service providers;</li>
              <li>embedded media providers;</li>
              <li>customer-support services; and</li>
              <li>other infrastructure providers supporting AkiliBiz.</li>
            </ul>

            <p className="mt-4">
              Third parties are responsible for their own processing practices.
              Where a third-party service sets cookies directly, we recommend
              reviewing that provider&apos;s privacy and cookie documentation.
            </p>

            {/* Section 12 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              12. Session Cookies and Persistent Cookies
            </h2>

            <p className="mt-4">
              Cookies may remain on your device for different periods depending
              on their purpose.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink-800">
                  Session cookies
                </strong>{" "}
                normally expire when you close your browser or end your
                session.
              </li>

              <li>
                <strong className="font-semibold text-ink-800">
                  Persistent cookies
                </strong>{" "}
                remain on your device until their configured expiration date,
                until they are replaced, or until you delete them.
              </li>
            </ul>

            <p className="mt-4">
              We aim to retain cookies only for as long as reasonably necessary
              for the purpose for which they were created.
            </p>

            {/* Section 13 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              13. Cookie Consent
            </h2>

            <p className="mt-4">
              Where applicable law requires consent before certain
              non-essential cookies are placed on your device, AkiliBiz will
              seek that consent through an appropriate cookie banner,
              preference centre, or similar mechanism.
            </p>

            <p className="mt-4">
              You may be able to choose whether to permit categories such as
              analytics or optional functional cookies while still allowing
              strictly necessary technologies required for the platform to
              operate.
            </p>

            <p className="mt-4">
              Your consent decision may itself be stored in a cookie or local
              storage record so that we do not need to ask for the same choice
              on every page visit.
            </p>

            {/* Section 14 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              14. Changing or Withdrawing Your Consent
            </h2>

            <p className="mt-4">
              Where AkiliBiz provides cookie preference controls, you may
              change or withdraw your consent for non-essential cookies at any
              time through those controls.
            </p>

            <p className="mt-4">
              Withdrawing consent does not affect the lawfulness of processing
              that occurred before consent was withdrawn.
            </p>

            <p className="mt-4">
              Some preferences may need to be selected again if you clear your
              browser cookies, use a new browser, use another device, or browse
              in a private or incognito session.
            </p>

            {/* Section 15 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              15. Managing Cookies Through Your Browser
            </h2>

            <p className="mt-4">
              Most modern browsers allow you to review, restrict, block, or
              delete cookies through their privacy settings.
            </p>

            <p className="mt-4">
              Depending on your browser, cookie controls can generally be found
              in areas similar to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-ink-800">Chrome:</strong>{" "}
                Settings &gt; Privacy and security &gt; Third-party cookies or
                Site data
              </li>

              <li>
                <strong className="font-semibold text-ink-800">Firefox:</strong>{" "}
                Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data
              </li>

              <li>
                <strong className="font-semibold text-ink-800">Safari:</strong>{" "}
                Settings &gt; Privacy &gt; Website data
              </li>

              <li>
                <strong className="font-semibold text-ink-800">Edge:</strong>{" "}
                Settings &gt; Cookies and site permissions
              </li>
            </ul>

            <p className="mt-4">
              Browser interfaces change over time, so the exact wording may
              differ depending on your browser version and device.
            </p>

            {/* Section 16 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              16. What Happens If You Disable Cookies?
            </h2>

            <p className="mt-4">
              You can use your browser settings to block cookies, but doing so
              may affect your AkiliBiz experience.
            </p>

            <p className="mt-4">For example, you may:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>be unable to sign in or remain signed in;</li>
              <li>lose saved website preferences;</li>
              <li>need to repeatedly dismiss notices or prompts;</li>
              <li>experience problems with secure forms;</li>
              <li>lose shopping-cart or marketplace session information;</li>
              <li>experience reduced website functionality; or</li>
              <li>
                prevent certain security or fraud-prevention mechanisms from
                operating as intended.
              </li>
            </ul>

            {/* Section 17 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              17. Do Not Track and Browser Privacy Signals
            </h2>

            <p className="mt-4">
              Some browsers and devices provide privacy preference signals,
              including mechanisms commonly referred to as &quot;Do Not
              Track&quot;.
            </p>

            <p className="mt-4">
              Because there is not always a consistent technical or legal
              standard governing how every such signal must be interpreted,
              AkiliBiz may not respond uniformly to all browser privacy signals.
              We may update our practices as recognised standards and legal
              requirements develop.
            </p>

            {/* Section 18 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              18. Personal Information Collected Through Cookies
            </h2>

            <p className="mt-4">
              Depending on the technology used, information associated with a
              cookie may qualify as personal information or become personal
              information when combined with account or device information.
            </p>

            <p className="mt-4">This may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>IP address;</li>
              <li>device and browser information;</li>
              <li>session identifiers;</li>
              <li>account-related identifiers;</li>
              <li>approximate location derived from network information;</li>
              <li>authentication state;</li>
              <li>website activity; and</li>
              <li>interaction or diagnostic information.</li>
            </ul>

            <p className="mt-4">
              Any personal information collected through cookies will be
              handled in accordance with the AkiliBiz Privacy Policy and
              applicable law.
            </p>

            {/* Section 19 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              19. Cookies and Business Accounts
            </h2>

            <p className="mt-4">
              Businesses using AkiliBiz may create accounts for owners,
              administrators, employees, or other authorised users. Cookies may
              be used to maintain these authenticated sessions and enforce
              relevant access controls.
            </p>

            <p className="mt-4">
              Users accessing AkiliBiz on behalf of a business should ensure
              they follow that business&apos;s internal policies regarding
              authorised devices, shared computers, browser sessions, and
              account security.
            </p>

            <p className="mt-4">
              Where a device is shared between multiple users, we recommend
              signing out after completing an authenticated session.
            </p>

            {/* Section 20 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              20. Children
            </h2>

            <p className="mt-4">
              AkiliBiz business-management services are primarily intended for
              businesses and authorised users acting in a commercial or
              professional capacity.
            </p>

            <p className="mt-4">
              We do not intentionally use cookies to create behavioural
              advertising profiles of children. Where future AkiliBiz services
              are intended for or accessible to younger users, we will review
              the applicable legal and consent requirements for those services.
            </p>

            {/* Section 21 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              21. International Use
            </h2>

            <p className="mt-4">
              AkiliBiz is designed for businesses in African markets and may
              expand across multiple countries over time.
            </p>

            <p className="mt-4">
              Cookie and privacy requirements may differ between
              jurisdictions. Where specific consent, disclosure, or
              configuration requirements apply to users in a particular
              country, AkiliBiz may provide additional notices or controls.
            </p>

            {/* Section 22 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              22. Changes to the Cookies We Use
            </h2>

            <p className="mt-4">
              The technologies used by AkiliBiz will evolve as new services,
              security features, marketplace functionality, payment
              integrations, analytics systems, and infrastructure are
              introduced.
            </p>

            <p className="mt-4">
              As a result, the specific cookies or providers used at a
              particular time may change without every change requiring a
              complete redesign of this policy.
            </p>

            <p className="mt-4">
              Where a change materially affects how we use personal information
              or requires additional consent, we will take reasonable steps to
              update the relevant disclosures or consent mechanisms.
            </p>

            {/* Section 23 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              23. Changes to This Cookie Policy
            </h2>

            <p className="mt-4">
              We may update this Cookie Policy periodically to reflect changes
              in technology, AkiliBiz products, legal requirements, security
              practices, or the third-party services we use.
            </p>

            <p className="mt-4">
              When we update this policy, we will revise the{" "}
              <strong className="font-semibold text-ink-800">
                &quot;Last updated&quot;
              </strong>{" "}
              date shown at the top of this page.
            </p>

            <p className="mt-4">
              Where required by law or where changes are particularly
              significant, we may provide additional notice through the
              website, platform, or another appropriate communication channel.
            </p>

            {/* Section 24 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              24. Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about this Cookie Policy, the cookies used
              by AkiliBiz, or your privacy choices, you can contact us through
              our{" "}
              <Link
                href="/contact"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                contact page
              </Link>
              .
            </p>

            <p className="mt-4">
              When contacting us about cookies or privacy, please provide enough
              information for us to understand your request without sending
              passwords, payment credentials, or other unnecessary sensitive
              information.
            </p>
          </article>
        </MarketingWideContainer>
      </section>
    </main>
  );
}
