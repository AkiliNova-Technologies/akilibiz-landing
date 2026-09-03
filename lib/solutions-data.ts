export type SolutionBenefit = {
  title: string;
  description: string;
};

export type SolutionWorkflow = {
  step: string;
  label: string;
  description: string;
};

export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  heroHeading: string;
  heroDescription: string;
  introDescription: string;
  benefits: SolutionBenefit[];
  workflow: SolutionWorkflow[];
  keyFeatures: string[];
  closingHeading: string;
  closingDescription: string;
  image: string;
  imageAlt: string;
};

export const solutions: Solution[] = [
  {
    slug: "retail-shops",
    title: "Retail Shops",
    shortDescription:
      "Track daily sales and stock for a single storefront, with receipts and customer credit handled in one place.",
    heroHeading:
      "Keep your retail shop running with clear sales and stock records.",
    heroDescription:
      "AkiliBiz gives retail shop owners a dependable way to manage daily sales, track products, handle customer credit, and understand what is moving all from one workspace.",
    introDescription:
      "Running a retail shop means juggling sales at the counter, keeping shelves stocked, managing customer credit, and trying to understand what is actually happening in the business each day. AkiliBiz brings these everyday tasks into one connected system so nothing falls through the cracks.",
    benefits: [
      {
        title: "Fast point-of-sale workflow",
        description:
          "Ring up sales quickly at the counter, apply the right taxes, and issue receipts without switching between separate tools.",
      },
      {
        title: "Real-time stock visibility",
        description:
          "See what is available on the shelf as products are sold, so you know what needs restocking before it runs out.",
      },
      {
        title: "Customer credit tracking",
        description:
          "Record credit sales, track who owes what, and follow up on outstanding balances with clear records.",
      },
      {
        title: "Daily sales summaries",
        description:
          "Review end-of-day totals, payment methods, and sales performance without manually adding up receipts.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Set up products",
        description:
          "Add your products and categories so everything is ready to sell from day one.",
      },
      {
        step: "02",
        label: "Record sales",
        description:
          "Ring up customers, accept payments, and issue receipts in seconds.",
      },
      {
        step: "03",
        label: "Track stock",
        description:
          "Stock levels update automatically as you sell, so you always know what is available.",
      },
      {
        step: "04",
        label: "Understand your business",
        description:
          "Review daily sales, top products, and cash movement to make informed decisions.",
      },
    ],
    keyFeatures: [
      "Point-of-sale with receipt printing",
      "Cash, credit, and mixed-payment support",
      "Automatic stock updates on every sale",
      "Customer records with credit history",
      "Low-stock alerts and reorder visibility",
      "Daily, weekly, and monthly sales reports",
      "VAT tracking on applicable sales",
      "Offline-first desktop operation",
    ],
    closingHeading: "Start managing your shop with clarity.",
    closingDescription:
      "Download AkiliBiz Desktop or talk to us about setting up your shop with the right plan.",
    image: "/images/marketing/akilibiz-boutique-owner.jpg",
    imageAlt: "Retail shop owner managing daily sales and stock",
  },
  {
    slug: "supermarkets",
    title: "Supermarkets & Mini-Markets",
    shortDescription:
      "Manage a larger, faster-moving product range with stock-level visibility across many items sold every day.",
    heroHeading:
      "Manage hundreds of products with confidence across your supermarket.",
    heroDescription:
      "AkiliBiz helps supermarkets and mini-markets handle high-volume sales, track a large product range, and maintain stock visibility across every aisle.",
    introDescription:
      "Supermarkets and mini-markets deal with hundreds or thousands of products moving through the store every day. AkiliBiz gives you the operational backbone to manage that volume from scanning products at checkout to tracking what needs restocking across your entire catalogue.",
    benefits: [
      {
        title: "High-volume sales handling",
        description:
          "Process many transactions quickly during peak hours with a fast, reliable point-of-sale workflow.",
      },
      {
        title: "Large catalogue management",
        description:
          "Organise products across multiple categories and keep pricing, stock, and product information accurate.",
      },
      {
        title: "Stock movement across the store",
        description:
          "Track quantities as products arrive, are sold, or are adjusted, so you always know what is on the shelf.",
      },
      {
        title: "Multi-category reporting",
        description:
          "See which product categories and items are performing best, and identify slow-moving stock early.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Import your catalogue",
        description:
          "Bring in products and categories from a CSV file to set up quickly.",
      },
      {
        step: "02",
        label: "Process sales",
        description:
          "Ring up customers efficiently, even during busy periods.",
      },
      {
        step: "03",
        label: "Monitor stock levels",
        description:
          "Keep visibility across your full product range with automatic stock updates.",
      },
      {
        step: "04",
        label: "Review performance",
        description:
          "Understand what is selling, what is slow, and where to focus attention.",
      },
    ],
    keyFeatures: [
      "Fast point-of-sale for high-volume checkout",
      "CSV import for large product catalogues",
      "Multi-category product organisation",
      "Real-time stock level tracking",
      "Supplier and purchasing records",
      "Sales and inventory reporting",
      "Staff access with role-based permissions",
      "Offline-first reliability during peak hours",
    ],
    closingHeading: "Bring clarity to your supermarket operations.",
    closingDescription:
      "Talk to us about how AkiliBiz fits your store's daily workflow.",
    image: "/images/marketing/akilibiz-business-team.jpg",
    imageAlt: "Supermarket team managing daily operations",
  },
  {
    slug: "pharmacies",
    title: "Pharmacies & Health Shops",
    shortDescription:
      "Keep clear records of stock movement and sales for products where accurate tracking matters.",
    heroHeading:
      "Track stock and sales accurately in your pharmacy.",
    heroDescription:
      "AkiliBiz helps pharmacies maintain precise stock records, track product movement, and manage sales with the accuracy that health-related products demand.",
    introDescription:
      "Pharmacies handle products where accuracy matters expiry tracking, stock movement, and clear sales records are not optional. AkiliBiz provides the operational structure to manage your pharmacy's daily work with confidence and traceability.",
    benefits: [
      {
        title: "Precise stock tracking",
        description:
          "Monitor exactly what is on the shelf, what has been sold, and what needs to be reordered — without guesswork.",
      },
      {
        title: "Traceable sales records",
        description:
          "Every sale is recorded with full details, giving you a clear audit trail for products sold.",
      },
      {
        title: "Supplier purchasing records",
        description:
          "Track which products you have ordered, when they arrived, and from which supplier.",
      },
      {
        title: "Reporting for compliance readiness",
        description:
          "Access sales and stock reports that help you stay prepared for regulatory and audit requirements.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Set up your products",
        description:
          "Add medications, health products, and categories with the details your pharmacy needs.",
      },
      {
        step: "02",
        label: "Record stock arrivals",
        description:
          "Log incoming stock with supplier information for full traceability.",
      },
      {
        step: "03",
        label: "Process sales",
        description:
          "Ring up sales with accurate pricing, tax, and stock deduction.",
      },
      {
        step: "04",
        label: "Review and reorder",
        description:
          "Use stock reports to identify low quantities and plan reorders before items run out.",
      },
    ],
    keyFeatures: [
      "Detailed product and category management",
      "Stock movement tracking with history",
      "Supplier records and purchasing workflow",
      "Sales records with full transaction details",
      "Low-stock and reorder alerts",
      "VAT and sales reporting",
      "Staff access with individual permissions",
      "Offline-first desktop for uninterrupted service",
    ],
    closingHeading: "Manage your pharmacy with precision.",
    closingDescription:
      "Download AkiliBiz Desktop or speak with our team about your pharmacy's needs.",
    image: "/images/marketing/akilibiz-business-team.jpg",
    imageAlt: "Pharmacy operator managing stock and sales",
  },
  {
    slug: "hardware-stores",
    title: "Hardware & Building Supplies",
    shortDescription:
      "Handle bulkier inventory, supplier purchasing, and customer credit for repeat trade accounts.",
    heroHeading:
      "Manage bulkier inventory and trade accounts with clarity.",
    heroDescription:
      "AkiliBiz supports hardware and building supply businesses with inventory tracking, supplier purchasing, customer credit management, and reporting built for trade-focused operations.",
    introDescription:
      "Hardware and building supply businesses deal with larger product ranges, bulk purchases, trade accounts, and repeat customers. AkiliBiz gives you the tools to manage purchasing from suppliers, track stock across your range, and keep customer credit records organised.",
    benefits: [
      {
        title: "Bulk inventory management",
        description:
          "Track larger product ranges with different units of measure, pricing tiers, and stock quantities.",
      },
      {
        title: "Supplier purchasing workflow",
        description:
          "Record purchases from suppliers, track deliveries, and manage supplier balances with clarity.",
      },
      {
        title: "Trade account credit tracking",
        description:
          "Manage customer credit for trade accounts with balances, payment history, and outstanding amounts.",
      },
      {
        title: "Cost and margin visibility",
        description:
          "Track product costs alongside selling prices to understand your margins across different categories.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Build your catalogue",
        description:
          "Add products organised by category with pricing and supplier information.",
      },
      {
        step: "02",
        label: "Record purchases",
        description:
          "Log incoming stock from suppliers with quantities, costs, and delivery details.",
      },
      {
        step: "03",
        label: "Manage sales and credit",
        description:
          "Process cash and credit sales, keeping trade account balances accurate.",
      },
      {
        step: "04",
        label: "Review purchasing and stock",
        description:
          "Monitor stock levels, supplier performance, and outstanding balances across your business.",
      },
    ],
    keyFeatures: [
      "Product catalogue with categories and pricing tiers",
      "Supplier management and purchase recording",
      "Customer credit and trade account tracking",
      "Stock level monitoring across full range",
      "Cost tracking and margin visibility",
      "Accounts receivable and payable reporting",
      "Staff roles for counter and warehouse staff",
      "Reliable offline desktop operation",
    ],
    closingHeading: "Run your hardware business with better visibility.",
    closingDescription:
      "Talk to us about how AkiliBiz supports hardware and building supply operations.",
    image: "/images/marketing/akilibiz-business-team.jpg",
    imageAlt: "Hardware store owner managing inventory",
  },
  {
    slug: "fashion-boutiques",
    title: "Fashion & Boutiques",
    shortDescription:
      "Organise products by category and variant, and keep sales and stock connected across a varied catalogue.",
    heroHeading:
      "Organise your fashion catalogue and track every sale clearly.",
    heroDescription:
      "AkiliBiz helps fashion retailers and boutiques manage varied product ranges, track stock across categories and styles, and keep sales records connected to the right products.",
    introDescription:
      "Fashion and boutique businesses manage diverse product ranges with different sizes, colours, and styles. AkiliBiz gives you the structure to organise your catalogue, track what sells, and understand which products drive your business forward.",
    benefits: [
      {
        title: "Flexible product organisation",
        description:
          "Group products by category, type, or style, keeping your catalogue organised as it grows.",
      },
      {
        title: "Stock tracking across variants",
        description:
          "Monitor quantities for different sizes, colours, and styles so you know exactly what is available.",
      },
      {
        title: "Sales pattern visibility",
        description:
          "See which styles and categories are performing, and identify trends in customer purchases.",
      },
      {
        title: "Customer relationship records",
        description:
          "Keep track of regular customers, their purchase history, and any credit arrangements.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Set up your catalogue",
        description:
          "Add products organised by category with the details your team needs.",
      },
      {
        step: "02",
        label: "Stock your shelves",
        description:
          "Record opening stock and new arrivals with quantities and cost information.",
      },
      {
        step: "03",
        label: "Make sales",
        description:
          "Process transactions quickly, with stock updating automatically.",
      },
      {
        step: "04",
        label: "Understand what sells",
        description:
          "Review sales reports to see which products and categories drive the most revenue.",
      },
    ],
    keyFeatures: [
      "Category-based product management",
      "Stock tracking with automatic updates",
      "Customer records with purchase history",
      "Credit sales and balance tracking",
      "Sales reporting by product and category",
      "Low-stock alerts for popular items",
      "Receipt printing and sales history",
      "Offline-first operation for in-store reliability",
    ],
    closingHeading: "Bring your boutique operations together.",
    closingDescription:
      "Download AkiliBiz Desktop or talk to us about managing your fashion business.",
    image: "/images/marketing/akilibiz-boutique-owner.jpg",
    imageAlt: "Fashion boutique owner managing her shop",
  },
  {
    slug: "growing-businesses",
    title: "Growing Multi-User Businesses",
    shortDescription:
      "Bring on additional staff with role-based access as your team and daily transaction volume grow.",
    heroHeading:
      "Scale your team without losing control of your operations.",
    heroDescription:
      "AkiliBiz supports growing businesses with multi-user access, role-based permissions, and the reporting visibility that comes with managing a team and increasing transaction volume.",
    introDescription:
      "As your business grows beyond one person at the counter, you need systems that support multiple staff members while keeping operations controlled and accountable. AkiliBiz provides the team management, access controls, and reporting you need as your business scales.",
    benefits: [
      {
        title: "Multi-user access with roles",
        description:
          "Give each staff member access to the parts of the system that match their responsibilities.",
      },
      {
        title: "Staff activity visibility",
        description:
          "See who processed which transactions and track operational activity across your team.",
      },
      {
        title: "Scalable daily operations",
        description:
          "Handle increasing transaction volume with a system designed for growing businesses.",
      },
      {
        title: "Consistent operational records",
        description:
          "Every staff member works from the same connected system, so records stay accurate and complete.",
      },
    ],
    workflow: [
      {
        step: "01",
        label: "Set up your team",
        description:
          "Create staff accounts with roles that match each person's responsibilities.",
      },
      {
        step: "02",
        label: "Assign permissions",
        description:
          "Control who can access sales, inventory, reporting, and administrative functions.",
      },
      {
        step: "03",
        label: "Let the team work",
        description:
          "Staff use the system independently while all activity feeds into the same records.",
      },
      {
        step: "04",
        label: "Review and manage",
        description:
          "Monitor performance, review activity, and adjust access as responsibilities change.",
      },
    ],
    keyFeatures: [
      "Multiple staff accounts with individual access",
      "Role-based permissions for different responsibilities",
      "Activity tracking across all staff users",
      "Sales and stock reports by staff member",
      "Growing team support without extra complexity",
      "Centralised product and inventory management",
      "Customer and supplier records shared across the team",
      "Offline-first reliability for every workstation",
    ],
    closingHeading: "Ready to grow your team with the right tools?",
    closingDescription:
      "Talk to us about setting up AkiliBiz for your growing business.",
    image: "/images/marketing/akilibiz-business-team.jpg",
    imageAlt: "Growing business team managing operations",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}
