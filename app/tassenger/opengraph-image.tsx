import { createOgImage, ogContentType, ogSize } from "@/components/og";

export const alt = "Tassenger calm messenger with accountability";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: "Chat can scroll. Tasks must not disappear.",
    subtitle: "A calm messenger with an accountability layer.",
    label: "Tassenger · A VSC product",
    icon: { path: "tassenger/icon.png", mime: "image/png" },
    tone: "tassenger"
  });
}
