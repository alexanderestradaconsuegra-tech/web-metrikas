import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://metrikas.pro/sitemap.xml",
    host: "https://metrikas.pro",
  };
}
