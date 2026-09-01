import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akilibiz.com";
  const now = new Date();

  const routes = [
    "",
    "/solutions",
    "/features",
    "/pricing",
    "/download",
    "/contact",
    "/faq",
    "/docs",
    "/business",
    "/marketplace",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/features" || route === "/pricing" ? 0.8 : 0.6,
  }));
}
