import { createOgImage, ogContentType, ogSize } from "@/components/og";

export const alt = "Free Malaysia Today case study by VSC";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: "FMT stabilized under real reader pressure.",
    subtitle: "Cache, CDN, WordPress, API, and mobile behavior.",
    label: "Public case study · Client service work",
    icon: { path: "fmt/fmt-logo.svg", mime: "image/svg+xml" },
    tone: "fmt"
  });
}
