import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/case-studies",
    "/process",
    "/pricing",
    "/industries",
    "/why-capstone",
    "/results",
    "/book-a-call",
    "/insights",
    "/enterprise-solutions",
    "/partnership-models",
    "/selected-clients",
    "/security-tech-stack",
    "/proposal-request",
    "/audit-workshop",
    "/client-faq",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
