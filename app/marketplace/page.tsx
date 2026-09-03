import type { Metadata } from "next";
import { Handshake, Search, ShoppingBag, Store } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ComingSoonNotice } from "@/components/marketing/coming-soon-notice";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StoryAndCTA } from "@/components/marketing/story-and-cta";

export const metadata: Metadata = {
  title: "AkiliBiz Marketplace (Coming Soon)",
  description:
    "AkiliBiz Marketplace is a planned online marketplace to help customers discover products and place orders with AkiliBiz businesses.",
};

const planned = [
  {
    icon: Search,
    title: "Product discovery",
    description:
      "Help customers find products from AkiliBiz businesses in one place online.",
  },
  {
    icon: ShoppingBag,
    title: "Online ordering",
    description:
      "Let customers place orders that connect back to a business's existing inventory records.",
  },
  {
    icon: Store,
    title: "A storefront for your business",
    description:
      "Give your business an online presence without maintaining separate systems.",
  },
  {
    icon: Handshake,
    title: "Connected, not separate",
    description:
      "Marketplace activity will draw from the same product and stock data already managed in AkiliBiz.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />
        <div className="relative z-10 mx-auto max-w-[1480px] flex flex-col items-center gap-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="AkiliBiz Marketplace"
            title="Help customers discover and order from your business online."
            description="AkiliBiz Marketplace is a planned online marketplace connecting customers with AkiliBiz businesses. It is not available yet, and there is no live marketplace activity today."
            className="text-white [&_h2]:text-white [&_p]:text-white/65 [&_span]:bg-white/10 [&_span]:text-brand-300"
          />
          <ComingSoonNotice
            title="Coming soon"
            description="AkiliBiz Marketplace is in planning. No customer ordering or marketplace activity is live today."
            className="max-w-xl"
          />
        </div>
      </section>

      <section className="bg-surface-warm py-20 sm:py-24">
        <MarketingWideContainer>
          <div className="grid gap-5 sm:grid-cols-2">
            {planned.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </MarketingWideContainer>
      </section>

      <StoryAndCTA
        layout="reversed"
        eyebrow="Stay in the loop"
        stories={[
          { text: "AkiliBiz Marketplace connects your products with customers who are looking for exactly what you sell." },
          { text: "Your product catalogue, stock levels, and orders stay in sync with your AkiliBiz Business account — no double entry." },
          { text: "Customers can browse, order, and pay online while you manage everything from Desktop or Web." },
        ]}
        storyHeading="Your products, discoverable online."
        storyEyebrow="Coming soon"
        title="Want to hear when AkiliBiz Marketplace is ready?"
        description="Reach out and we'll let you know as this becomes available."
        primaryLabel="Contact us"
        primaryHref="/contact"
        imageSrc="/images/marketing/akilibiz-hero-section.png"
      />
    </>
  );
}
