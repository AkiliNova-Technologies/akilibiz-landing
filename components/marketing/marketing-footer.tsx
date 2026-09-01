import Link from "next/link";

import { Logo } from "@/components/marketing/logo";
import { MarketingContainer } from "@/components/marketing/container";
import { footerNav } from "@/components/marketing/nav-data";

type SocialPlatform = "facebook" | "instagram" | "linkedin" | "x";

const socialLinks: Array<{
  label: string;
  href: string;
  platform: SocialPlatform;
}> = [
  // Add the four verified AkiliBiz social profile URLs here before their icons render.
  { label: "Facebook", href: "https://facebook.com", platform: "facebook" },
  { label: "Instagram", href: "https://instagram.com", platform: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", platform: "linkedin" },
  { label: "X", href: "https://x.com", platform: "x" },
];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const iconClassName = "h-[18px] w-[18px] fill-current";

  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M13.5 21v-7h2.5l.5-3h-3V9.1c0-.9.3-1.6 1.7-1.6H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H7.5v3H10v7h3.5Z" />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.2 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (platform === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
        <path d="M5.1 8.2H1.8V22h3.3V8.2ZM3.5 2A1.9 1.9 0 1 0 3.5 5.8 1.9 1.9 0 0 0 3.5 2ZM22 14.1c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.3V8.2H9.4V22h3.3v-6.8c0-1.8.3-3.5 2.5-3.5 2.2 0 2.2 2 2.2 3.6V22H22v-7.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 15.5 6.3 22H3.1l7.3-8.4L.8 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
    </svg>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; status?: "soon" }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-300">
        {title}
      </h3>

      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
            >
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingFooter() {
  const activeSocialLinks = socialLinks.filter((social) => social.href.trim());
  const contactLinks = footerNav.company.filter((link) => link.href === "/contact");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06131f] text-white">

      <MarketingContainer className="relative z-10 grid gap-12 pt-36 pb-14 sm:pt-44 sm:pb-16 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-10 lg:pt-52 lg:pb-20">
        <div className="max-w-sm">
          <Logo reversed />

          <p className="mt-5 text-sm leading-6 text-white/60">
            Business management and digital commerce in one connected platform,
            built for ambitious growing businesses.
          </p>

          {activeSocialLinks.length > 0 && (
            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">
                Follow AkiliBiz
              </p>

              <div className="mt-3 flex items-center gap-2">
                {activeSocialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow AkiliBiz on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-white/65 transition-all hover:-translate-y-0.5 hover:border-brand-400/45 hover:bg-brand-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <FooterColumn title="Product" links={footerNav.product} />
        <FooterColumn title="Resources" links={footerNav.resources} />
        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Contact" links={contactLinks} />
      </MarketingContainer>

      <div className="relative z-10 border-t border-white/10 bg-black/[0.08]">
        <MarketingContainer className="flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AkiliBiz. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300" href="/cookie-policy">
              Cookie Policy
            </Link>
          </nav>
        </MarketingContainer>
      </div>
    </footer>
  );
}
