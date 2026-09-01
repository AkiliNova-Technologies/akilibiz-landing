"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MarketingContainer } from "@/components/marketing/container";
import { Logo } from "@/components/marketing/logo";
import {
  primaryNav,
  resourcesLinks,
  type NavLinkItem,
} from "@/components/marketing/nav-data";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

function NavDropdownList({
  items,
  onNavigate,
}: {
  items: NavLinkItem[];
  onNavigate?: () => void;
}) {
  return (
    <>
      {items.map(({ label, href, description, icon: Icon }) => (
        <DropdownMenuItem key={href} asChild onClick={onNavigate}>
          <Link href={href}>
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-medium text-ink-900">{label}</span>
              <span className="text-xs text-ink-500">{description}</span>
            </span>
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  );
}

export function MarketingNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isResourcesActive = resourcesLinks.some((item) => isActive(item.href));

  return (
    <header
      className={cn(
        "fixed z-40 w-full px-4 py-4 transition-[background-color,backdrop-filter] sm:px-6 lg:px-8",
        hasScrolled ? "bg-[#06131f] backdrop-blur-md" : "bg-[#06131f] backdrop-blur-md"
      )}
    >
      <MarketingContainer className="flex max-w-[1480px] items-center justify-between px-0 py-0">
        <Logo reversed />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/65 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium outline-none transition-colors",
                  isResourcesActive
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:text-white data-[state=open]:text-white"
                )}
              >
                Resources
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              <NavDropdownList items={resourcesLinks} />
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            asChild
            size="sm"
            className="h-11 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-none hover:bg-brand-500"
          >
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>

        <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outlineOnDark"
              size="icon"
              className="border-white/15 bg-white/[0.04] lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <div className="mt-1 flex items-center justify-between">
              <Logo />
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col gap-1 overflow-y-auto"
            >
              {primaryNav.map((item) => (
                <DialogClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-800 hover:bg-ink-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </DialogClose>
              ))}

              <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                Resources
              </p>

              {resourcesLinks.map((item) => (
                <DialogClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-800 hover:bg-ink-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </DialogClose>
              ))}
            </nav>

            <div className="flex flex-col gap-2 border-t border-ink-200 pt-4">
              <DialogClose asChild>
                <Button asChild variant="secondary">
                  <a
                    href={config.whatsappChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on WhatsApp
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </DialogClose>

              <DialogClose asChild>
                <Button asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </MarketingContainer>
    </header>
  );
}
