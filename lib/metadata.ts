import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
  imageAlt,
  type = "website",
  keywords
}: MetaInput): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: `${site.shortName} ${site.brandName}`,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      locale: "en_IN",
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
