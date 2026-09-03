import type { Metadata } from "next";
import Link from "next/link";

import { MarketingWideContainer } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms governing access to and use of AkiliBiz business software, marketplace services, subscriptions, payments, integrations, and related services.",
}

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              These Terms govern your access to and use of AkiliBiz websites,
              software, business services, marketplace services, payment
              features, applications, and related products.
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
            {/* 1 */}
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              1. Acceptance of These Terms
            </h2>

            <p className="mt-4">
              These Terms of Service (&quot;Terms&quot;) form a legally binding
              agreement governing access to and use of AkiliBiz.
            </p>

            <p className="mt-4">
              By creating an account, purchasing a subscription, downloading or
              installing AkiliBiz software, accessing an AkiliBiz application,
              using the Marketplace, using an AkiliBiz payment feature, or
              otherwise accessing a service that references these Terms, you
              agree to comply with them.
            </p>

            <p className="mt-4">
              If you do not agree to these Terms, you must not use the relevant
              AkiliBiz services.
            </p>

            <p className="mt-4">
              If you use AkiliBiz on behalf of a company, organisation,
              partnership, shop, institution, or other business, you represent
              that you have authority to accept these Terms on behalf of that
              organisation.
            </p>

            {/* 2 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. About AkiliBiz
            </h2>

            <p className="mt-4">
              AkiliBiz is a business technology platform intended to help
              businesses manage operational activities including sales,
              inventory, products, customers, suppliers, employees, finance,
              payments, reports, and related workflows.
            </p>

            <p className="mt-4">
              The AkiliBiz ecosystem may include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>AkiliBiz Business Desktop</li>
              <li>AkiliBiz Business Web</li>
              <li>business mobile applications</li>
              <li>the AkiliBiz Marketplace</li>
              <li>customer-facing web and mobile applications</li>
              <li>payment and payment-reconciliation services</li>
              <li>cloud synchronisation services</li>
              <li>APIs and integrations</li>
              <li>software update services</li>
              <li>backup and recovery functionality</li>
              <li>reporting and analytics tools</li>
              <li>support and documentation services and</li>
              <li>future products made available under the AkiliBiz brand.</li>
            </ul>

            {/* 3 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. Eligibility
            </h2>

            <p className="mt-4">
              You may use AkiliBiz only if you are legally capable of entering
              into the agreement applicable to your use of the service.
            </p>

            <p className="mt-4">
              Where you use AkiliBiz for or on behalf of a business, you must
              have authority to act for that business.
            </p>

            <p className="mt-4">
              Certain services, including payment services or regulated
              integrations, may be subject to additional eligibility,
              verification, geographic, provider, or account requirements.
            </p>

            {/* 4 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. Accounts and Registration
            </h2>

            <p className="mt-4">
              Some AkiliBiz functionality requires an account. You agree to
              provide accurate, complete, and current information when creating
              or maintaining an account.
            </p>

            <p className="mt-4">
              You are responsible for keeping your account credentials secure
              and for taking reasonable steps to prevent unauthorised use of
              your account.
            </p>

            <p className="mt-4">
              You must notify us promptly if you believe your AkiliBiz account
              has been compromised or accessed without authorisation.
            </p>

            {/* 5 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Business Accounts
            </h2>

            <p className="mt-4">
              An AkiliBiz business account may represent a company, shop,
              entrepreneur, organisation, branch, or other commercial entity.
            </p>

            <p className="mt-4">
              A business may designate one or more owners, administrators, or
              authorised users to manage its AkiliBiz environment.
            </p>

            <p className="mt-4">
              The business is responsible for:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>deciding who should have access to its account</li>
              <li>assigning appropriate roles and permissions</li>
              <li>removing access when an individual is no longer authorised</li>
              <li>maintaining accurate business information</li>
              <li>protecting devices on which AkiliBiz is installed</li>
              <li>ensuring that staff use the platform lawfully</li>
              <li>protecting locally stored business data and</li>
              <li>
                ensuring that information entered into AkiliBiz has been
                lawfully collected.
              </li>
            </ul>

            {/* 6 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. Authorised Users and Staff
            </h2>

            <p className="mt-4">
              Businesses may create or authorise staff accounts with different
              roles and permissions.
            </p>

            <p className="mt-4">
              A business is responsible for the actions of users it authorises
              to operate its AkiliBiz account, subject to applicable law.
            </p>

            <p className="mt-4">
              Users must not attempt to bypass permissions, impersonate another
              user, access functions they are not authorised to use, or obtain
              information belonging to another business.
            </p>

            {/* 7 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              7. Licence to Use AkiliBiz
            </h2>

            <p className="mt-4">
              Subject to these Terms and any applicable subscription
              requirements, AkiliBiz grants you a limited, non-exclusive,
              non-transferable, revocable licence to access and use the
              applicable AkiliBiz services for their intended purpose.
            </p>

            <p className="mt-4">
              This licence does not transfer ownership of AkiliBiz software,
              source code, branding, technology, documentation, or other
              intellectual property to you.
            </p>

            {/* 8 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              8. Acceptable Use
            </h2>

            <p className="mt-4">
              You agree to use AkiliBiz only for lawful and legitimate
              business or personal purposes consistent with the functionality
              provided.
            </p>

            <p className="mt-4">You must not:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>use AkiliBiz in violation of applicable law</li>
              <li>use another person&aposs account without permission</li>
              <li>attempt to gain unauthorised access to systems or data</li>
              <li>circumvent account permissions or security controls</li>
              <li>probe, scan, or test infrastructure without authorisation</li>
              <li>introduce malware or harmful software</li>
              <li>interfere with the operation or availability of the service</li>
              <li>conduct fraudulent transactions</li>
              <li>fabricate or manipulate payment confirmations</li>
              <li>use AkiliBiz to facilitate unlawful activities</li>
              <li>misrepresent your identity or business</li>
              <li>abuse APIs, rate limits, or integrations</li>
              <li>
                scrape, harvest, or extract data through unauthorised automated
                means
              </li>
              <li>
                attempt to reverse engineer AkiliBiz except where such
                restriction is prohibited by law
              </li>
              <li>
                reproduce or redistribute proprietary software without
                authorisation or
              </li>
              <li>
                intentionally interfere with another business&aposs use of
                AkiliBiz.
              </li>
            </ul>

            {/* 9 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              9. Business Data
            </h2>

            <p className="mt-4">
              As between you and AkiliBiz, you retain your rights in business
              data that you lawfully enter, upload, generate, import, or store
              through AkiliBiz.
            </p>

            <p className="mt-4">
              This may include sales records, products, inventory information,
              customers, suppliers, employees, financial records, transaction
              information, business settings, and related operational data.
            </p>

            <p className="mt-4">
              You grant AkiliBiz permission to process that information only to
              the extent reasonably necessary to provide, maintain, secure,
              support, and improve the services you use, subject to our Privacy
              Policy and applicable law.
            </p>

            {/* 10 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              10. Your Responsibilities for Data
            </h2>

            <p className="mt-4">
              You are responsible for ensuring that information you provide to
              AkiliBiz is lawful and that you have any permissions, notices, or
              consents required to process it.
            </p>

            <p className="mt-4">
              In particular, businesses using AkiliBiz to store information
              about customers, employees, suppliers, or other individuals are
              responsible for complying with applicable privacy and data
              protection obligations.
            </p>

            <p className="mt-4">
              You must not use AkiliBiz to knowingly store or process unlawful,
              malicious, fraudulent, or unauthorised information.
            </p>

            {/* 11 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              11. Offline-First Services
            </h2>

            <p className="mt-4">
              Certain AkiliBiz products may operate using an offline-first
              architecture. This means some information can be stored directly
              on devices controlled by the business rather than continuously
              stored on AkiliBiz infrastructure.
            </p>

            <p className="mt-4">
              Where data is stored locally, the business is responsible for
              securing the relevant device, operating-system account, physical
              environment, storage media, and backup copies.
            </p>

            <p className="mt-4">
              Internet connectivity may be required for features such as cloud
              synchronisation, software updates, remote authentication,
              marketplace services, electronic payments, or other online
              functionality.
            </p>

            {/* 12 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              12. Backups and Recovery
            </h2>

            <p className="mt-4">
              AkiliBiz may provide tools that assist with creating or verifying
              backups. Unless an AkiliBiz plan specifically states otherwise,
              these features do not replace your responsibility to maintain an
              appropriate backup strategy.
            </p>

            <p className="mt-4">
              You should maintain backups appropriate to the importance of your
              business records and periodically verify that those backups can
              be accessed when needed.
            </p>

            <p className="mt-4">
              AkiliBiz is not responsible for data loss caused solely by
              damaged devices, deleted local databases, lost storage media,
              unauthorised device access, failure to maintain backups, or
              circumstances outside our reasonable control, except where the
              law provides otherwise.
            </p>

            {/* 13 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              13. Cloud Synchronisation
            </h2>

            <p className="mt-4">
              Where cloud synchronisation becomes available, AkiliBiz may
              transmit selected business records between authorised devices
              and hosted infrastructure.
            </p>

            <p className="mt-4">
              Synchronisation may be affected by internet availability,
              conflicts between device changes, software versions, account
              permissions, provider outages, or other technical conditions.
            </p>

            <p className="mt-4">
              You should not assume that information created on one device has
              successfully synchronised to another until the relevant product
              confirms the synchronisation state.
            </p>

            {/* 14 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              14. Subscriptions and Plans
            </h2>

            <p className="mt-4">
              Some AkiliBiz functionality may be free while other functionality
              may require a paid subscription.
            </p>

            <p className="mt-4">
              Available features, usage limits, number of authorised users,
              business locations, marketplace capabilities, online services,
              support levels, storage, integrations, and other entitlements may
              vary by plan.
            </p>

            <p className="mt-4">
              Current pricing and plan information will be presented through
              the AkiliBiz website, account interface, quotation, invoice, or
              another applicable purchase process.
            </p>

            {/* 15 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              15. Fees, Taxes, and Charges
            </h2>

            <p className="mt-4">
              You agree to pay applicable subscription or service charges
              associated with products you purchase.
            </p>

            <p className="mt-4">
              Prices may be displayed exclusive or inclusive of applicable
              taxes depending on the service, customer type, and legal
              requirements. Where taxes are required, they may be added or
              separately identified during purchase or invoicing.
            </p>

            <p className="mt-4">
              Payment providers, telecommunications operators, banks, mobile
              money providers, or other third parties may charge separate
              transaction, network, foreign-exchange, withdrawal, or service
              fees. Unless explicitly stated otherwise, those charges are not
              AkiliBiz subscription fees.
            </p>

            {/* 16 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              16. Subscription Renewal
            </h2>

            <p className="mt-4">
              Where a subscription automatically renews, the renewal terms,
              billing interval, price, and applicable cancellation process will
              be communicated as part of the subscription arrangement.
            </p>

            <p className="mt-4">
              If automatic renewal is not offered for a particular plan, the
              service may require manual renewal before the relevant
              subscription period expires.
            </p>

            {/* 17 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              17. Cancellation
            </h2>

            <p className="mt-4">
              You may cancel a paid subscription using the cancellation method
              available for the relevant service or by contacting us where no
              self-service cancellation option is available.
            </p>

            <p className="mt-4">
              Unless otherwise stated at purchase or required by applicable
              law, cancellation normally prevents future renewal rather than
              immediately reversing a period that has already been paid for.
            </p>

            {/* 18 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              18. Refunds
            </h2>

            <p className="mt-4">
              Refund eligibility may depend on the product, subscription,
              payment method, reason for the request, and applicable law.
            </p>

            <p className="mt-4">
              Where a specific AkiliBiz product has a published refund or
              cancellation policy, that policy forms part of these Terms for
              that product.
            </p>

            <p className="mt-4">
              Nothing in these Terms removes a refund, cancellation, or other
              consumer right that cannot lawfully be excluded.
            </p>

            {/* 19 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              19. Electronic Payments
            </h2>

            <p className="mt-4">
              AkiliBiz may provide functionality that allows businesses or
              customers to initiate or record electronic payments through
              supported providers.
            </p>

            <p className="mt-4">
              Payment functionality may involve mobile money operators, banks,
              gateways, card processors, telecommunications providers, or other
              financial service providers.
            </p>

            <p className="mt-4">
              Availability may depend on your country, provider, business
              configuration, account status, network availability, and the
              applicable payment provider.
            </p>

            {/* 20 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              20. Payment Authorisation
            </h2>

            <p className="mt-4">
              You are responsible for ensuring that payment transactions you
              initiate are authorised and that transaction details are correct.
            </p>

            <p className="mt-4">
              A payment displayed as pending should not be treated as
              successful until AkiliBiz or the applicable payment provider has
              received sufficient verified confirmation of completion.
            </p>

            <p className="mt-4">
              Payment-provider delays, network interruptions, duplicated
              notifications, reversals, or reconciliation delays can occur.
              AkiliBiz may therefore rely on provider confirmation and internal
              reconciliation records when determining transaction status.
            </p>

            {/* 21 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              21. Mobile Money and Third-Party Payment Providers
            </h2>

            <p className="mt-4">
              Where payments are facilitated through providers such as mobile
              money operators or banks, those providers operate their own
              networks and systems.
            </p>

            <p className="mt-4">
              Their terms, fees, availability, transaction limits, fraud
              controls, reversal procedures, and privacy practices may apply
              independently of AkiliBiz.
            </p>

            <p className="mt-4">
              AkiliBiz does not control provider network availability or the
              independent approval, rejection, delay, or reversal of a
              transaction by a payment provider.
            </p>

            {/* 22 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              22. Marketplace Services
            </h2>

            <p className="mt-4">
              AkiliBiz may provide Marketplace functionality that allows
              customers to discover products or businesses and allows
              participating merchants to offer goods or services.
            </p>

            <p className="mt-4">
              The Marketplace may facilitate discovery, ordering,
              communication, payment, transaction records, or other
              marketplace-related functionality.
            </p>

            {/* 23 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              23. Marketplace Merchants
            </h2>

            <p className="mt-4">
              Unless expressly stated otherwise, participating businesses are
              responsible for the goods or services they offer through the
              Marketplace.
            </p>

            <p className="mt-4">
              Merchants are responsible for ensuring that their listings are
              accurate and that they comply with applicable laws concerning
              pricing, taxes, product descriptions, availability, warranties,
              fulfilment, returns, refunds, and customer rights.
            </p>

            <p className="mt-4">
              AkiliBiz may establish additional Marketplace rules that form
              part of these Terms for participating merchants.
            </p>

            {/* 24 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              24. Marketplace Customers
            </h2>

            <p className="mt-4">
              Customers are responsible for reviewing product information,
              prices, delivery information, merchant details, and transaction
              details before placing an order.
            </p>

            <p className="mt-4">
              Where supported, customers should be provided an opportunity to
              review and correct relevant order information before finalising an
              electronic transaction.
            </p>

            {/* 25 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              25. Marketplace Orders
            </h2>

            <p className="mt-4">
              Submission of an order does not necessarily mean that a merchant
              has accepted the order.
            </p>

            <p className="mt-4">
              Order acceptance, fulfilment, cancellation, delivery,
              availability, and refunds may depend on the applicable merchant,
              product, payment status, and Marketplace rules.
            </p>

            {/* 26 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              26. Taxes and Accounting
            </h2>

            <p className="mt-4">
              AkiliBiz may provide tools that assist businesses with taxes,
              financial records, accounting calculations, reports, or related
              business processes.
            </p>

            <p className="mt-4">
              Unless explicitly stated otherwise, AkiliBiz is a software
              platform and does not provide professional accounting, tax,
              legal, financial, or audit advice.
            </p>

            <p className="mt-4">
              Businesses remain responsible for verifying their tax
              obligations, filing requirements, accounting treatment, and
              compliance with applicable laws.
            </p>

            {/* 27 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              27. Reports and Calculations
            </h2>

            <p className="mt-4">
              Reports generated by AkiliBiz depend on information entered into
              or recorded by the system.
            </p>

            <p className="mt-4">
              Incorrect product settings, tax configuration, opening balances,
              transaction data, user input, or imported information may affect
              the accuracy of reports.
            </p>

            <p className="mt-4">
              Businesses should review important financial or regulatory
              reports before relying on them for legal, tax, audit, or filing
              purposes.
            </p>

            {/* 28 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              28. Hardware and Printing
            </h2>

            <p className="mt-4">
              AkiliBiz may support receipt printers, barcode scanners, cash
              drawers, computers, mobile devices, or other hardware.
            </p>

            <p className="mt-4">
              Hardware compatibility may depend on the operating system, model,
              drivers, connection method, network configuration, software
              version, and device manufacturer.
            </p>

            <p className="mt-4">
              Where AkiliBiz-branded or configured hardware is sold separately,
              additional hardware-specific terms or warranties may apply.
            </p>

            {/* 29 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              29. Software Updates
            </h2>

            <p className="mt-4">
              AkiliBiz may release security updates, bug fixes, compatibility
              changes, feature releases, and other software updates.
            </p>

            <p className="mt-4">
              You are encouraged to use supported and reasonably current
              versions of AkiliBiz.
            </p>

            <p className="mt-4">
              Older software versions may eventually stop receiving security
              fixes, compatibility updates, or access to certain online
              services.
            </p>

            {/* 30 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              30. Beta, Preview, and Experimental Features
            </h2>

            <p className="mt-4">
              AkiliBiz may occasionally make beta, preview, experimental, or
              early-access features available.
            </p>

            <p className="mt-4">
              Such functionality may be incomplete, change substantially, be
              withdrawn, or contain defects not present in generally available
              functionality.
            </p>

            <p className="mt-4">
              You should not rely on experimental functionality for
              mission-critical operations unless we expressly state that the
              feature is suitable for production use.
            </p>

            {/* 31 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              31. Integrations and Third-Party Services
            </h2>

            <p className="mt-4">
              AkiliBiz may integrate with services operated by independent
              third parties.
            </p>

            <p className="mt-4">
              Third-party services may include payment systems, communication
              services, hosting providers, authentication providers, accounting
              tools, external APIs, delivery providers, or other services.
            </p>

            <p className="mt-4">
              Your use of an independent third-party service may be governed by
              its own terms, privacy policy, fees, and availability.
            </p>

            <p className="mt-4">
              AkiliBiz is not responsible for an independent third
              party&aposs acts or omissions except where applicable law
              provides otherwise.
            </p>

            {/* 32 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              32. Intellectual Property
            </h2>

            <p className="mt-4">
              AkiliBiz software, interfaces, source code, object code,
              databases, documentation, designs, logos, branding, graphics,
              website content, and related technology are protected by
              applicable intellectual property laws.
            </p>

            <p className="mt-4">
              Except for rights expressly granted under these Terms, all rights
              in AkiliBiz remain reserved by the applicable owner.
            </p>

            {/* 33 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              33. AkiliBiz Branding
            </h2>

            <p className="mt-4">
              The AkiliBiz name, logos, visual identity, product names, and
              related marks may not be used in a way that falsely suggests
              endorsement, partnership, ownership, or affiliation without
              permission.
            </p>

            {/* 34 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              34. Feedback
            </h2>

            <p className="mt-4">
              You may voluntarily provide suggestions, feature ideas, bug
              reports, or other feedback regarding AkiliBiz.
            </p>

            <p className="mt-4">
              You agree that AkiliBiz may use such feedback to develop, improve,
              or modify its products without creating an obligation to
              compensate you for voluntarily submitted ideas, provided that we
              do not obtain ownership of your confidential business data merely
              because you provided feedback.
            </p>

            {/* 35 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              35. Service Availability
            </h2>

            <p className="mt-4">
              We aim to provide reliable services, but uninterrupted operation
              cannot be guaranteed.
            </p>

            <p className="mt-4">
              Online AkiliBiz services may occasionally be unavailable because
              of maintenance, infrastructure failures, provider outages,
              network problems, security events, updates, circumstances beyond
              our reasonable control, or other technical issues.
            </p>

            {/* 36 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              36. Maintenance
            </h2>

            <p className="mt-4">
              AkiliBiz may perform scheduled or emergency maintenance.
            </p>

            <p className="mt-4">
              Where reasonably possible and material to customers, we may
              provide notice of maintenance expected to significantly affect
              service availability.
            </p>

            {/* 37 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              37. Security
            </h2>

            <p className="mt-4">
              AkiliBiz seeks to implement reasonable technical,
              organisational, and administrative safeguards appropriate to our
              services.
            </p>

            <p className="mt-4">
              However, no software, network, device, database, or internet
              service can be guaranteed to be completely secure.
            </p>

            <p className="mt-4">
              You must also take reasonable measures to protect your systems,
              including securing devices, using appropriate credentials,
              limiting staff permissions, applying software updates, and
              protecting backup files.
            </p>

            {/* 38 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              38. Privacy
            </h2>

            <p className="mt-4">
              Our handling of personal information is described in our{" "}
              <Link
                href="/privacy"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p className="mt-4">
              Our use of cookies and similar browser technologies is described
              in our{" "}
              <Link
                href="/cookies"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                Cookie Policy
              </Link>
              .
            </p>

            {/* 39 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              39. Confidentiality
            </h2>

            <p className="mt-4">
              In providing support or operating certain services, AkiliBiz may
              receive access to information that is confidential to a business.
            </p>

            <p className="mt-4">
              We seek to limit access to such information to situations where
              it is reasonably necessary to provide or support the service,
              investigate an issue, comply with law, or protect the platform.
            </p>

            {/* 40 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              40. Suspension
            </h2>

            <p className="mt-4">
              AkiliBiz may temporarily restrict or suspend access to all or
              part of a service where reasonably necessary.
            </p>

            <p className="mt-4">Reasons may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>serious or repeated violations of these Terms</li>
              <li>suspected fraud</li>
              <li>security incidents</li>
              <li>attempted unauthorised access</li>
              <li>harm to other users or infrastructure</li>
              <li>non-payment of applicable fees</li>
              <li>legal or regulatory requirements</li>
              <li>provider restrictions or</li>
              <li>
                urgent technical circumstances requiring temporary
                intervention.
              </li>
            </ul>

            <p className="mt-4">
              Where appropriate, we will seek to provide notice and a
              reasonable opportunity to resolve the relevant issue.
            </p>

            {/* 41 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              41. Termination by You
            </h2>

            <p className="mt-4">
              You may stop using AkiliBiz at any time.
            </p>

            <p className="mt-4">
              Where account closure is available, you may request closure
              through the applicable account interface or contact channel.
            </p>

            <p className="mt-4">
              Terminating an account does not automatically eliminate payment
              obligations or legal responsibilities arising before
              termination.
            </p>

            {/* 42 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              42. Termination by AkiliBiz
            </h2>

            <p className="mt-4">
              We may terminate access to an AkiliBiz service where there is a
              serious breach of these Terms, continued non-payment, fraudulent
              or unlawful use, significant security risk, legal requirement,
              discontinuation of a service, or another legitimate reason.
            </p>

            <p className="mt-4">
              Where circumstances permit, we will seek to provide reasonable
              notice before permanent termination.
            </p>

            {/* 43 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              43. Effect of Termination
            </h2>

            <p className="mt-4">
              Upon termination, your right to use the affected services may end.
            </p>

            <p className="mt-4">
              Depending on the product architecture, some locally stored
              information may remain on devices controlled by your business
              until you remove it.
            </p>

            <p className="mt-4">
              Certain records may be retained where required for legal,
              accounting, security, transaction, audit, dispute-resolution, or
              other legitimate purposes.
            </p>

            {/* 44 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              44. Exporting Your Data
            </h2>

            <p className="mt-4">
              Where AkiliBiz provides data-export functionality, we encourage
              businesses to use it before closing an account or discontinuing a
              service where they require a copy of their records.
            </p>

            <p className="mt-4">
              Export availability, format, and scope may vary depending on the
              product and plan.
            </p>

            {/* 45 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              45. Disclaimer of Warranties
            </h2>

            <p className="mt-4">
              To the fullest extent permitted by applicable law, AkiliBiz
              services are provided on an &quot;as available&quot; basis.
            </p>

            <p className="mt-4">
              We do not guarantee that every service will always be
              uninterrupted, completely error-free, compatible with every
              device, or immune from every security threat.
            </p>

            <p className="mt-4">
              Nothing in these Terms excludes warranties, consumer protections,
              or obligations that cannot lawfully be excluded.
            </p>

            {/* 46 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              46. No Professional Advice
            </h2>

            <p className="mt-4">
              AkiliBiz may provide calculations, business reports, summaries,
              alerts, recommendations, or other informational tools.
            </p>

            <p className="mt-4">
              Unless expressly stated otherwise, these features do not
              constitute legal, accounting, tax, investment, banking, audit, or
              other regulated professional advice.
            </p>

            {/* 47 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              47. Limitation of Liability
            </h2>

            <p className="mt-4">
              To the fullest extent permitted by applicable law, AkiliBiz will
              not be liable for indirect, incidental, special, exemplary,
              punitive, or consequential losses arising from use of the
              service.
            </p>

            <p className="mt-4">
              This may include loss of profits, business opportunities,
              goodwill, anticipated savings, or other indirect commercial
              losses where exclusion is legally permitted.
            </p>

            <p className="mt-4">
              Except where applicable law requires otherwise, AkiliBiz&aposs
              aggregate liability arising from a paid service will not exceed
              the amount paid by the affected customer for that service during
              the twelve months immediately preceding the event giving rise to
              the claim.
            </p>

            {/* 48 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              48. Exceptions to Liability Limitations
            </h2>

            <p className="mt-4">
              Nothing in these Terms limits or excludes liability where doing
              so would be unlawful.
            </p>

            <p className="mt-4">
              Statutory consumer rights and other protections that cannot
              legally be waived remain unaffected.
            </p>

            {/* 49 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              49. Indemnity
            </h2>

            <p className="mt-4">
              To the extent permitted by applicable law, a business using
              AkiliBiz agrees to be responsible for claims, losses, or costs
              resulting from its unlawful use of the platform, infringement of
              another person&aposs rights, unlawful content or data supplied
              by the business, or material violation of these Terms.
            </p>

            <p className="mt-4">
              This section does not require a user to compensate AkiliBiz for
              loss caused by AkiliBiz&aposs own unlawful conduct where such an
              allocation would not be permitted by law.
            </p>

            {/* 50 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              50. Force Majeure
            </h2>

            <p className="mt-4">
              AkiliBiz will not be responsible for a failure or delay caused by
              circumstances beyond our reasonable control where applicable law
              permits.
            </p>

            <p className="mt-4">
              These circumstances may include major telecommunications
              failures, widespread internet outages, natural disasters,
              government actions, power disruptions, civil unrest, provider
              failures, major cyber incidents, or similar events.
            </p>

            {/* 51 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              51. Changes to AkiliBiz Services
            </h2>

            <p className="mt-4">
              AkiliBiz may add, improve, redesign, replace, discontinue, or
              modify features as the platform evolves.
            </p>

            <p className="mt-4">
              We may also change technical requirements or supported operating
              systems where reasonably necessary for security, reliability, or
              product development.
            </p>

            <p className="mt-4">
              Where a material change significantly affects a paid service, we
              will seek to provide reasonable notice where practicable.
            </p>

            {/* 52 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              52. Changes to These Terms
            </h2>

            <p className="mt-4">
              We may update these Terms to reflect changes in our products,
              business model, payment methods, marketplace functionality,
              security practices, applicable laws, or other operational needs.
            </p>

            <p className="mt-4">
              When these Terms are updated, the &quot;Last updated&quot; date at
              the top of this page will be revised.
            </p>

            <p className="mt-4">
              Where a change materially affects existing customers, AkiliBiz
              may provide additional notice through an application, website,
              account notification, email, or another reasonable method.
            </p>

            {/* 53 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              53. Electronic Agreements
            </h2>

            <p className="mt-4">
              Where permitted by law, agreements, notices, approvals,
              transactions, and other communications relating to AkiliBiz may be
              completed electronically.
            </p>

            <p className="mt-4">
              Clicking an acceptance control, creating an account, completing a
              purchase, confirming an order, or otherwise taking an action that
              clearly indicates agreement may constitute electronic acceptance
              where applicable.
            </p>

            {/* 54 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              54. Records of Transactions
            </h2>

            <p className="mt-4">
              AkiliBiz may maintain electronic records relating to account
              activity, subscriptions, orders, payments, agreements,
              transactions, refunds, reversals, and other material actions.
            </p>

            <p className="mt-4">
              Where appropriate, users may receive or be able to access
              receipts, invoices, order records, transaction references, or
              other electronic records.
            </p>

            {/* 55 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              55. Notices
            </h2>

            <p className="mt-4">
              AkiliBiz may provide notices through email, account
              notifications, application messages, website notices, or other
              contact methods associated with your account.
            </p>

            <p className="mt-4">
              You are responsible for keeping relevant account contact
              information reasonably current.
            </p>

            {/* 56 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              56. Disputes
            </h2>

            <p className="mt-4">
              If a dispute arises concerning AkiliBiz, we encourage you to
              contact us first so that we can attempt to understand and resolve
              the issue.
            </p>

            <p className="mt-4">
              Nothing in this section prevents either party from exercising
              rights available under applicable law.
            </p>

            {/* 57 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              57. Governing Law
            </h2>

            <p className="mt-4">
              These Terms are governed by the laws of Uganda, without prejudice
              to any mandatory rights or protections that may apply under
              another applicable law.
            </p>

            {/* 58 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              58. Jurisdiction
            </h2>

            <p className="mt-4">
              Subject to applicable mandatory dispute-resolution or consumer
              protection requirements, disputes arising from these Terms may be
              brought before courts with appropriate jurisdiction in Uganda.
            </p>

            {/* 59 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              59. Severability
            </h2>

            <p className="mt-4">
              If a provision of these Terms is found to be invalid,
              unenforceable, or unlawful, the remaining provisions will
              continue to apply to the extent permitted by law.
            </p>

            {/* 60 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              60. No Waiver
            </h2>

            <p className="mt-4">
              If AkiliBiz does not immediately enforce a provision of these
              Terms, that does not necessarily mean we waive the right to
              enforce it later.
            </p>

            {/* 61 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              61. Assignment
            </h2>

            <p className="mt-4">
              You may not transfer your rights or obligations under these Terms
              to another party without appropriate authorisation where the
              transfer would materially affect the agreement.
            </p>

            <p className="mt-4">
              AkiliBiz may transfer these Terms as part of a legitimate merger,
              restructuring, acquisition, financing, or transfer of the
              AkiliBiz business, subject to applicable law.
            </p>

            {/* 62 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              62. Entire Agreement
            </h2>

            <p className="mt-4">
              These Terms, together with any applicable product-specific terms,
              subscription agreement, Privacy Policy, Cookie Policy, order
              terms, and other documents expressly incorporated into them,
              constitute the agreement governing your use of the relevant
              AkiliBiz service.
            </p>

            {/* 63 */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              63. Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about these Terms, subscriptions, account
              access, billing, Marketplace transactions, or another
              terms-related matter, please contact us through our{" "}
              <Link
                href="/contact"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                contact page
              </Link>
              .
            </p>

            <p className="mt-4">
              Please provide enough information for us to identify the relevant
              account, business, transaction, subscription, or service when
              contacting us.
            </p>
          </article>
        </MarketingWideContainer>
      </section>
    </main>
  )
}
