export type DocsSectionId = "start" | "run" | "manage" | "help";

export type DocsGuide = {
  slug: string;
  section: DocsSectionId;
  group: string;
  navLabel: string;
  title: string;
  summary: string;
  purpose: string;
  steps: string[];
  callout?: {
    title: string;
    text: string;
    kind: "tip" | "important" | "before";
  };
};

export const docsSections: Array<{
  id: DocsSectionId;
  label: string;
}> = [
  { id: "start", label: "Start" },
  { id: "run", label: "Run" },
  { id: "manage", label: "Manage" },
  { id: "help", label: "Help" },
];

export const docsGuides: DocsGuide[] = [
  {
    slug: "install-akilibiz",
    section: "start",
    group: "Setup",
    navLabel: "Install",
    title: "Install AkiliBiz Desktop",
    summary: "Install AkiliBiz on your business computer.",
    purpose: "Get AkiliBiz Desktop ready for your first working day.",
    steps: [
      "Visit the Download page and choose the installer for Windows, macOS, or Linux.",
      "Open the downloaded installer and follow the prompts.",
      "Launch AkiliBiz Desktop and keep the computer available as your primary workspace.",
    ],
    callout: {
      title: "Before you begin",
      text: "Use a computer you can access regularly. Multi-device synchronisation is coming soon.",
      kind: "before",
    },
  },
  {
    slug: "setup-workspace",
    section: "start",
    group: "Setup",
    navLabel: "Workspace",
    title: "Set up your workspace",
    summary: "Add the business details that make your records easier to recognise.",
    purpose: "Create a clear starting point for your daily records.",
    steps: [
      "Open your business settings.",
      "Add your business name and the details you use on records.",
      "Review the settings before your team begins entering sales or stock.",
    ],
  },
  {
    slug: "products-and-categories",
    section: "start",
    group: "Catalogue",
    navLabel: "Products",
    title: "Add products and categories",
    summary: "Organise your catalogue before recording sales.",
    purpose: "Keep products easy to find and stock records accurate.",
    steps: [
      "Create categories that match how you sell.",
      "Add each product with a clear name and the relevant details.",
      "Review your list before entering opening stock.",
    ],
    callout: {
      title: "Tip",
      text: "Use consistent product names so staff can find items quickly at the point of sale.",
      kind: "tip",
    },
  },
  {
    slug: "first-sale",
    section: "start",
    group: "Catalogue",
    navLabel: "First sale",
    title: "Make your first sale",
    summary: "Record a sale and confirm the information before finishing.",
    purpose: "Begin using AkiliBiz for dependable day-to-day sales records.",
    steps: [
      "Open sales and select the customer when needed.",
      "Add the products and quantities being sold.",
      "Review totals and complete the sale.",
      "Check that the sale appears in your records.",
    ],
  },

  {
    slug: "inventory",
    section: "run",
    group: "Stock",
    navLabel: "Inventory",
    title: "Manage inventory",
    summary: "Track quantities and identify products that may need restocking.",
    purpose: "Keep an accurate view of stock available to your business.",
    steps: [
      "Review current quantities in inventory.",
      "Record stock movement whenever items arrive, are adjusted, or are sold.",
      "Use low-stock information to plan restocking.",
    ],
    callout: {
      title: "Important",
      text: "Record stock movement consistently so reports reflect what is actually available.",
      kind: "important",
    },
  },
  {
    slug: "customers-and-credit",
    section: "run",
    group: "People",
    navLabel: "Customers",
    title: "Customers and credit orders",
    summary: "Keep customer records and credit balances organised.",
    purpose: "Make customer follow-up and credit tracking easier.",
    steps: [
      "Add customer details when you need to identify a sale or balance.",
      "Record credit orders with the correct customer selected.",
      "Review receivables regularly and update records as payments are made.",
    ],
  },
  {
    slug: "suppliers-and-purchasing",
    section: "run",
    group: "Supply",
    navLabel: "Suppliers",
    title: "Suppliers and purchasing",
    summary: "Maintain supplier information and purchasing records.",
    purpose: "Keep supplier relationships and purchasing activity clear.",
    steps: [
      "Add suppliers with details your team can recognise.",
      "Record purchasing activity as stock is brought in.",
      "Review supplier and payable information before making decisions.",
    ],
  },
  {
    slug: "vat-and-reports",
    section: "run",
    group: "Reports",
    navLabel: "VAT & reports",
    title: "VAT, reports, and Business Insights",
    summary: "Organise VAT-related information and review business records.",
    purpose: "Use reports to understand sales, stock, receivables, payables, and journals.",
    steps: [
      "Record sales accurately so VAT-related information is organised.",
      "Open the relevant report for the period you need.",
      "Review the figures alongside your supporting business records.",
    ],
    callout: {
      title: "Important",
      text: "AkiliBiz helps organise VAT-related information. Confirm compliance requirements with a qualified accountant or URA guidance.",
      kind: "important",
    },
  },

  {
    slug: "import-csv",
    section: "manage",
    group: "Data",
    navLabel: "Import CSV",
    title: "Import products and categories from CSV",
    summary: "Bring an existing catalogue into AkiliBiz from a CSV file.",
    purpose: "Reduce setup time when you already have a product list.",
    steps: [
      "Prepare a CSV with clear category and product columns.",
      "Open the import tool and choose your file.",
      "Check the preview carefully, then confirm the import.",
    ],
    callout: {
      title: "Before you begin",
      text: "Keep a copy of the source CSV so you can check imported records.",
      kind: "before",
    },
  },
  {
    slug: "staff-roles",
    section: "manage",
    group: "Access",
    navLabel: "Staff access",
    title: "Staff roles and access",
    summary: "Give staff access that fits their responsibilities.",
    purpose: "Help your team use the right parts of AkiliBiz without unnecessary access.",
    steps: [
      "Create a staff account for each person who needs access.",
      "Assign a role that matches their responsibilities.",
      "Review staff access whenever responsibilities change.",
    ],
  },
  {
    slug: "backups",
    section: "manage",
    group: "Safety",
    navLabel: "Backups",
    title: "Back up your business data",
    summary: "Protect locally stored business records with backups and recovery.",
    purpose: "Keep a recoverable copy of your working data.",
    steps: [
      "Open backup and recovery settings.",
      "Create a backup before major changes or updates.",
      "Store the backup somewhere you can access if the computer needs recovery.",
    ],
    callout: {
      title: "Tip",
      text: "Make backups part of a regular weekly routine.",
      kind: "tip",
    },
  },

  {
    slug: "getting-help",
    section: "help",
    group: "Support",
    navLabel: "Get support",
    title: "Getting help with AkiliBiz",
    summary: "Find the right next step when you need assistance.",
    purpose: "Get practical help for your setup or daily workflow.",
    steps: [
      "Check the relevant guide for the task you are working on.",
      "Note the details of the issue or workflow.",
      "Contact support with your question and the information you have gathered.",
    ],
  },
  {
    slug: "coming-next",
    section: "help",
    group: "Roadmap",
    navLabel: "What’s next",
    title: "What is coming next",
    summary: "See which AkiliBiz products and capabilities are planned next.",
    purpose: "Understand the future roadmap without confusing it with today’s Desktop features.",
    steps: [
      "Use AkiliBiz Desktop today for offline-first daily operations.",
      "Watch for AkiliBiz Business, Marketplace, mobile apps, payments, and multi-device synchronisation.",
      "Contact us if you need help choosing the right current workflow.",
    ],
    callout: {
      title: "Coming soon",
      text: "Web management, online ordering, mobile apps, payments, and multi-device synchronisation are planned and not live yet.",
      kind: "important",
    },
  },
];

export const docsHome = {
  title: "Welcome to AkiliBiz",
  summary: "Practical guidance for setting up AkiliBiz and running daily operations with confidence.",
};

export function getGuide(slug: string) {
  return docsGuides.find((guide) => guide.slug === slug);
}

export function getGuidesBySection(section: DocsSectionId) {
  return docsGuides.filter((guide) => guide.section === section);
}

export function getGuideGroups(section: DocsSectionId) {
  return Object.entries(
    getGuidesBySection(section).reduce<Record<string, DocsGuide[]>>(
      (groups, guide) => {
        groups[guide.group] ??= [];
        groups[guide.group].push(guide);
        return groups;
      },
      {},
    ),
  );
}

export function getAdjacentGuides(slug?: string) {
  const all = [{ slug: "", title: "Welcome to AkiliBiz" }, ...docsGuides];
  const index = all.findIndex((guide) => guide.slug === (slug ?? ""));

  return {
    previous: all[index - 1],
    next: all[index + 1],
  };
}