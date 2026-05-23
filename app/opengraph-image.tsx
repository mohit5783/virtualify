import { createOgImage, ogContentType, ogSize } from "@/components/og";

export const alt = "VSC VirtualifyMe software company";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: "Software people can trust.",
    subtitle: "Tassenger, FMT, and software services for growing organizations.",
    tone: "vsc"
  });
}
