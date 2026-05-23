import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

const allowedCrawlers = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "BingPreview",
  "DuckDuckBot",
  "YandexBot",
  "Applebot",
  "Slurp",
  "Baiduspider",
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "cohere-ai",
  "anthropic-ai",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot"
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedCrawlers.map((userAgent) => ({
      userAgent,
      allow: "/"
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.baseUrl
  };
}
