import type { Metadata } from "next";
import Image from "next/image";
import {
  Apple,
  Check,
  ChevronDown,
  Download,
  Monitor,
  Terminal,
} from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLatestAkiliBizDownloads } from "@/lib/akilibiz-downloads";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download AkiliBiz Desktop for dependable business operations, and explore the mobile apps coming soon.",
};

export const revalidate = 300;

const mobileApps = [
  {
    title: "AkiliBiz Business",
    description:
      "For business owners and staff to monitor operations, manage orders, stock, and customers while away from the counter.",
    image: "/images/marketing/akilibiz-boutique-owner.jpg",
    alt: "A business owner working in her boutique",
    position: "object-[63%_center]",
  },
  {
    title: "AkiliBiz Marketplace",
    description:
      "For customers to discover local businesses, browse products, and place orders with confidence.",
    image: "/images/marketing/akilibiz-hero-section.png",
    alt: "An African customer and business owner in a local business setting",
    position: "object-center",
  },
];

type PlatformDownloadsProps = {
  primaryHref?: string;
  primaryLabel: string;
  alternatives: { label: string; href: string }[];
};

function PlatformDownloads({
  primaryHref,
  primaryLabel,
  alternatives,
}: PlatformDownloadsProps) {
  if (!primaryHref) {
    return (
      <Button variant="secondary" className="w-full" disabled>
        Installer coming soon
      </Button>
    );
  }

  return (
    <div>
      <Button asChild variant="secondary" className="w-full">
        <a href={primaryHref} target="_blank" rel="noreferrer">
          <Download aria-hidden="true" />
          {primaryLabel}
        </a>
      </Button>

      {alternatives.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <Button variant="ghost" className="mt-2 w-full text-ink-400 hover:bg-transparent hover:border hover:border-ink-100 hover:text-ink-500">
              Other installers
              <ChevronDown aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="center" className="w-full sm:w-auto">
            <DropdownMenuLabel>Other installers</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {alternatives.map(({ label, href }) => (
              <DropdownMenuItem key={href} asChild>
                <a href={href} target="_blank" rel="noreferrer">
                  <Download aria-hidden="true" />
                  {label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export default async function DownloadPage() {
  const downloads = await getLatestAkiliBizDownloads();

  const releaseStatus = downloads
    ? `${downloads.version} available`
    : "Coming soon";

  return (
    <main className="overflow-x-clip bg-surface-warm text-ink-900">
      <section className="relative min-h-[500px] overflow-hidden bg-[#06131f] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Image
          src="/images/marketing/akilibiz-business-team.jpg"
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
              Bring AkiliBiz to your business.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Run dependable desktop operations, stay close to your business
              from mobile, and keep working reliably even when connectivity is
              limited.
            </p>
          </div>
        </MarketingWideContainer>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <MarketingWideContainer>
          <SectionHeading
            title="A dependable desk for the work behind every sale."
            description="Download the desktop application for the daily operations that keep your business moving."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.85fr)]">
            <article className="rounded-[30px] border border-[#102235]/10 bg-[#102235] p-6 text-white shadow-[0_24px_60px_-36px_rgba(6,19,31,.72)] sm:p-8">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                    <Monitor className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight sm:text-3xl">
                      AkiliBiz Desktop
                    </h2>

                    <Badge variant="available">{releaseStatus}</Badge>
                  </div>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                    The full AkiliBiz workspace for managing daily business
                    operations from your computer.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/85">
                  Windows 10 and later
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <h3 className="text-sm font-semibold">System requirements</h3>

                <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/65 sm:grid-cols-2">
                  {[
                    "Windows 10 or later (64-bit)",
                    "4 GB RAM or more",
                    "Internet for updates and optional cloud services",
                  ].map((requirement) => (
                    <li key={requirement} className="flex gap-2">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-brand-200"
                        aria-hidden="true"
                      />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PlatformDownloads
                  primaryHref={downloads?.windowsExe}
                  primaryLabel="Download .exe setup"
                  alternatives={
                    downloads?.windowsMsi
                      ? [
                          {
                            label: "Download .msi installer",
                            href: downloads.windowsMsi,
                          },
                        ]
                      : []
                  }
                />
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <article className="flex flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Terminal className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <Badge variant="available">{releaseStatus}</Badge>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink-900">
                  Linux
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-500">
                  For common desktop distributions.
                </p>

                <div className="mt-6">
                  <PlatformDownloads
                    primaryHref={downloads?.linuxAppImage}
                    primaryLabel="Download .AppImage"
                    alternatives={[
                      ...(downloads?.linuxDeb
                        ? [
                            {
                              label: "Download .deb (Ubuntu / Debian)",
                              href: downloads.linuxDeb,
                            },
                          ]
                        : []),
                      ...(downloads?.linuxRpm
                        ? [
                            {
                              label: "Download .rpm (Fedora / RHEL)",
                              href: downloads.linuxRpm,
                            },
                          ]
                        : []),
                    ]}
                  />
                </div>
              </article>

              <article className="flex flex-col rounded-[30px] border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Apple className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <Badge variant="available">{releaseStatus}</Badge>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink-900">
                  macOS
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-500">
                  For Apple silicon Macs.
                </p>

                <div className="mt-6">
                  <PlatformDownloads
                    primaryHref={downloads?.macosDmg}
                    primaryLabel="Download .dmg"
                    alternatives={[]}
                  />
                </div>
              </article>
            </div>
          </div>

        </MarketingWideContainer>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <MarketingWideContainer>
          <SectionHeading
            title="Take AkiliBiz with you."
            description="Purpose-built mobile experiences for the people running businesses and the customers they serve."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {mobileApps.map(({ title, description, image, alt, position }) => (
              <article
                key={title}
                className="overflow-hidden rounded-[30px] border border-ink-100 bg-white shadow-[0_20px_50px_-38px_rgba(16,34,53,.32)]"
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={`object-cover ${position}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/55 to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-ink-900">
                    {title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-ink-500">
                    {description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Button variant="secondary" className="w-full" disabled>
                      <Image src="/images/playstore-icon.svg" alt="Google Play" width={20} height={20} />
                      <span className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-ink-500">
                          Google Play
                        </span>
                        Coming soon
                      </span>
                    </Button>

                    <Button variant="secondary" className="w-full" disabled>
                      <Image src="/images/apple-icon.svg" alt="Apple App Store" width={20} height={20} />
                      <span className="text-left leading-tight">
                        <span className="block text-[10px] font-normal text-ink-500">
                          Apple App Store
                        </span>
                        Coming soon
                      </span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MarketingWideContainer>
      </section>
    </main>
  );
}