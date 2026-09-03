import type { FAQItem } from "@/components/marketing/faq-accordion";

export type FAQGroup = {
  slug: string;
  label: string;
  shortDescription: string;
  items: FAQItem[];
};

export const faqGroups: FAQGroup[] = [
  {
    slug: "getting-started",
    label: "Getting Started",
    shortDescription:
      "What AkiliBiz is, who it is for, installation, setup, and getting your business ready to use the platform.",
    items: [
      {
        question: "What is AkiliBiz?",
        answer:
          "AkiliBiz is a business management platform designed to help small and growing businesses manage everyday operations such as sales, products, inventory, customers, suppliers, staff, finance, and reporting from one organised system.",
      },
      {
        question: "Who is AkiliBiz designed for?",
        answer:
          "AkiliBiz is designed for small and growing businesses that want better control of their day-to-day operations without depending on complicated or expensive enterprise systems.",
      },
      {
        question: "What types of businesses can use AkiliBiz?",
        answer:
          "AkiliBiz can support many product-based and service-oriented businesses, including retail shops, wholesalers, pharmacies, hardware stores, boutiques, electronics shops, restaurants, distributors, service providers, and other growing businesses.",
      },
      {
        question: "Do I need technical knowledge to use AkiliBiz?",
        answer:
          "No. AkiliBiz is being designed for everyday business users. Most common activities such as recording sales, adding products, checking stock, and viewing reports are intended to be straightforward without requiring technical expertise.",
      },
      {
        question: "Which computers can run AkiliBiz?",
        answer:
          "AkiliBiz Desktop is available for supported Windows, macOS, and Linux computers. Visit the Download page to choose the installer that matches your operating system.",
      },
      {
        question: "How do I download AkiliBiz?",
        answer:
          "Visit the AkiliBiz Download page, choose your operating system, select the appropriate installer, and follow the installation instructions provided for your platform.",
      },
      {
        question: "How do I install AkiliBiz?",
        answer:
          "After downloading the correct installer, open it and follow the installation steps for your operating system. Additional installation guidance is available in the AkiliBiz documentation.",
      },
      {
        question: "How do I get started after installing AkiliBiz?",
        answer:
          "Start by creating or confirming your business profile, adding product categories and products, entering your opening stock, creating staff accounts where necessary, and reviewing your business settings before recording live transactions.",
      },
      {
        question: "Do I need to create an account before using AkiliBiz Desktop?",
        answer:
          "AkiliBiz Desktop uses local business and staff access controls. Cloud accounts and broader AkiliBiz ecosystem identity features will become more important as web, mobile, synchronisation, and marketplace services are introduced.",
      },
      {
        question: "Can I try AkiliBiz before choosing a paid plan?",
        answer:
          "Trial, onboarding, and plan availability may change as AkiliBiz develops. Check the Pricing page or contact the AkiliBiz team for the currently available options.",
      },
      {
        question: "Can AkiliBiz help me move from paper records or spreadsheets?",
        answer:
          "Yes. AkiliBiz is intended to help businesses move from scattered notebooks, spreadsheets, and manual records into a more structured digital workflow.",
      },
      {
        question: "Can someone help me set up AkiliBiz for my business?",
        answer:
          "Yes. Setup assistance may be available for businesses that need help preparing products, opening stock, staff access, business settings, or other initial configuration.",
      },
    ],
  },

  {
    slug: "sales-and-pos",
    label: "Sales & POS",
    shortDescription:
      "Recording sales, checkout, payments, receipts, sales history, and everyday point-of-sale operations.",
    items: [
      {
        question: "Can I use AkiliBiz as a point-of-sale system?",
        answer:
          "Yes. AkiliBiz Desktop includes point-of-sale functionality for selecting products, calculating totals, recording payments, completing sales, and keeping a sales history.",
      },
      {
        question: "Can I record cash sales?",
        answer:
          "Yes. Cash transactions can be recorded as part of the normal sales workflow.",
      },
      {
        question: "Can I accept more than one payment method for a sale?",
        answer:
          "AkiliBiz supports structured payment recording, including split-payment workflows where a transaction may be paid using more than one supported payment method.",
      },
      {
        question: "Can I record credit sales?",
        answer:
          "AkiliBiz includes customer and receivable-related functionality that can support tracking amounts owed where credit workflows are enabled.",
      },
      {
        question: "Can I see previous sales?",
        answer:
          "Yes. Sales History allows authorised users to review completed transactions and related sale information.",
      },
      {
        question: "Can I search or filter previous sales?",
        answer:
          "Yes. Sales history includes filtering and lookup capabilities to make it easier to find relevant transactions.",
      },
      {
        question: "Can I issue receipts?",
        answer:
          "AkiliBiz is designed to support receipt generation and printing workflows. Printer integration and dedicated AkiliBiz-compatible printing hardware will continue to expand as the ecosystem develops.",
      },
      {
        question: "Can a cashier use AkiliBiz without accessing sensitive reports?",
        answer:
          "Yes. Staff permissions can restrict users to the parts of the system required for their role, such as allowing point-of-sale access without granting broader administrative or financial permissions.",
      },
      {
        question: "Does completing a sale update stock automatically?",
        answer:
          "Yes. Sales involving tracked inventory are designed to update the relevant stock records so that available quantities remain aligned with business activity.",
      },
      {
        question: "What happens if a sale needs to be corrected?",
        answer:
          "AkiliBiz is being designed around auditable business records. Corrections should be handled through controlled workflows rather than silently rewriting important historical transaction information.",
      },
    ],
  },

  {
    slug: "inventory-and-products",
    label: "Products & Inventory",
    shortDescription:
      "Products, categories, stock quantities, adjustments, low-stock monitoring, imports, and inventory records.",
    items: [
      {
        question: "Can I add and manage products?",
        answer:
          "Yes. You can create and manage products together with information required for selling and tracking them within your business.",
      },
      {
        question: "Can I organise products into categories?",
        answer:
          "Yes. Categories help organise products and make them easier to manage, search, report on, and use during everyday operations.",
      },
      {
        question: "Can I track stock quantities?",
        answer:
          "Yes. AkiliBiz records inventory quantities and stock movements so you can monitor how much stock is available.",
      },
      {
        question: "Can I see low-stock products?",
        answer:
          "Yes. AkiliBiz can help identify products approaching low-stock levels so that businesses can plan restocking earlier.",
      },
      {
        question: "Can I record opening stock?",
        answer:
          "Yes. Opening stock can be prepared when setting up inventory so that AkiliBiz begins with quantities that reflect your existing business stock.",
      },
      {
        question: "Can I adjust stock manually?",
        answer:
          "Yes. Authorised users can make controlled inventory adjustments when stock needs to be corrected for reasons such as damage, counting differences, or other operational events.",
      },
      {
        question: "Does AkiliBiz keep a history of stock changes?",
        answer:
          "Yes. Inventory activity is designed to preserve stock movement information so that businesses can understand how quantities changed over time.",
      },
      {
        question: "Can I import products from a CSV file?",
        answer:
          "Yes. Product and category imports can help businesses move existing records into AkiliBiz without entering every item manually.",
      },
      {
        question: "Does AkiliBiz validate imported product information?",
        answer:
          "Yes. Import workflows include validation so that incorrect or incomplete data can be identified before it becomes part of your business records.",
      },
      {
        question: "Can I manage products with different prices?",
        answer:
          "AkiliBiz supports product pricing as part of product management. More advanced pricing structures may be introduced as additional business workflows are developed.",
      },
      {
        question: "Can AkiliBiz track stock across multiple branches?",
        answer:
          "Full multi-location inventory management is part of the broader multi-business and synchronised AkiliBiz platform direction. Availability will depend on the product version and plan being used.",
      },
    ],
  },

  {
    slug: "customers-and-suppliers",
    label: "Customers & Suppliers",
    shortDescription:
      "Managing customer records, supplier information, balances, transaction relationships, and business contacts.",
    items: [
      {
        question: "Can I keep customer records in AkiliBiz?",
        answer:
          "Yes. AkiliBiz allows businesses to maintain customer information for use in sales, balances, and other customer-related workflows.",
      },
      {
        question: "Can I keep supplier records?",
        answer:
          "Yes. Supplier information can be maintained to help organise purchasing, balances, and supplier relationships.",
      },
      {
        question: "Can I see what a customer owes me?",
        answer:
          "AkiliBiz includes receivable-related reporting and customer records that can help businesses monitor outstanding amounts where applicable.",
      },
      {
        question: "Can I see what I owe suppliers?",
        answer:
          "Yes. Payable-related information can help businesses monitor supplier obligations where those workflows are being used.",
      },
      {
        question: "Will customers eventually have their own AkiliBiz accounts?",
        answer:
          "Customer-facing identity and account functionality is planned as part of the AkiliBiz Marketplace and future customer applications.",
      },
    ],
  },

  {
    slug: "staff-and-permissions",
    label: "Staff & Permissions",
    shortDescription:
      "Staff accounts, user roles, permissions, access control, and accountability within your business.",
    items: [
      {
        question: "Can more than one staff member use AkiliBiz?",
        answer:
          "Yes. AkiliBiz Desktop supports multiple staff accounts so employees can access the system using their own credentials.",
      },
      {
        question: "Can I control what each staff member can access?",
        answer:
          "Yes. Role-based permissions allow businesses to control access according to responsibilities such as sales, stock management, reporting, administration, and other functions.",
      },
      {
        question: "Can I create different roles for managers and cashiers?",
        answer:
          "Yes. Different permissions can be assigned so that a manager may have broader access while a cashier only sees the functions required for sales.",
      },
      {
        question: "Does AkiliBiz record staff activity?",
        answer:
          "AkiliBiz includes activity and audit-related records intended to improve accountability for important actions performed within the system.",
      },
      {
        question: "Can I disable a staff account?",
        answer:
          "Staff access can be managed so that users who should no longer access the business system can be restricted appropriately.",
      },
      {
        question: "Can staff share one login?",
        answer:
          "Individual staff accounts are recommended because they provide clearer access control and a more reliable record of who performed important actions.",
      },
    ],
  },

  {
    slug: "finance-tax-and-reporting",
    label: "Finance, Tax & Reporting",
    shortDescription:
      "Business reports, VAT, receivables, payables, journals, financial visibility, and accounting foundations.",
    items: [
      {
        question: "What reports are available in AkiliBiz?",
        answer:
          "AkiliBiz provides operational and financial reporting across areas such as sales, inventory, receivables, payables, and other business records.",
      },
      {
        question: "Can I track VAT in AkiliBiz?",
        answer:
          "Yes. AkiliBiz includes VAT-related functionality to help supported businesses record tax information alongside transactions.",
      },
      {
        question: "Is AkiliBiz designed for Ugandan businesses?",
        answer:
          "Yes. AkiliBiz is being developed with Ugandan and broader African business environments in mind, including local operating conditions, currency, taxes, mobile payments, and connectivity challenges.",
      },
      {
        question: "Does AkiliBiz support Ugandan shillings?",
        answer:
          "Yes. Uganda Shillings are supported as a primary business currency for the Ugandan market.",
      },
      {
        question: "Can I view sales performance?",
        answer:
          "Yes. Reporting and dashboard features are intended to help businesses understand sales activity and operational performance.",
      },
      {
        question: "Can I track money owed by customers?",
        answer:
          "Yes. Receivable-related records and reporting can help track customer balances where credit transactions are used.",
      },
      {
        question: "Can I track money owed to suppliers?",
        answer:
          "Yes. Payable-related information can help businesses understand outstanding supplier obligations.",
      },
      {
        question: "Does AkiliBiz include accounting features?",
        answer:
          "AkiliBiz includes a growing accounting and financial-record foundation. The platform will continue expanding toward more complete financial management as development progresses.",
      },
      {
        question: "Can AkiliBiz replace my accountant?",
        answer:
          "No. AkiliBiz helps organise business records and provide financial visibility, but professional accounting, tax interpretation, auditing, and regulatory advice may still require a qualified accountant or tax professional.",
      },
      {
        question: "Can reports be exported?",
        answer:
          "Export capabilities are part of the platform direction and are available in selected workflows. Additional export and reporting formats will continue to be introduced.",
      },
    ],
  },

  {
    slug: "data-and-security",
    label: "Data & Security",
    shortDescription:
      "Local data storage, authentication, backups, recovery, privacy, auditability, and protection of business records.",
    items: [
      {
        question: "Where is my business data stored?",
        answer:
          "AkiliBiz Desktop currently keeps its working business data locally on the computer where the application is installed.",
      },
      {
        question: "Does AkiliBiz store my desktop business data in the cloud?",
        answer:
          "The current desktop experience is offline-first and primarily uses local storage. Cloud services will become more important for features such as synchronisation, web access, mobile access, payments, and marketplace services.",
      },
      {
        question: "Does AkiliBiz work without internet?",
        answer:
          "Yes. AkiliBiz Desktop is designed to continue supporting core business operations when internet connectivity is unavailable or unreliable.",
      },
      {
        question: "What can I do while offline?",
        answer:
          "Core local workflows such as managing products, recording supported sales, checking local inventory, and accessing locally stored business records are designed to remain available without a continuous internet connection.",
      },
      {
        question: "Which features will require internet access?",
        answer:
          "Cloud synchronisation, remote access, marketplace services, online payments, software updates, and other connected services may require internet access.",
      },
      {
        question: "Can I back up my AkiliBiz data?",
        answer:
          "Yes. AkiliBiz includes backup functionality so that businesses can protect important local data.",
      },
      {
        question: "Can AkiliBiz verify that a backup is valid?",
        answer:
          "AkiliBiz backup workflows are designed to verify backup integrity so that invalid or damaged backup files can be identified before they are relied upon.",
      },
      {
        question: "What happens if my computer is lost or damaged?",
        answer:
          "If your only copy of AkiliBiz data is stored on that computer, losing the device may also mean losing the data. Regular backups should therefore be stored safely in a separate location.",
      },
      {
        question: "How often should I create backups?",
        answer:
          "Businesses should back up frequently enough that losing activity since the last backup would be acceptable. For businesses with daily sales, a daily backup routine is strongly recommended.",
      },
      {
        question: "Can staff access data they are not authorised to see?",
        answer:
          "AkiliBiz uses staff permissions and access controls to limit functionality according to assigned roles.",
      },
      {
        question: "Does AkiliBiz keep an audit trail?",
        answer:
          "Important business actions are increasingly designed around auditability so that sensitive changes can be traced rather than silently overwritten.",
      },
      {
        question: "Does AkiliBiz collect my passwords or payment-provider secrets?",
        answer:
          "Sensitive credentials are handled according to the security requirements of the relevant service. Production payment-provider secrets are not intended to be stored inside the desktop application.",
      },
    ],
  },

  {
    slug: "devices-sync-and-remote-access",
    label: "Devices & Synchronisation",
    shortDescription:
      "Using AkiliBiz across computers, branches, web browsers, mobile devices, and future synchronised environments.",
    items: [
      {
        question: "Can I use AkiliBiz on more than one computer?",
        answer:
          "The current AkiliBiz Desktop experience is best treated as an offline-first workspace on one primary business computer. Multi-device synchronisation is part of the platform's ongoing development.",
      },
      {
        question: "Can several computers share the same AkiliBiz database?",
        answer:
          "Directly sharing a local desktop database across multiple computers is not the recommended deployment model. Future synchronisation services are intended to provide safer multi-device access.",
      },
      {
        question: "Will AkiliBiz support multiple branches?",
        answer:
          "Multi-location and broader multi-business capabilities are part of the longer-term AkiliBiz platform architecture and will be introduced progressively.",
      },
      {
        question: "Will my desktop data eventually synchronise with AkiliBiz Web?",
        answer:
          "That is part of the intended ecosystem direction. Synchronisation must be introduced carefully to protect data integrity, offline operation, and conflict handling.",
      },
      {
        question: "Will I be able to check my business remotely?",
        answer:
          "Yes. AkiliBiz Business Web and future mobile applications are intended to provide remote visibility and management once those connected services are available.",
      },
      {
        question: "Will AkiliBiz continue working if synchronisation is unavailable?",
        answer:
          "The platform is being designed around an offline-first approach so that temporary connectivity problems do not prevent essential local business operations.",
      },
    ],
  },

  {
    slug: "payments",
    label: "Payments",
    shortDescription:
      "Cash, mobile money, online payments, payment security, reconciliation, and the future AkiliBiz payment experience.",
    items: [
      {
        question: "Can I record customer payments in AkiliBiz?",
        answer:
          "Yes. AkiliBiz supports payment recording as part of sales and financial workflows.",
      },
      {
        question: "Does AkiliBiz support Mobile Money?",
        answer:
          "Mobile Money integration is being developed as part of AkiliBiz's connected payment architecture. Availability will depend on provider integration, business eligibility, and the AkiliBiz product being used.",
      },
      {
        question: "Will AkiliBiz support MTN Mobile Money?",
        answer:
          "MTN Mobile Money support is part of the planned payment integration work for markets where the required provider services are available.",
      },
      {
        question: "Will AkiliBiz support Airtel Money?",
        answer:
          "Airtel Money support is also part of the planned payment ecosystem, subject to the available provider integration requirements and production readiness.",
      },
      {
        question: "Can AkiliBiz store my Mobile Money API secrets on the desktop computer?",
        answer:
          "Production payment credentials are not intended to be stored inside AkiliBiz Desktop. Connected payment processing is designed to use secure server-side infrastructure for provider credentials and verification.",
      },
      {
        question: "What happens if a Mobile Money payment stays pending?",
        answer:
          "Connected payment workflows are designed to distinguish pending, successful, failed, cancelled, expired, reversed, and refunded outcomes so that a transaction is not incorrectly treated as paid.",
      },
      {
        question: "Can AkiliBiz prevent the same online payment from being recorded twice?",
        answer:
          "Payment architecture is being designed with idempotency and provider-event verification so that repeated delivery of the same confirmed event does not create duplicate payment records.",
      },
      {
        question: "Will AkiliBiz support card payments?",
        answer:
          "Card payments are part of the longer-term payment roadmap but are not the first payment integration being prioritised.",
      },
    ],
  },

  {
    slug: "receipts-and-printing",
    label: "Receipts & Printing",
    shortDescription:
      "Receipt generation, supported printers, future AkiliBiz printing hardware, and everyday checkout printing.",
    items: [
      {
        question: "Can AkiliBiz print receipts?",
        answer:
          "Receipt printing is part of the AkiliBiz point-of-sale direction and will be supported through compatible printing workflows.",
      },
      {
        question: "What type of printer can I use with AkiliBiz?",
        answer:
          "Printer compatibility will depend on the operating system, connection method, and receipt-printing implementation available in the AkiliBiz version you are using.",
      },
      {
        question: "Will AkiliBiz sell its own receipt printers?",
        answer:
          "Dedicated AkiliBiz-compatible printing hardware is being considered as part of the wider ecosystem so businesses can purchase hardware that is already suited to AkiliBiz workflows.",
      },
      {
        question: "Why would AkiliBiz offer its own printers?",
        answer:
          "The goal would be to reduce compatibility problems and make it easier for businesses to obtain printers that work reliably with AkiliBiz for receipts and related business documents.",
      },
      {
        question: "Will AkiliBiz support other business hardware?",
        answer:
          "Additional hardware integrations such as barcode scanners, cash drawers, and other point-of-sale accessories may be considered as the platform expands.",
      },
    ],
  },

  {
    slug: "pricing-and-plans",
    label: "Pricing & Plans",
    shortDescription:
      "Subscriptions, available plans, billing, upgrades, business size, and how AkiliBiz pricing works.",
    items: [
      {
        question: "How much does AkiliBiz cost?",
        answer:
          "AkiliBiz offers different plans intended for businesses with different needs. Refer to the Pricing page for the latest available packages and included features.",
      },
      {
        question: "How do AkiliBiz subscriptions work?",
        answer:
          "Subscription structures are being developed around different business needs and product capabilities. Current plan arrangements and available billing methods are shown on the Pricing page or can be confirmed with the AkiliBiz team.",
      },
      {
        question: "Are all AkiliBiz features included in every plan?",
        answer:
          "Not necessarily. Some capabilities may depend on the selected plan, business requirements, connected services, or products being used.",
      },
      {
        question: "Can I upgrade my AkiliBiz plan later?",
        answer:
          "The platform is being designed so businesses can move to more capable plans as their requirements grow.",
      },
      {
        question: "Can I downgrade my plan?",
        answer:
          "Plan changes will depend on the subscription rules that apply at the time. Some downgrades may require checking whether currently used features exceed the lower plan's limits.",
      },
      {
        question: "Will there be monthly and annual plans?",
        answer:
          "Billing options will be presented on the Pricing page as subscription management becomes fully available.",
      },
      {
        question: "Will I have to pay separately for AkiliBiz Marketplace?",
        answer:
          "Marketplace pricing and commercial terms have not yet been finalised publicly. They may differ from AkiliBiz Business subscriptions because marketplace services involve different infrastructure and customer-facing capabilities.",
      },
      {
        question: "Are payment-processing fees included in my AkiliBiz subscription?",
        answer:
          "Third-party payment providers may charge transaction or service fees separately from any AkiliBiz subscription. Applicable charges will depend on the payment provider and service being used.",
      },
      {
        question: "Do I need a more expensive plan as my business grows?",
        answer:
          "Possibly. Larger businesses may require additional staff access, branches, reporting, connected services, or other capabilities that are offered under higher plans.",
      },
    ],
  },

  {
    slug: "updates-and-support",
    label: "Updates & Support",
    shortDescription:
      "Software updates, help, documentation, troubleshooting, feedback, and contacting the AkiliBiz team.",
    items: [
      {
        question: "Does AkiliBiz receive software updates?",
        answer:
          "Yes. AkiliBiz Desktop is designed to receive new releases containing improvements, fixes, security updates, and additional functionality.",
      },
      {
        question: "How do I know when a new version is available?",
        answer:
          "Release information may be provided through the AkiliBiz website, application update mechanisms, documentation, and official AkiliBiz communication channels.",
      },
      {
        question: "Where can I see AkiliBiz announcements and updates?",
        answer:
          "You can follow official updates through the AkiliBiz website and the official AkiliBiz WhatsApp Channel.",
      },
      {
        question: "Where can I find AkiliBiz documentation?",
        answer:
          "The AkiliBiz website includes a Documentation section covering setup, daily operations, data management, and other product guidance.",
      },
      {
        question: "What should I do if AkiliBiz is not working correctly?",
        answer:
          "Start by checking the relevant documentation and ensuring you are using a supported version. If the problem continues, contact AkiliBiz support with a clear description of what happened.",
      },
      {
        question: "What information should I provide when reporting a problem?",
        answer:
          "Provide the AkiliBiz version you are using, your operating system, the feature involved, what you expected to happen, what actually happened, and any error message shown. Avoid sending passwords or other sensitive credentials.",
      },
      {
        question: "Can I request a new feature?",
        answer:
          "Yes. Feedback from businesses is useful for shaping AkiliBiz. Feature requests can be shared with the AkiliBiz team for consideration alongside product priorities and technical requirements.",
      },
      {
        question: "Can AkiliBiz provide onboarding or training?",
        answer:
          "Guided setup, documentation, and other onboarding support may be offered depending on the business and selected service arrangements.",
      },
      {
        question: "Where can I contact AkiliBiz?",
        answer:
          "Use the Contact page on the AkiliBiz website to reach the team for product, pricing, onboarding, partnership, or support enquiries.",
      },
    ],
  },

  {
    slug: "business-web",
    label: "AkiliBiz Business Web",
    shortDescription:
      "The upcoming browser-based AkiliBiz experience for remote business management and connected operations.",
    items: [
      {
        question: "Will there be a web version of AkiliBiz?",
        answer:
          "Yes. AkiliBiz Business Web is planned as a browser-based experience for accessing and managing supported business operations remotely.",
      },
      {
        question: "Will AkiliBiz Business Web replace the desktop application?",
        answer:
          "No. The goal is for the products to complement each other. Desktop remains important for reliable offline-first operations, while Business Web will support connected and remote workflows.",
      },
      {
        question: "Will I be able to use AkiliBiz from any browser?",
        answer:
          "Supported modern browsers will be targeted when AkiliBiz Business Web becomes publicly available.",
      },
      {
        question: "Will changes made on the web appear on my desktop?",
        answer:
          "Synchronised business data is part of the intended architecture, but it will only be introduced when the required data-integrity and conflict-handling systems are ready.",
      },
      {
        question: "When will AkiliBiz Business Web be available?",
        answer:
          "AkiliBiz Business Web is under development. Public release dates will be announced through official AkiliBiz channels when the product reaches the required level of readiness.",
      },
    ],
  },

  {
    slug: "mobile-apps",
    label: "AkiliBiz Mobile Apps",
    shortDescription:
      "Upcoming mobile experiences for business owners, staff, marketplace customers, and connected business activity.",
    items: [
      {
        question: "Will AkiliBiz have a mobile app?",
        answer:
          "Yes. Mobile experiences are planned as part of the broader AkiliBiz ecosystem.",
      },
      {
        question: "Will business owners have their own mobile app?",
        answer:
          "Yes. A business-focused mobile experience is planned to provide convenient access to selected business information and operations away from the main desktop workstation.",
      },
      {
        question: "Will customers have an AkiliBiz mobile app?",
        answer:
          "Yes. Customer-facing mobile functionality is planned around the AkiliBiz Marketplace experience.",
      },
      {
        question: "Will staff be able to use AkiliBiz from their phones?",
        answer:
          "Selected staff workflows may become available through future mobile products depending on business permissions and the functionality released.",
      },
      {
        question: "Are the AkiliBiz mobile apps available now?",
        answer:
          "No. They are part of the planned ecosystem and will be announced through official AkiliBiz channels when ready for public use.",
      },
    ],
  },

  {
    slug: "marketplace",
    label: "AkiliBiz Marketplace",
    shortDescription:
      "How customers will discover businesses, browse products, place orders, pay, and interact with businesses online.",
    items: [
      {
        question: "What is AkiliBiz Marketplace?",
        answer:
          "AkiliBiz Marketplace is a planned customer-facing platform that will allow participating businesses to present products or services to customers online.",
      },
      {
        question: "Will customers be able to find my business on AkiliBiz Marketplace?",
        answer:
          "Participating businesses are expected to have marketplace visibility so customers can discover them and view the products or services they make available.",
      },
      {
        question: "Will customers be able to browse my products online?",
        answer:
          "Yes. Product discovery and browsing are core parts of the planned marketplace experience.",
      },
      {
        question: "Will customers be able to place orders through AkiliBiz?",
        answer:
          "Yes. Online ordering is a major planned capability of AkiliBiz Marketplace.",
      },
      {
        question: "Will Marketplace orders appear in my AkiliBiz business system?",
        answer:
          "The intended ecosystem is for marketplace activity to connect with participating businesses so orders and related business information can be handled through AkiliBiz.",
      },
      {
        question: "Will customers be able to pay online?",
        answer:
          "Online payments, including supported Mobile Money options, are planned as part of connected AkiliBiz marketplace services.",
      },
      {
        question: "Will every AkiliBiz business automatically appear on the Marketplace?",
        answer:
          "Marketplace participation may require activation, eligibility, configuration, and appropriate plan or merchant setup rather than automatically publishing every business.",
      },
      {
        question: "Can I choose which products appear on the Marketplace?",
        answer:
          "The marketplace is intended to give businesses control over the products or services they make available to customers online.",
      },
      {
        question: "Will AkiliBiz handle deliveries?",
        answer:
          "Delivery and fulfilment capabilities may evolve as the Marketplace grows. The initial scope may focus on connecting customers, businesses, orders, and payments before broader logistics services are introduced.",
      },
      {
        question: "When will AkiliBiz Marketplace launch?",
        answer:
          "The Marketplace is under planned development. Launch information will be announced through official AkiliBiz channels when it is ready for public use.",
      },
    ],
  },

  {
    slug: "business-growth",
    label: "Growing with AkiliBiz",
    shortDescription:
      "Using AkiliBiz as your business adds staff, locations, online sales, new devices, and more advanced operations.",
    items: [
      {
        question: "Can AkiliBiz grow with my business?",
        answer:
          "Yes. AkiliBiz is being designed as an ecosystem rather than a single isolated application, allowing capabilities to expand as businesses need more users, connected services, web access, mobile access, payments, and marketplace functionality.",
      },
      {
        question: "Can I start with the desktop application and add other AkiliBiz products later?",
        answer:
          "Yes. The product direction is intended to let businesses begin with the tools they need and adopt additional AkiliBiz services as their operations grow.",
      },
      {
        question: "Will AkiliBiz support larger businesses in the future?",
        answer:
          "Yes. The architecture is being developed to support more advanced requirements over time, including multi-business, multi-location, synchronisation, expanded permissions, reporting, and connected services.",
      },
      {
        question: "Is AkiliBiz only for businesses in Uganda?",
        answer:
          "Uganda is an important initial market, but AkiliBiz is being designed with the broader African business environment in mind and may expand to additional countries progressively.",
      },
      {
        question: "Will AkiliBiz support other currencies and languages?",
        answer:
          "The platform is being built with internationalisation in mind. Additional locales, languages, currencies, and country-specific requirements can be introduced as AkiliBiz expands into new markets.",
      },
    ],
  },

  {
    slug: "general",
    label: "General Questions",
    shortDescription:
      "Common questions about ownership, internet requirements, availability, product direction, and the wider AkiliBiz ecosystem.",
    items: [
      {
        question: "Is AkiliBiz only a desktop application?",
        answer:
          "No. AkiliBiz Desktop is the current operational foundation, but the wider ecosystem includes planned Business Web, business mobile applications, customer mobile experiences, Marketplace, payment services, and compatible business hardware.",
      },
      {
        question: "Is AkiliBiz an online-only system?",
        answer:
          "No. Offline-first operation is an important part of AkiliBiz Desktop, especially for businesses operating in environments where internet access may be inconsistent.",
      },
      {
        question: "Why is AkiliBiz being built offline-first?",
        answer:
          "Many businesses cannot depend on uninterrupted internet access. Offline-first design allows critical local business operations to continue even when connectivity is poor or temporarily unavailable.",
      },
      {
        question: "Is AkiliBiz already fully complete?",
        answer:
          "AkiliBiz is an actively developing platform. Core desktop business functionality is available while additional ecosystem products and connected capabilities continue to be developed.",
      },
      {
        question: "How will I know when new AkiliBiz products become available?",
        answer:
          "New releases, product launches, and important announcements will be shared through the AkiliBiz website and official communication channels such as the AkiliBiz WhatsApp Channel.",
      },
      {
        question: "Where can I learn more about upcoming AkiliBiz features?",
        answer:
          "The AkiliBiz website, Documentation area, product pages, and official communication channels will provide information about new and upcoming capabilities.",
      },
    ],
  },
];

