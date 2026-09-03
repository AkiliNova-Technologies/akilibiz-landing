import {
  Laptop,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  isFeatured?: boolean;
  icon: LucideIcon;
  shortDescription: string;
  heroHeading: string;
  heroDescription: string;
  introDescription: string;
  status: "available" | "coming-soon";
  statusLabel: string;
  keyBenefits: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  relationshipNote: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export const products: Product[] = [
  {
    slug: "web",
    name: "AkiliBiz Business Web",
    tagline: "Manage your business from anywhere with a web browser.",
    isFeatured: false,
    icon: Laptop,
    shortDescription:
      "Browser-based access to AkiliBiz Business for remote management, multi-device access, and cloud-connected operations.",
    heroHeading:
      "Run your business from anywhere with a web browser.",
    heroDescription:
      "AkiliBiz Business Web brings the same dependable business management you know from the Desktop to a browser, so you can check in on operations, manage your team, and review reports from anywhere with an internet connection.",
    introDescription:
      "AkiliBiz Business Web is the browser-based companion to AkiliBiz Business Desktop. It provides the same connected business platform through a web interface, designed for business owners and managers who need to access their operations remotely, manage multiple locations, or work from devices beyond their primary desktop workstation.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    keyBenefits: [
      {
        title: "Access from anywhere",
        description:
          "Check in on your business operations from any device with a web browser at home, on the road, or across town.",
      },
      {
        title: "Same business platform",
        description:
          "Web is built on the same AkiliBiz Business foundation as Desktop, so your sales, stock, customers, and reports stay connected.",
      },
      {
        title: "Multi-device management",
        description:
          "Give yourself and your team the flexibility to manage operations from the desktop, laptop, or tablet that suits the moment.",
      },
      {
        title: "Cloud-connected reporting",
        description:
          "Access reports, dashboards, and business insights that stay in sync with the latest data from your operations.",
      },
      {
        title: "Team visibility for managers",
        description:
          "Owners and managers can review activity, monitor performance, and stay informed without being physically present.",
      },
      {
        title: "Multi-branch readiness",
        description:
          "As your business grows to multiple locations, Business Web provides the overview and control you need.",
      },
    ],
    capabilities: [
      "Sales and transaction monitoring",
      "Inventory and stock-level visibility",
      "Customer and supplier records",
      "Business reporting and dashboards",
      "Staff and role management",
      "Remote business administration",
      "Cloud-connected data access",
      "Multi-location management",
      "Subscription and plan management",
    ],
    relationshipNote:
      "AkiliBiz Business Web is not a separate product from Desktop. It is another interface into the same AkiliBiz Business platform. A sale recorded on Desktop is visible on Web. A product managed on Web is available on Desktop. The platform is designed so that core business operations recording a sale, checking stock, reviewing a report mean the same thing regardless of which client you use.",
    ctaLabel: "Get notified when available",
    ctaHref: "/contact",
    secondaryCtaLabel: "Download Desktop",
    secondaryCtaHref: "/download",
  },
  {
    slug: "marketplace",
    name: "AkiliBiz Marketplace",
    tagline:
      "Help customers discover your products and place orders online.",
    isFeatured: true,
    icon: Store,
    shortDescription:
      "An online marketplace connecting customers with AkiliBiz businesses for product discovery, browsing, and ordering.",
    heroHeading:
      "Bring your products to customers online.",
    heroDescription:
      "AkiliBiz Marketplace helps businesses reach customers beyond their physical storefront. Customers can discover local businesses, browse products, and place orders all connected back to the business's AkiliBiz operations.",
    introDescription:
      "AkiliBiz Marketplace is the customer facing side of the AkiliBiz ecosystem. While AkiliBiz Business helps you manage what happens inside your shop, Marketplace helps customers find your products and interact with your business online. It creates a direct connection between your business operations and the customers who want to buy from you.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    keyBenefits: [
      {
        title: "Online product discovery",
        description:
          "Customers can find your business and products through the Marketplace, extending your reach beyond foot traffic.",
      },
      {
        title: "Connected to your inventory",
        description:
          "Products published to Marketplace are connected to your AkiliBiz Business inventory, so availability stays accurate.",
      },
      {
        title: "Online ordering",
        description:
          "Customers can browse products, place orders, and choose delivery or pickup options that work for your business.",
      },
      {
        title: "A storefront without the complexity",
        description:
          "Get an online presence for your business without building and maintaining a separate website or e-commerce system.",
      },
      {
        title: "Orders flow into your operations",
        description:
          "When a customer places an order through Marketplace, it connects back to your AkiliBiz Business as a sale, affecting inventory and reporting.",
      },
      {
        title: "Local business focus",
        description:
          "Marketplace is designed to help customers discover and support businesses in their local area.",
      },
    ],
    capabilities: [
      "Business discovery and profiles",
      "Product browsing and search",
      "Product categories and filtering",
      "Shopping cart and ordering",
      "Delivery and pickup options",
      "Payment processing",
      "Order status and notifications",
      "Customer accounts and favourites",
      "Business promotions and highlights",
      "Connected to AkiliBiz Business inventory",
    ],
    relationshipNote:
      "AkiliBiz Marketplace is designed to work together with AkiliBiz Business, not as a separate system. A merchant adds products in AkiliBiz Business, maintains stock through the business system, and publishes eligible products to Marketplace. When a customer places an order, it flows back into the merchant's AkiliBiz operations as a sale that affects inventory, reporting, and financial records. This integration is one of the defining advantages of the AkiliBiz ecosystem.",
    ctaLabel: "Get notified when available",
    ctaHref: "/contact",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
