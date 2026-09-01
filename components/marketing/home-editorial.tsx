import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { BusinessStories } from "./business-stories";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Sales & POS",
    description:
      "Make every sale faster with receipts, split payments, customer records and accurate daily sales tracking.",
  },
  {
    title: "Inventory Control",
    description:
      "Track stock movement, product costs, suppliers, low-stock alerts and reorder needs.",
  },
  {
    title: "Business Finance",
    description:
      "Record expenses, understand revenue and keep a clearer view of your daily cash movement.",
  },
  {
    title: "Reports & Insights",
    description:
      "Turn your sales, stock and finance data into decisions you can act on.",
  },
];

const businessBenefits = [
  "Sell confidently",
  "Know your stock",
  "Track your money",
  "See what is growing",
];

function ArrowLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold transition-transform hover:translate-x-0.5 ${
        dark ? "text-white" : "text-ink-800"
      }`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function HomeEditorial() {
  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen bg-[#06131f] px-4 pb-6 pt-5 sm:px-6 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-hero-section.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/82 via-52% to-[#06131f]/25" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2.75rem)] max-w-[1480px] items-center justify-start overflow-hidden rounded-[1.75rem] px-6 pb-8 pt-10 text-white sm:px-10 sm:pb-10 lg:px-12 lg:pt-16">
          <div className="flex flex-1 justify-start gap-10">
            <div className="relative z-10 max-w-4xl">
              <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-8xl">
                Run Your Business
                <br />
                With Clarity That
                <br />
                <span className="text-brand-400">Drives Growth.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                AkiliBiz brings sales, stock, expenses, customers and business
                insights into one reliable system built for growing businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full bg-brand-600 px-5 text-sm font-semibold hover:bg-brand-500">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outlineOnDark"
                  className="h-12 rounded-full px-5 text-sm">
                  <Link href="/features">Explore Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What AkiliBiz does */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 sm:grid-cols-[1fr_0.6fr] sm:items-end">
            <div>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Everything Your Business Needs.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-ink-600 sm:justify-self-end">
              Replace scattered notebooks, spreadsheets and disconnected tools
              with one dependable operating system for your business.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {features.map(({ title, description }, index) => {
              const featured = index === 3;

              return (
                <article
                  key={title}
                  className={`flex min-h-[285px] flex-col rounded-[30px] border p-6 transition duration-300 hover:-translate-y-1 ${
                    featured
                      ? "border-[#102235]/10 bg-[#102235] text-white shadow-[0_20px_50px_-35px_rgba(7,59,115,.7)]"
                      : "border-ink-100 bg-white shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)]"
                  }`}>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold tabular-nums tracking-[0.08em] ${
                      featured
                        ? "border border-brand-300/20 bg-brand-500/15 text-brand-100"
                        : "border border-brand-200 bg-brand-50 text-brand-700"
                    }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-9 text-lg font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      featured ? "text-white/65" : "text-ink-500"
                    }`}>
                    {description}
                  </p>

                  <ArrowLink href="/features" dark={featured}>
                    Learn more
                  </ArrowLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark product showcase */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-[1480px]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[1.75rem] bg-[#0b1722] text-white sm:min-h-[580px]">
            <Image
              src="/images/marketing/akilibiz-boutique-owner.png"
              alt="A business owner using AkiliBiz to manage her shop"
              fill
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover object-[68%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/95 via-48% to-[#0b1722]/15" />

            <div className="relative flex min-h-[620px] max-w-[1480px] flex-col justify-between p-7 sm:min-h-[580px] sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Built Around the Work Behind Every Growing Business.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/65 sm:text-base">
                  AkiliBiz gives business owners one clear place to sell, manage
                  stock, understand their money, and make confident decisions
                  every day.
                </p>

                <Button
                  asChild
                  variant="outlineOnDark"
                  className="mt-8 rounded-full border-white/20 bg-white/[0.04] px-5 hover:bg-white/[0.1]">
                  <Link href="/solutions">
                    Explore AkiliBiz
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              <div className="grid max-w-xl grid-cols-2 gap-3 pt-10">
                {businessBenefits.map((label, index) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-full bg-white/[0.04] p-2 pr-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100 ">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium leading-5 text-white/85">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story and CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-[1480px] gap-8 lg:grid-cols-[0.62fr_1.38fr]">
          <BusinessStories />

          <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-brand-700 p-7 text-white sm:min-h-[400px] sm:p-11">
            <Image
              src="/images/marketing/akilibiz-final-cta-team.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-700/90 to-brand-900/20" />

            <div className="relative flex h-full max-w-xl flex-col justify-center">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                Build a Stronger Business With AkiliBiz.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/82">
                Start simplifying daily operations, improving visibility, and
                building a business that is ready to grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#102235] px-5 hover:bg-[#1a3352]">
                  <Link href="/contact">
                    Book a Demo
                    <ArrowRight />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outlineOnDark"
                  className="h-12 rounded-full px-5">
                  <a
                    href={config.whatsappChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    Follow on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
