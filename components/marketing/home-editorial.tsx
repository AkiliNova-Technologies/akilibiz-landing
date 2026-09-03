import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { StoryAndCTA } from "./story-and-cta";

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
            <div className="space-y-6">
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Everything Your Business Needs.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-ink-600 sm:justify-self-end">
                Replace scattered notebooks, spreadsheets and disconnected tools
                with one dependable operating system for your business.
              </p>
            </div>
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

      {/* Products ecosystem */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 sm:grid-cols-[1fr_0.6fr] sm:items-end">
            <div className="space-y-6">
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Not just software. A connected business platform.
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-ink-600 sm:justify-self-end">
                AkiliBiz is one ecosystem with multiple products that work
                together from the desktop to the web, the marketplace, and
                eventually mobile.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link
              href="/products/web"
              className="group flex min-h-[300px] flex-col rounded-[30px] border border-ink-100 bg-white p-7 shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-38px_rgba(16,34,53,.35)] sm:p-9">
              <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-700 transition-colors">
                <Laptop className="h-7 w-7" aria-hidden="true" />
              </span>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                AkiliBiz Business Web
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-ink-500">
                Manage your business from anywhere with a web browser. Remote
                access, multi-device management, and cloud-connected reporting
                built on the same foundation as Desktop.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Remote access", "Multi-device", "Cloud-connected"].map(
                  (tag, index) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 rounded-full bg-white/[0.04] backdrop-blur-md pl-1.5 pr-4 py-1.5 border border-ink-100">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-ink-800 ">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium leading-5 text-ink-800/85">
                        {tag}
                      </span>
                    </div>
                  ),
                )}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold text-ink-800 transition-transform group-hover:translate-x-0.5">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/products/marketplace"
              className="group relative flex min-h-[300px] flex-col rounded-[30px] border p-7 border-[#102235]/10 bg-[#102235] text-white shadow-[0_20px_50px_-35px_rgba(7,59,115,.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-38px_rgba(16,34,53,.35)] sm:p-9 overflow-hidden">
              <Image
                src="/images/marketing/akilibiz-boutique-owner.png"
                alt="A business owner using AkiliBiz to manage her shop"
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover object-[68%_center]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1722] via-[#0b1722]/95 via-48% to-[#0b1722]/15" />

              <div className="relative flex flex-col justify-between">
                <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100">
                  <Store className="h-7 w-7" aria-hidden="true" />
                </span>

                <h3 className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                  AkiliBiz Marketplace
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                  Help customers discover your products and place orders online.
                  Connected to your business inventory so stock and sales stay
                  in sync.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Online ordering",
                    "Product discovery",
                    "Connected inventory",
                  ].map((tag, index) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 rounded-full bg-white/[0.04] backdrop-blur-md pl-1.5 pr-4 py-1.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold tabular-nums tracking-[0.08em] text-brand-100 ">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium leading-5 text-white/85">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold transition-transform group-hover:translate-x-0.5">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
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
      <StoryAndCTA
        stories={[
          {
            text: "From managing orders in notebooks to running a reliable online shop, Sarah's boutique now serves customers across Kampala every day.",
          },
          {
            text: "A small catering team turned repeat WhatsApp requests into a polished digital storefront that makes booking simple for every client.",
          },
          {
            text: "What began as a neighborhood electronics stall is now a growing business with a professional presence customers can trust.",
          },
        ]}
        title="Build a Stronger Business With AkiliBiz."
        description="Start simplifying daily operations, improving visibility, and building a business that is ready to grow."
        primaryLabel="Book a Demo"
        primaryHref="/contact"
        secondaryLabel="Follow on WhatsApp"
        secondaryHref={config.whatsappChannelUrl}
        imageSrc="/images/marketing/akilibiz-final-cta-team.png"
      />
    </main>
  );
}
