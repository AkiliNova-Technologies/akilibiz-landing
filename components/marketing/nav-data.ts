import type { LucideIcon } from "lucide-react";
import { BookOpen, FileText, HelpCircle } from "lucide-react";

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
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
  {
    label: "Changelog",
    href: "/changelog",
    description: "Product updates and release notes",
    icon: FileText,
  },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download Desktop", href: "/download" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "FAQ", href: "/faq" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "Contact us", href: "/contact" },
    { label: "Book a Demo", href: "/contact" },
  ],
};
