import type { Metadata } from "next";
import Link from "next/link";

import { MarketingWideContainer } from "@/components/marketing/container"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AkiliBiz collects, uses, protects, retains, and shares personal information across its business platform, marketplace, websites, and related services.",
}

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              This Privacy Policy explains how AkiliBiz collects, uses,
              stores, protects, and shares personal information across our
              websites, business services, marketplace, applications, and
              related digital services.
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
            {/* Introduction */}
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              1. Introduction
            </h2>

            <p className="mt-4">
              AkiliBiz (&quot;AkiliBiz&quot;, &quot;we&quot;, &quot;our&quot;,
              or &quot;us&quot;) respects the privacy of the individuals and
              businesses who use our products and services.
            </p>

            <p className="mt-4">
              This Privacy Policy explains how personal information may be
              collected, used, disclosed, stored, transferred, and protected
              when you interact with AkiliBiz.
            </p>

            <p className="mt-4">
              AkiliBiz is being developed as a digital business ecosystem
              designed to help businesses manage sales, inventory, customers,
              suppliers, staff, finance, reporting, payments, and other
              operational activities.
            </p>

            <p className="mt-4">
              The platform may include desktop applications, web applications,
              mobile applications, marketplace services, payment functionality,
              websites, administrative portals, APIs, support services, and
              other related technologies.
            </p>

            <p className="mt-4">
              We seek to handle personal information responsibly and in
              accordance with applicable data protection and privacy
              requirements, including where applicable the laws of Uganda.
            </p>

            {/* Scope */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              2. Scope of This Privacy Policy
            </h2>

            <p className="mt-4">
              This Privacy Policy applies where it is displayed, linked, or
              otherwise incorporated into an AkiliBiz service.
            </p>

            <p className="mt-4">This may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>the AkiliBiz marketing website</li>
              <li>AkiliBiz Business Desktop</li>
              <li>AkiliBiz Business Web</li>
              <li>AkiliBiz business mobile applications</li>
              <li>the AkiliBiz Marketplace</li>
              <li>AkiliBiz customer mobile applications</li>
              <li>account and authentication services</li>
              <li>payment-related services</li>
              <li>software update and download services</li>
              <li>support and contact channels</li>
              <li>developer APIs and integrations</li>
              <li>cloud synchronisation services</li>
              <li>administrative and business management portals and</li>
              <li>
                other products or digital services that reference this policy.
              </li>
            </ul>

            <p className="mt-4">
              Some AkiliBiz products may provide additional privacy notices
              where a specific feature requires information beyond what is
              described in this general policy.
            </p>

            {/* Roles */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              3. Our Role When Processing Personal Information
            </h2>

            <p className="mt-4">
              The role AkiliBiz plays in relation to personal information may
              depend on how the platform is being used.
            </p>

            <p className="mt-4">
              In some situations, AkiliBiz determines why and how personal
              information is processed. Examples may include information used
              to operate our website, manage AkiliBiz accounts, secure the
              platform, provide customer support, process subscriptions, or
              communicate with prospective customers.
            </p>

            <p className="mt-4">
              In other situations, a business using AkiliBiz may determine why
              personal information about its employees, customers, suppliers,
              or other contacts is entered into the platform.
            </p>

            <p className="mt-4">
              In these circumstances, the business remains responsible for
              ensuring that it has an appropriate reason and, where required,
              legal authority to collect and use that information.
            </p>

            {/* Information categories */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              4. Information We May Collect
            </h2>

            <p className="mt-4">
              The information collected by AkiliBiz depends on the products and
              services you use and how you interact with us.
            </p>

            <p className="mt-4">
              We may collect the categories of information described below.
            </p>

            {/* Account */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.1 Account and Identity Information
            </h3>

            <p className="mt-3">
              When you create or use an AkiliBiz account, we may process
              information such as:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>full name</li>
              <li>username</li>
              <li>email address</li>
              <li>telephone number</li>
              <li>profile information</li>
              <li>account identifier</li>
              <li>authentication information</li>
              <li>preferred language</li>
              <li>account status</li>
              <li>business membership information and</li>
              <li>roles and permissions assigned within a business.</li>
            </ul>

            <p className="mt-4">
              Passwords should be stored using appropriate cryptographic
              protections. AkiliBiz does not intend to store account passwords
              in readable plain text.
            </p>

            {/* Business */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.2 Business Information
            </h3>

            <p className="mt-3">
              Businesses using AkiliBiz may provide information including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>business name</li>
              <li>business contact information</li>
              <li>business address</li>
              <li>industry or business category</li>
              <li>business branches or locations</li>
              <li>tax-related information</li>
              <li>subscription or plan information</li>
              <li>business settings</li>
              <li>branding information</li>
              <li>business identifiers</li>
              <li>merchant configuration information and</li>
              <li>authorised employees and account administrators.</li>
            </ul>

            <p className="mt-4">
              Some business information may not constitute personal
              information on its own, but it may become personal information
              when it identifies or relates to an individual such as a sole
              proprietor, business owner, employee, or contact person.
            </p>

            {/* Staff */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.3 Staff and Employee Information
            </h3>

            <p className="mt-3">
              Businesses may use AkiliBiz to manage authorised staff members.
              Depending on the features enabled, information may include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>employee name</li>
              <li>contact information</li>
              <li>staff identifier</li>
              <li>job role</li>
              <li>permissions</li>
              <li>employment-related settings</li>
              <li>account activity</li>
              <li>sales or operational activity attributed to that user</li>
              <li>login records and</li>
              <li>security or audit records.</li>
            </ul>

            {/* Customers */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.4 Customer Information
            </h3>

            <p className="mt-3">
              Businesses may use AkiliBiz to manage customers. Customer
              information may include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>customer name</li>
              <li>telephone number</li>
              <li>email address</li>
              <li>delivery or contact address</li>
              <li>customer account identifier</li>
              <li>purchase history</li>
              <li>sales records</li>
              <li>payment status</li>
              <li>amounts owed or paid</li>
              <li>customer notes</li>
              <li>preferences and</li>
              <li>marketplace activity where applicable.</li>
            </ul>

            <p className="mt-4">
              Businesses using AkiliBiz are responsible for ensuring that
              customer information they enter into the platform is collected
              and used appropriately.
            </p>

            {/* Suppliers */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.5 Supplier and Business Contact Information
            </h3>

            <p className="mt-3">
              AkiliBiz may store information about suppliers or other business
              contacts, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>supplier name</li>
              <li>contact person</li>
              <li>telephone number</li>
              <li>email address</li>
              <li>business address</li>
              <li>purchase or supply records</li>
              <li>amounts payable</li>
              <li>transaction history and</li>
              <li>business notes.</li>
            </ul>

            {/* Sales and operational */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.6 Sales and Transaction Information
            </h3>

            <p className="mt-3">
              AkiliBiz is designed to support business transactions. The
              platform may therefore process records relating to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>sales</li>
              <li>receipts</li>
              <li>products purchased</li>
              <li>quantities</li>
              <li>prices</li>
              <li>discounts</li>
              <li>tax amounts</li>
              <li>payment methods</li>
              <li>amounts paid</li>
              <li>outstanding balances</li>
              <li>refunds</li>
              <li>reversals</li>
              <li>transaction timestamps and</li>
              <li>the user or staff member responsible for an action.</li>
            </ul>

            {/* Payments */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.7 Payment Information
            </h3>

            <p className="mt-3">
              Where AkiliBiz facilitates electronic payments, we may process
              limited information necessary to initiate, verify, reconcile,
              display, or record payment transactions.
            </p>

            <p className="mt-4">This may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>payment provider</li>
              <li>payment method</li>
              <li>transaction reference</li>
              <li>transaction amount</li>
              <li>currency</li>
              <li>payment status</li>
              <li>payment timestamps</li>
              <li>provider-generated identifiers</li>
              <li>merchant identifiers</li>
              <li>
                customer telephone number where required for mobile money and
              </li>
              <li>
                reconciliation information necessary to confirm payment
                outcomes.
              </li>
            </ul>

            <p className="mt-4">
              Payment credentials, provider secrets, API secrets, or other
              sensitive infrastructure credentials should not be exposed to
              ordinary users or stored unnecessarily in client applications.
            </p>

            <p className="mt-4">
              Certain payment information may be processed directly by a mobile
              money operator, bank, card processor, payment gateway, or other
              payment service provider. Their own privacy terms may apply to
              information they process independently.
            </p>

            {/* Marketplace */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.8 Marketplace Information
            </h3>

            <p className="mt-3">
              Where AkiliBiz Marketplace services are available, information
              associated with marketplace activity may include:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>customer account information</li>
              <li>merchant information</li>
              <li>shopping carts</li>
              <li>saved products</li>
              <li>orders</li>
              <li>delivery details</li>
              <li>purchase history</li>
              <li>transaction information</li>
              <li>order status</li>
              <li>reviews or feedback where enabled</li>
              <li>support communications and</li>
              <li>marketplace preferences.</li>
            </ul>

            {/* Communications */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.9 Communications and Support Information
            </h3>

            <p className="mt-3">
              When you contact AkiliBiz, we may collect information contained
              in the communication, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>your name</li>
              <li>email address</li>
              <li>telephone number</li>
              <li>business name</li>
              <li>message content</li>
              <li>support request details</li>
              <li>attachments you choose to provide and</li>
              <li>our responses and follow-up communications.</li>
            </ul>

            {/* Device */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.10 Device and Technical Information
            </h3>

            <p className="mt-3">
              When you use online AkiliBiz services, certain technical
              information may be collected automatically, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>IP address</li>
              <li>browser type</li>
              <li>operating system</li>
              <li>device type</li>
              <li>application version</li>
              <li>language settings</li>
              <li>approximate region</li>
              <li>session identifiers</li>
              <li>request timestamps</li>
              <li>network information</li>
              <li>diagnostic information</li>
              <li>application errors and</li>
              <li>security-related events.</li>
            </ul>

            {/* Usage */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              4.11 Usage and Analytics Information
            </h3>

            <p className="mt-3">
              We may collect information about how our websites and services
              are used, such as:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>pages viewed</li>
              <li>features used</li>
              <li>navigation paths</li>
              <li>session duration</li>
              <li>referring pages</li>
              <li>interaction events</li>
              <li>application performance and</li>
              <li>aggregated usage statistics.</li>
            </ul>

            {/* Offline */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              5. Offline and Locally Stored Business Data
            </h2>

            <p className="mt-4">
              Some AkiliBiz products are designed using an offline-first
              architecture. This means certain business information may be
              stored locally on the device where the AkiliBiz application is
              installed.
            </p>

            <p className="mt-4">
              Locally stored information may include products, inventory,
              customers, suppliers, sales, financial records, staff
              information, application settings, and other business records.
            </p>

            <p className="mt-4">
              Businesses remain responsible for protecting devices on which
              local AkiliBiz data is stored, including implementing appropriate
              operating system security, device passwords, physical security,
              user permissions, and backup procedures.
            </p>

            <p className="mt-4">
              Future cloud synchronisation services may transfer selected
              locally generated data to AkiliBiz infrastructure where users or
              businesses choose to enable synchronisation or where it forms
              part of the service being provided.
            </p>

            {/* Sources */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              6. How We Obtain Information
            </h2>

            <p className="mt-4">
              We may obtain personal information through several sources,
              including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>directly from you</li>
              <li>from a business that creates an account for you</li>
              <li>
                from businesses that enter customer, supplier, or employee
                information into AkiliBiz
              </li>
              <li>automatically when you use our services</li>
              <li>through cookies and similar technologies</li>
              <li>from payment service providers</li>
              <li>from integrations you authorise</li>
              <li>from customer-support interactions</li>
              <li>from marketplace transactions and</li>
              <li>
                from publicly available sources where lawful and reasonably
                necessary.
              </li>
            </ul>

            {/* Uses */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              7. How We Use Personal Information
            </h2>

            <p className="mt-4">
              AkiliBiz may use personal information for purposes including the
              following.
            </p>

            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              7.1 Providing AkiliBiz Services
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>creating and managing accounts</li>
              <li>authenticating users</li>
              <li>maintaining sessions</li>
              <li>providing business-management features</li>
              <li>processing sales and operational records</li>
              <li>supporting inventory management</li>
              <li>supporting customer and supplier management</li>
              <li>generating reports</li>
              <li>supporting accounting and financial workflows</li>
              <li>facilitating marketplace services</li>
              <li>facilitating supported payment workflows</li>
              <li>providing software updates</li>
              <li>supporting backup and recovery functionality and</li>
              <li>providing customer support.</li>
            </ul>

            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              7.2 Security and Fraud Prevention
            </h3>

            <p className="mt-3">
              We may process information to protect AkiliBiz, businesses,
              customers, and users from security threats.
            </p>

            <p className="mt-4">This may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>detecting suspicious login activity</li>
              <li>preventing account takeover</li>
              <li>detecting misuse or abuse</li>
              <li>protecting payment workflows</li>
              <li>investigating security incidents</li>
              <li>maintaining audit records</li>
              <li>enforcing permissions</li>
              <li>preventing duplicate or fraudulent transactions and</li>
              <li>protecting infrastructure from malicious traffic.</li>
            </ul>

            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              7.3 Improving AkiliBiz
            </h3>

            <p className="mt-3">
              We may use information to understand how our services perform and
              identify opportunities to improve them.
            </p>

            <p className="mt-4">This may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>analysing product usage</li>
              <li>diagnosing software errors</li>
              <li>measuring performance</li>
              <li>improving usability</li>
              <li>developing new functionality</li>
              <li>testing platform reliability and</li>
              <li>understanding which services are useful to users.</li>
            </ul>

            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              7.4 Communications
            </h3>

            <p className="mt-3">
              We may use contact information to send communications relating
              to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>account activity</li>
              <li>security alerts</li>
              <li>service notices</li>
              <li>software updates</li>
              <li>changes to products or policies</li>
              <li>support requests</li>
              <li>billing or subscription matters</li>
              <li>important operational information and</li>
              <li>
                product news or marketing communications where permitted and
                appropriate.
              </li>
            </ul>

            {/* Legal bases */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              8. Grounds for Processing Personal Information
            </h2>

            <p className="mt-4">
              Depending on the applicable law and circumstances, AkiliBiz may
              process personal information where there is an appropriate legal
              or legitimate basis for doing so.
            </p>

            <p className="mt-4">This may include processing:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>with your consent</li>
              <li>
                where necessary to provide a service you have requested or
                perform an agreement
              </li>
              <li>to comply with applicable legal obligations</li>
              <li>
                where reasonably necessary to protect legitimate business or
                security interests
              </li>
              <li>
                where necessary to establish, exercise, or defend legal claims
              </li>
              <li>
                where another lawful basis recognised by applicable law
                applies.
              </li>
            </ul>

            <p className="mt-4">
              Where consent is required, we will seek to provide sufficient
              information to allow the individual to make an informed choice.
            </p>

            {/* Disclosure */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              9. How We Share Personal Information
            </h2>

            <p className="mt-4">
              AkiliBiz does not sell personal information as a business model.
            </p>

            <p className="mt-4">
              We may disclose information only where reasonably necessary for
              the operation of AkiliBiz, where authorised by the relevant user
              or business, or where another lawful reason applies.
            </p>

            {/* Service providers */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              9.1 Service Providers
            </h3>

            <p className="mt-3">
              We may use carefully selected service providers for functions
              such as:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>website hosting</li>
              <li>cloud infrastructure</li>
              <li>email delivery</li>
              <li>analytics</li>
              <li>security</li>
              <li>error monitoring</li>
              <li>authentication</li>
              <li>software distribution</li>
              <li>data storage</li>
              <li>payment processing and</li>
              <li>customer support.</li>
            </ul>

            <p className="mt-4">
              Where such providers process information on our behalf, we seek
              to limit the information made available to what is reasonably
              required for their function.
            </p>

            {/* Payments */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              9.2 Payment Providers
            </h3>

            <p className="mt-3">
              Payment-related information may be exchanged with payment
              operators, banks, mobile money providers, gateways, or other
              financial service providers where necessary to initiate,
              authenticate, complete, verify, refund, reverse, or reconcile a
              transaction.
            </p>

            {/* Business/customer */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              9.3 Businesses and Marketplace Participants
            </h3>

            <p className="mt-3">
              Marketplace transactions may require information to be shared
              between a customer and the business fulfilling an order.
            </p>

            <p className="mt-4">
              For example, a merchant may need access to information reasonably
              required to process an order, communicate with the customer, and
              arrange delivery or collection.
            </p>

            {/* Legal */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              9.4 Legal and Regulatory Disclosures
            </h3>

            <p className="mt-3">
              We may disclose information where reasonably necessary to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>comply with applicable law</li>
              <li>respond to a valid legal process</li>
              <li>respond to authorised regulatory authorities</li>
              <li>investigate fraud or criminal activity</li>
              <li>protect the rights or safety of users</li>
              <li>protect AkiliBiz systems or infrastructure or</li>
              <li>establish, exercise, or defend legal claims.</li>
            </ul>

            {/* Corporate changes */}
            <h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold tracking-tight text-ink-900">
              9.5 Business Reorganisation
            </h3>

            <p className="mt-3">
              If the business responsible for AkiliBiz undergoes a merger,
              acquisition, restructuring, financing transaction, sale of
              assets, or similar corporate event, relevant information may be
              transferred as part of that transaction subject to applicable
              legal requirements and appropriate safeguards.
            </p>

            {/* Security */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              10. Data Security
            </h2>

            <p className="mt-4">
              AkiliBiz seeks to implement reasonable administrative, technical,
              organisational, and physical measures appropriate to the nature
              of the information being processed.
            </p>

            <p className="mt-4">Security measures may include:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>authentication controls</li>
              <li>role-based access controls</li>
              <li>permission enforcement</li>
              <li>secure password handling</li>
              <li>encrypted network communications where appropriate</li>
              <li>audit logging</li>
              <li>transaction integrity controls</li>
              <li>database integrity protections</li>
              <li>backup verification</li>
              <li>restricted infrastructure access</li>
              <li>security monitoring</li>
              <li>credential separation</li>
              <li>software update mechanisms and</li>
              <li>security review and testing.</li>
            </ul>

            <p className="mt-4">
              However, no computer system, storage system, network, or method of
              electronic transmission can be guaranteed to be completely
              secure.
            </p>

            <p className="mt-4">
              Users and businesses also have an important role in protecting
              their information by securing devices, maintaining strong
              credentials, limiting account access, applying software updates,
              and avoiding unauthorised sharing of login information.
            </p>

            {/* Credential safety */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              11. Passwords and Sensitive Credentials
            </h2>

            <p className="mt-4">
              You should never send your AkiliBiz password, payment PIN,
              mobile-money PIN, API secret, private key, recovery credential,
              or other confidential authentication information through a
              general support request.
            </p>

            <p className="mt-4">
              AkiliBiz representatives should not require your mobile-money PIN
              or banking password in order to provide normal customer support.
            </p>

            {/* Audit logs */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              12. Activity Logs and Audit Records
            </h2>

            <p className="mt-4">
              Business-management systems require reliable records of important
              actions. AkiliBiz may therefore maintain activity logs or audit
              records relating to actions such as:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>logins</li>
              <li>account changes</li>
              <li>permission changes</li>
              <li>sales transactions</li>
              <li>inventory adjustments</li>
              <li>financial actions</li>
              <li>payment actions</li>
              <li>refunds or reversals</li>
              <li>administrative actions</li>
              <li>backup-related operations</li>
              <li>security events and</li>
              <li>other important system events.</li>
            </ul>

            <p className="mt-4">
              Audit information may be retained where reasonably necessary to
              preserve business integrity, investigate incidents, comply with
              legal obligations, or resolve disputes.
            </p>

            {/* Backups */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              13. Backups and Recovery
            </h2>

            <p className="mt-4">
              AkiliBiz may provide backup and recovery features to help
              businesses protect their operational records.
            </p>

            <p className="mt-4">
              A backup may contain personal information that exists in the
              business database at the time the backup is created.
            </p>

            <p className="mt-4">
              Businesses should therefore protect backup files with a level of
              care appropriate to the information they contain and should avoid
              transferring backups through insecure or unauthorised channels.
            </p>

            {/* Retention */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              14. Data Retention
            </h2>

            <p className="mt-4">
              We seek to retain personal information only for as long as
              reasonably necessary for the purpose for which it was collected
              or where another lawful reason requires retention.
            </p>

            <p className="mt-4">
              Retention periods may vary depending on factors such as:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>the type of information</li>
              <li>the AkiliBiz product being used</li>
              <li>whether an account remains active</li>
              <li>business record-keeping requirements</li>
              <li>accounting or tax requirements</li>
              <li>fraud-prevention requirements</li>
              <li>security requirements</li>
              <li>contractual obligations</li>
              <li>legal limitation periods</li>
              <li>dispute resolution and</li>
              <li>applicable laws and regulations.</li>
            </ul>

            <p className="mt-4">
              Some records, such as transaction, accounting, audit, or security
              records, may need to be retained even after an account is closed
              where there is a legitimate or legal reason for doing so.
            </p>

            {/* Deletion */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              15. Account Closure and Deletion
            </h2>

            <p className="mt-4">
              Where supported, account owners may request closure or deletion
              of their account.
            </p>

            <p className="mt-4">
              Account closure does not necessarily require immediate deletion
              of every record associated with an account.
            </p>

            <p className="mt-4">
              We may retain information where reasonably necessary for
              legitimate business records, transaction history, legal
              compliance, security, fraud prevention, dispute resolution,
              backups, or enforcement of agreements.
            </p>

            <p className="mt-4">
              Where information no longer needs to identify an individual, we
              may delete, aggregate, anonymise, or otherwise de-identify it
              where appropriate.
            </p>

            {/* Rights */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              16. Your Privacy Rights
            </h2>

            <p className="mt-4">
              Depending on applicable law and your relationship with AkiliBiz,
              you may have rights concerning personal information relating to
              you.
            </p>

            <p className="mt-4">These may include the right to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>ask whether personal information about you is being held</li>
              <li>request access to personal information</li>
              <li>request correction of inaccurate information</li>
              <li>request completion of incomplete information</li>
              <li>
                request deletion or destruction of information in circumstances
                recognised by applicable law
              </li>
              <li>
                object to or request restriction of certain processing where
                applicable
              </li>
              <li>withdraw consent where processing depends on consent</li>
              <li>object to certain direct marketing communications and</li>
              <li>
                lodge a complaint with an appropriate data protection
                authority.
              </li>
            </ul>

            <p className="mt-4">
              These rights are not necessarily absolute. A request may be
              limited where applicable law allows or requires information to be
              retained or processed for another reason.
            </p>

            {/* Business-controlled data */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              17. Requests Concerning Information Held by an AkiliBiz Business
            </h2>

            <p className="mt-4">
              In some circumstances, AkiliBiz stores or processes information
              under the direction of a business using the platform.
            </p>

            <p className="mt-4">
              If your information was provided to AkiliBiz by a shop, company,
              merchant, employer, or other organisation that uses AkiliBiz, you
              may need to direct your privacy request to that organisation
              first.
            </p>

            <p className="mt-4">
              Where appropriate, AkiliBiz may assist businesses in responding
              to valid requests relating to information stored through the
              platform.
            </p>

            {/* Verification */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              18. Verifying Privacy Requests
            </h2>

            <p className="mt-4">
              Before providing access to personal information or acting on
              certain privacy requests, we may need to verify the identity and
              authority of the person making the request.
            </p>

            <p className="mt-4">
              This helps prevent unauthorised individuals from obtaining,
              changing, or deleting someone else&aposs information.
            </p>

            <p className="mt-4">
              We will seek to request only the information reasonably necessary
              to verify a request.
            </p>

            {/* Uganda */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              19. Data Protection in Uganda
            </h2>

            <p className="mt-4">
              Where Uganda&aposs data protection laws apply, the handling of
              personal data may be subject to the Data Protection and Privacy
              Act, 2019, the Data Protection and Privacy Regulations, 2021, and
              other applicable requirements or guidance.
            </p>

            <p className="mt-4">
              Individuals may also have the right to raise concerns with the
              Personal Data Protection Office of Uganda where they believe
              their personal information has been handled contrary to
              applicable data protection requirements.
            </p>

            <p className="mt-4">
              We encourage individuals to contact us first where possible so
              that we have an opportunity to investigate and respond to the
              concern.
            </p>

            {/* International */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              20. International Data Transfers
            </h2>

            <p className="mt-4">
              AkiliBiz may rely on technology providers, hosting infrastructure,
              communication providers, security providers, or other service
              providers that operate in different countries.
            </p>

            <p className="mt-4">
              This means some information may be stored or processed outside
              the country in which it was originally collected.
            </p>

            <p className="mt-4">
              Where cross-border transfers occur, we seek to use appropriate
              contractual, organisational, technical, or other safeguards where
              required by applicable law.
            </p>

            {/* Cookies */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              21. Cookies and Similar Technologies
            </h2>

            <p className="mt-4">
              AkiliBiz websites and web applications may use cookies, local
              storage, authentication tokens, analytics technologies, and
              similar mechanisms.
            </p>

            <p className="mt-4">
              These technologies may be used for purposes such as security,
              authentication, preferences, analytics, fraud prevention, and
              maintaining website functionality.
            </p>

            <p className="mt-4">
              For more information, please review our{" "}
              <Link
                href="/cookies"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                Cookie Policy
              </Link>
              .
            </p>

            {/* Analytics */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              22. Analytics and Diagnostics
            </h2>

            <p className="mt-4">
              AkiliBiz may use analytics or diagnostic services to understand
              product usage, identify errors, monitor performance, and improve
              our services.
            </p>

            <p className="mt-4">
              Where reasonably possible, we aim to minimise the amount of
              personal information included in analytics and diagnostic
              information.
            </p>

            <p className="mt-4">
              We do not intend to include passwords, payment PINs, private API
              credentials, or similarly sensitive authentication information in
              ordinary analytics events.
            </p>

            {/* Marketing */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              23. Marketing Communications
            </h2>

            <p className="mt-4">
              Where permitted, AkiliBiz may send information about product
              releases, new services, platform improvements, events, offers, or
              other AkiliBiz developments.
            </p>

            <p className="mt-4">
              Where consent is required for direct marketing, we will seek such
              consent before sending those communications.
            </p>

            <p className="mt-4">
              You may unsubscribe from optional marketing communications using
              an available unsubscribe mechanism or by contacting us.
            </p>

            <p className="mt-4">
              Even if you opt out of marketing communications, we may still
              send important service, account, security, payment, or legal
              communications where necessary.
            </p>

            {/* Third party */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              24. Third-Party Services and Integrations
            </h2>

            <p className="mt-4">
              AkiliBiz may integrate with external services such as payment
              providers, communication services, cloud services, accounting
              services, authentication services, or other business tools.
            </p>

            <p className="mt-4">
              Where you intentionally connect a third-party service to AkiliBiz,
              information may be exchanged with that service as necessary to
              provide the integration.
            </p>

            <p className="mt-4">
              Third parties may process information under their own privacy
              policies. We encourage you to review those policies before
              enabling optional integrations.
            </p>

            {/* Links */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              25. Third-Party Links
            </h2>

            <p className="mt-4">
              AkiliBiz websites or services may contain links to websites,
              applications, social platforms, businesses, or services operated
              by third parties.
            </p>

            <p className="mt-4">
              AkiliBiz does not control the privacy practices of independent
              third parties simply because a link to them appears on our
              platform.
            </p>

            <p className="mt-4">
              You should review the applicable privacy information before
              providing personal information to an external service.
            </p>

            {/* Children */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              26. Children&aposs Privacy
            </h2>

            <p className="mt-4">
              AkiliBiz Business services are primarily intended for businesses,
              entrepreneurs, employees, and individuals using the services in a
              commercial or professional context.
            </p>

            <p className="mt-4">
              We do not knowingly seek to collect personal information from
              children through business-management services where the service
              is not intended for them.
            </p>

            <p className="mt-4">
              If future Marketplace or consumer services are made available to
              younger users, AkiliBiz will assess the applicable age,
              parental-consent, and child-data protection requirements for
              those services.
            </p>

            {/* Automated decisions */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              27. Automated Processing and Future Intelligent Features
            </h2>

            <p className="mt-4">
              AkiliBiz may introduce automation, recommendations, analytics, or
              intelligent features intended to help businesses understand their
              operations.
            </p>

            <p className="mt-4">
              If we introduce features that use personal information for
              automated decision-making in a manner that significantly affects
              individuals, we will assess the applicable privacy requirements
              and provide additional information or controls where required.
            </p>

            {/* Aggregated */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              28. Aggregated and De-Identified Information
            </h2>

            <p className="mt-4">
              We may aggregate or de-identify information so that it no longer
              reasonably identifies a particular individual.
            </p>

            <p className="mt-4">
              Such information may be used to understand general business
              trends, improve product performance, conduct research, plan
              features, or generate platform-level statistics.
            </p>

            <p className="mt-4">
              We will seek not to intentionally re-identify information that
              has been properly anonymised except where necessary to test or
              validate privacy protections or where otherwise permitted by law.
            </p>

            {/* Breach */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              29. Data Incidents
            </h2>

            <p className="mt-4">
              If we become aware of a security incident involving personal
              information, we may investigate the incident, take reasonable
              steps to contain it, restore system integrity, preserve relevant
              evidence, and reduce the risk of further harm.
            </p>

            <p className="mt-4">
              Where notification to affected individuals or regulators is
              required by applicable law, we will take appropriate steps to
              provide such notification.
            </p>

            {/* Business responsibilities */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              30. Responsibilities of Businesses Using AkiliBiz
            </h2>

            <p className="mt-4">
              Businesses using AkiliBiz are responsible for how they collect
              and use personal information about their own customers,
              employees, suppliers, and other contacts.
            </p>

            <p className="mt-4">Businesses should:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>collect only information reasonably required</li>
              <li>provide appropriate privacy information where necessary</li>
              <li>obtain consent where applicable law requires it</li>
              <li>keep information accurate where reasonably possible</li>
              <li>restrict staff access appropriately</li>
              <li>avoid sharing accounts between unauthorised users</li>
              <li>protect devices that contain business information</li>
              <li>maintain appropriate backups</li>
              <li>respond appropriately to customer privacy requests and</li>
              <li>comply with applicable privacy and data protection laws.</li>
            </ul>

            {/* Accuracy */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              31. Accuracy of Information
            </h2>

            <p className="mt-4">
              We encourage users and businesses to keep account and contact
              information accurate and up to date.
            </p>

            <p className="mt-4">
              Where AkiliBiz provides tools for editing information, authorised
              users may be able to correct information directly through the
              applicable product.
            </p>

            {/* Changes */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              32. Changes to This Privacy Policy
            </h2>

            <p className="mt-4">
              AkiliBiz will continue to evolve, and this Privacy Policy may be
              updated periodically to reflect:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>new AkiliBiz products</li>
              <li>new marketplace functionality</li>
              <li>payment integrations</li>
              <li>cloud synchronisation</li>
              <li>mobile applications</li>
              <li>new infrastructure providers</li>
              <li>new security practices</li>
              <li>changes in data protection requirements or</li>
              <li>changes in how information is processed.</li>
            </ul>

            <p className="mt-4">
              When this policy is updated, we will revise the{" "}
              <strong className="font-semibold text-ink-800">
                &quot;Last updated&quot;
              </strong>{" "}
              date at the top of this page.
            </p>

            <p className="mt-4">
              Where a change is material or where applicable law requires
              additional notice, we may communicate the change through the
              AkiliBiz website, application, email, account notice, or another
              appropriate method.
            </p>

            {/* Contact */}
            <h2 className="mt-12 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
              33. Contact Us
            </h2>

            <p className="mt-4">
              If you have questions about this Privacy Policy, how AkiliBiz
              processes personal information, or wish to make a privacy-related
              request, please contact us through our{" "}
              <Link
                href="/contact"
                className="font-medium text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-800"
              >
                contact page
              </Link>
              .
            </p>

            <p className="mt-4">
              When submitting a privacy request, please provide enough
              information for us to identify the relevant account, service, or
              processing activity.
            </p>

            <p className="mt-4">
              Please do not include passwords, payment PINs, mobile-money PINs,
              private API credentials, or other unnecessary sensitive
              credentials in your request.
            </p>
          </article>
        </MarketingWideContainer>
      </section>
    </main>
  )
}
