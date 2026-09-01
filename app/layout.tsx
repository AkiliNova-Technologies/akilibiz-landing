import type { Metadata } from "next";
import { Inter, Manrope, Sora } from "next/font/google";

import "./globals.css";

import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://akilibiz.com"),
  metadataBase: new URL("https://akilibiz.vercel.app"),

  applicationName: "AkiliBiz",
  title: {
    default: "AkiliBiz — Run your business with clarity",
    template: "%s · AkiliBiz",
  },
  description:
    "AkiliBiz brings sales, inventory, customers, suppliers, VAT, reporting, and business insights into one connected system for growing businesses in Uganda and across Africa.",

  keywords: [
    "business management software Uganda",
    "POS system Uganda",
    "inventory management Uganda",
    "sales software Uganda",
    "VAT software Uganda",
    "small business software Africa",
    "AkiliBiz",
  ],

  authors: [{ name: "AkiliBiz" }],
  creator: "AkiliBiz",
  publisher: "AkiliBiz",
  category: "Business software",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "/",
    siteName: "AkiliBiz",
    title: "AkiliBiz — Run your business with clarity",
    description:
      "Sales, inventory, customers, suppliers, VAT, and reporting in one connected system for growing businesses.",
    images: [
      {
        url: "/images/seo/akilibiz-og.png",
        width: 1200,
        height: 630,
        alt: "AkiliBiz — Run your business with clarity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AkiliBiz — Run your business with clarity",
    description:
      "Sales, inventory, customers, suppliers, VAT, and reporting in one connected system for growing businesses.",
    images: ["/images/seo/akilibiz-og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        inter.variable,
        manrope.variable,
        sora.variable,
      )}
    >
      <body className="flex min-h-full flex-col font-sans">
        <MarketingNavbar />
        <main className="flex-1">{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}