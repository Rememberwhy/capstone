import type { MetadataRoute } from "next";
import { caseStudies, insights, services } from "@/lib/content";
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
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const insightRoutes = insights.map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.published),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...insightRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
