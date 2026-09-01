import type { LucideIcon } from "lucide-react";
import { BookOpen, HelpCircle } from "lucide-react";

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
];

export type NavLinkItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  status?: "soon";
};

export const resourcesLinks: NavLinkItem[] = [
  {
    label: "Documentation",
    href: "/docs",
    description: "Guides for setting up and running AkiliBiz",
    icon: BookOpen,
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Answers to common questions",
    icon: HelpCircle,
  },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download Desktop", href: "/download" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "Contact us", href: "/contact" },
    { label: "Book a Demo", href: "/contact" },
  ],
};
