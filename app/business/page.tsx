import type { Metadata } from "next";
import { BarChart3, LayoutDashboard, Users, Wifi } from "lucide-react";

import { MarketingWideContainer } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ComingSoonNotice } from "@/components/marketing/coming-soon-notice";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StoryAndCTA } from "@/components/marketing/story-and-cta";

export const metadata: Metadata = {
  title: "AkiliBiz Business (Coming Soon)",
  description:
    "AkiliBiz Business is a planned web experience for managing your business remotely as your team and operations grow.",
};

const planned = [
  {
    icon: LayoutDashboard,
    title: "Manage from anywhere",
    description:
      "Check in on your business operations from a web browser, without needing to be at the desktop workspace.",
  },
  {
    icon: Users,
    title: "Team visibility",
    description:
      "Give managers and team members appropriate access as your business grows beyond a single location.",
  },
  {
    icon: BarChart3,
    title: "Connected reporting",
    description:
      "The same sales, stock, and VAT data recorded in AkiliBiz Desktop, viewable from the web.",
  },
  {
    icon: Wifi,
    title: "Built on the same foundation",
    description:
      "AkiliBiz Business will extend the connected system already running in AkiliBiz Desktop, not replace it.",
  },
];

export default function BusinessPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-[#06131f] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06131f] via-[#0b1722] to-[#102235]" />
        <div className="relative z-10 mx-auto max-w-[1480px] flex flex-col items-center gap-8 text-center">
          <SectionHeading
            align="center"
            eyebrow="AkiliBiz Business"
            title="Manage your business from the web, as your team grows."
            description="AkiliBiz Business is a planned web experience for reviewing and managing your operations remotely. It is not available yet."
            className="text-white [&_h2]:text-white [&_p]:text-white/65 [&_span]:bg-white/10 [&_span]:text-brand-300"
          />
          <ComingSoonNotice
            title="Coming soon"
            description="AkiliBiz Business is in planning. Nothing on this page is available to use today."
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
          { text: "AkiliBiz Business Web will let you check sales, inventory, and reports from any browser at home, in the office, or on the road." },
          { text: "Built on the same foundation as Desktop, so your data and workflows stay consistent across every device." },
          { text: "Multi-branch management, remote team access, and cloud-connected reporting are all part of the plan." },
        ]}
        storyHeading="Manage your business from anywhere."
        storyEyebrow="Coming soon"
        title="Want to hear when AkiliBiz Business is ready?"
        description="Reach out and we'll let you know as this becomes available."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Download Desktop"
        secondaryHref="/download"
        imageAlt="Business team using web-based management tools"
        imageSrc="/images/marketing/akilibiz-business-team.jpg"
      />
    </>
  );
}
