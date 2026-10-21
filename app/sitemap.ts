import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/legal", "/legal/terms", "/legal/privacy", "/legal/cookies", "/legal/minors", "/legal/data-processing"];
  return routes.map((route) => ({
    url: `https://metrikas.pro${route}`,
    lastModified: new Date(route === "" ? "2026-09-18" : "2026-08-20"),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/legal" ? 0.5 : 0.4,
  }));
}
