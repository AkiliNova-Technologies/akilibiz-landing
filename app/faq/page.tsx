import type { Metadata } from "next";
import Image from "next/image";

import { MarketingWideContainer } from "@/components/marketing/container";
import { FAQDirectory } from "@/components/marketing/faq-directory";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about AkiliBiz, from offline support to VAT tracking and what's planned next.",
};

const faqs = [
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
    question: "Does AkiliBiz work without internet?",
    answer:
      "Yes. AkiliBiz Desktop is built offline-first, so you can continue recording sales, managing stock, and keeping business records when connectivity is limited.",
  },
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
    question: "Which computers can run AkiliBiz?",
    answer:
      "AkiliBiz Desktop is available for Windows, macOS, and Linux. Visit the Download page to choose the installer that matches your computer.",
  },
  {
    question: "How do pricing and subscriptions work?",
    answer:
      "AkiliBiz plans are currently arranged directly with our team based on your business needs. Online subscription management and billing are planned for a future release.",
  },
  {
    question: "Will there be a web version of AkiliBiz?",
    answer:
      "Yes. AkiliBiz Business, a web-based experience for managing operations remotely, is planned and marked coming soon.",
  },
  {
    question: "Will there be mobile apps?",
    answer:
      "Yes. Mobile experiences for business owners, staff, and customers are planned. They are not yet available for download.",
  },
  {
    question: "Will customers be able to order online?",
    answer:
      "That is the purpose of AkiliBiz Marketplace, which is planned to help customers discover businesses, browse products, and place orders online. It is coming soon.",
  },
  {
    question: "Can customers pay with mobile money?",
    answer:
      "Mobile money and other online payment options are planned for future AkiliBiz web and marketplace services. They are not live yet.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download AkiliBiz Desktop, prepare your products and opening stock, then contact us if you need help choosing a plan or setting up your business.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative min-h-[500px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-business-team.png"
          alt="African business owners working together at a computer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/88 via-55% to-[#06131f]/35" />

        <MarketingWideContainer className="relative z-10 flex min-h-[340px] items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mt-5 font-[family-name:var(--font-sora)] text-4xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Clear answers before you get started.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              What AkiliBiz can help you run today, how it works offline, and
              what is coming next.
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <section className="py-16 sm:py-24">
        <MarketingWideContainer className="max-w-[1160px]">
          <FAQDirectory items={faqs} />
        </MarketingWideContainer>
      </section>

    </>
  );
}
