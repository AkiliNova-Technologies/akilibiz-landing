/**
 * Centralised configuration for AkiliBiz marketing site.
 *
 * Environment variables are read at build time (Next.js static generation).
 * Fallback values ensure the site always renders, but CTAs will point to
 * placeholder URLs if the environment is not configured.
 */

const PLACEHOLDER_CHANNEL = "https://whatsapp.com/channel/REPLACE_WITH_CHANNEL_ID";
const PLACEHOLDER_GITHUB_RELEASES =
  "https://github.com/REPLACE_WITH_ORGANISATION/REPLACE_WITH_REPOSITORY/releases/latest";

export const config = {
  /** WhatsApp Channel — one-way product updates broadcast */
  whatsappChannelUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL_URL || PLACEHOLDER_CHANNEL,

  /** WhatsApp Business chat — direct enquiries and demo conversations */
  whatsappChatUrl: process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL || "",

  /** Demo enquiry prefilled message for WhatsApp Business chat */
  whatsappDemoMessage:
    "Hi AkiliBiz team, I'd like to learn more about AkiliBiz and request a demo for my business.",

  /** Latest AkiliBiz Desktop release, hosted on GitHub Releases */
  githubReleasesUrl:
    process.env.NEXT_PUBLIC_GITHUB_RELEASES_URL || PLACEHOLDER_GITHUB_RELEASES,

  /** AkiliBiz Android listing */
  googlePlayUrl: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "",

  /** AkiliBiz iOS listing; intentionally empty until the app is available */
  appleAppStoreUrl: process.env.NEXT_PUBLIC_APPLE_APP_STORE_URL || "",

  /** Site URL for metadata */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://akilibiz.vercel.app",

  /** Site name */
  siteName: "AkiliBiz",

  /** Default page title suffix */
  titleSuffix: "AkiliBiz",
} as const;
