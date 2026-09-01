/**
 * Centralised image paths for AkiliBiz marketing site.
 *
 * All paths are relative to /public and used with Next.js <Image>.
 *
 * 🚨 IMAGES REQUIRED:
 * Until final photography/assets are supplied, these paths will cause
 * build warnings. Use the placeholder pattern below when adding <Image>
 * components — they are ready to receive the real files.
 */

export const images = {
  hero: {
    /** Hero: respectful photo of African business owner in a realistic shop/counter setting */
    src: "/images/marketing/hero-business-owner.jpg",
    alt: "A Ugandan business owner managing daily operations",
  },
  solutions: {
    retail: {
      src: "/images/marketing/solutions-retail.jpg",
      alt: "Retail shop owner serving customers",
    },
    pharmacy: {
      src: "/images/marketing/solutions-pharmacy.jpg",
      alt: "Pharmacy operator managing stock",
    },
    hardware: {
      src: "/images/marketing/solutions-hardware.jpg",
      alt: "Hardware store owner checking inventory",
    },
    fashion: {
      src: "/images/marketing/solutions-fashion.jpg",
      alt: "Fashion boutique owner organizing products",
    },
    supermarket: {
      src: "/images/marketing/solutions-supermarket.jpg",
      alt: "Supermarket team managing daily operations",
    },
  },
  features: {
    sales: {
      src: "/images/marketing/feature-sales.jpg",
      alt: "AkiliBiz sales and point-of-sale interface",
    },
    inventory: {
      src: "/images/marketing/feature-inventory.jpg",
      alt: "AkiliBiz inventory management interface",
    },
    reports: {
      src: "/images/marketing/feature-reports.jpg",
      alt: "AkiliBiz reporting and VAT tracking interface",
    },
  },
  og: {
    src: "/images/marketing/og-image.jpg",
    alt: "AkiliBiz — business management for growing businesses",
  },
} as const;
