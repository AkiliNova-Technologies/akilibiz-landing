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
      "What AkiliBiz is, who it is for, and how to begin using it for your business.",
    items: [
      {
        question: "What is AkiliBiz?",
        answer:
          "AkiliBiz is a business management platform built to help small and growing businesses organise daily operations in one dependable workspace.",
      },
      {
        question: "Who is AkiliBiz for?",
        answer:
          "It is designed for businesses that need clearer control of sales, stock, products, customers, suppliers, and everyday records without relying on complicated systems.",
      },
      {
        question: "Which computers can run AkiliBiz?",
        answer:
          "AkiliBiz Desktop is available for Windows, macOS, and Linux. Visit the Download page to choose the installer that matches your computer.",
      },
      {
        question: "How do I get started?",
        answer:
          "Download AkiliBiz Desktop, prepare your products and opening stock, then contact us if you need help choosing a plan or setting up your business.",
      },
    ],
  },
  {
    slug: "features-and-operations",
    label: "Features & Operations",
    shortDescription:
      "Day-to-day capabilities sales, inventory, staff, imports, VAT, and reporting.",
    items: [
      {
        question: "What can I manage in AkiliBiz Desktop today?",
        answer:
          "AkiliBiz Desktop supports core day-to-day operations including products, categories, inventory, sales, customers, suppliers, staff access, VAT tracking, and business reports.",
      },
      {
        question: "Can I track stock and low-stock items?",
        answer:
          "Yes. You can organise products, record stock movement, monitor available quantities, and identify items that may need restocking.",
      },
      {
        question: "Can more than one staff member use AkiliBiz?",
        answer:
          "Yes. AkiliBiz Desktop supports staff accounts and role-based access so people can use the parts of the system that match their responsibilities.",
      },
      {
        question: "Can I track VAT and view reports?",
        answer:
          "Yes. AkiliBiz records VAT against sales and provides reporting for sales, stock, receivables, payables, and journal information.",
      },
      {
        question: "Can I import my existing products?",
        answer:
          "Yes. You can import products and categories from CSV files to reduce the time needed to set up your business.",
      },
    ],
  },
  {
    slug: "data-and-security",
    label: "Data & Security",
    shortDescription:
      "Where your data lives, how backups work, and what stays on your computer.",
    items: [
      {
        question: "Where is my business data stored?",
        answer:
          "AkiliBiz Desktop keeps your working data locally on your business computer. Backup and recovery features help you protect that information.",
      },
      {
        question: "Can I use AkiliBiz on more than one computer?",
        answer:
          "Multi-device access and synchronisation are planned for a future release. Today, AkiliBiz Desktop is best used as an offline-first workspace on one primary business computer.",
      },
      {
        question: "Does AkiliBiz work without internet?",
        answer:
          "Yes. AkiliBiz Desktop is built offline-first, so you can continue recording sales, managing stock, and keeping business records when connectivity is limited.",
      },
    ],
  },
  {
    slug: "pricing-and-plans",
    label: "Pricing & Plans",
    shortDescription:
      "How plans work today and what subscription management looks like going forward.",
    items: [
      {
        question: "How do pricing and subscriptions work?",
        answer:
          "AkiliBiz plans are currently arranged directly with our team based on your business needs. Online subscription management and billing are planned for a future release.",
      },
    ],
  },
  {
    slug: "whats-coming-next",
    label: "What's Coming Next",
    shortDescription:
      "Upcoming products web, mobile, marketplace, payments, and the broader AkiliBiz ecosystem.",
    items: [
      {
        question: "Will there be a web version of AkiliBiz?",
        answer:
          "Yes. AkiliBiz Business Web, a browser-based experience for managing operations remotely, is under active development.",
      },
      {
        question: "Will there be mobile apps?",
        answer:
          "Yes. Mobile experiences for business owners, staff, and customers are planned. They are not yet available for download.",
      },
      {
        question: "Will customers be able to order online?",
        answer:
          "That is the purpose of AkiliBiz Marketplace, which is planned to help customers discover businesses, browse products, and place orders online.",
      },
      {
        question: "Can customers pay with mobile money?",
        answer:
          "Mobile money and other online payment options are planned for future AkiliBiz web and marketplace services. They are not live yet.",
      },
    ],
  },
];
