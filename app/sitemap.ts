import type { MetadataRoute } from "next";
import { absoluteUrl, launchRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return launchRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date("2026-05-04"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/tassenger") ? 0.9 : 0.7
  }));
}
