import { createOgImage, ogContentType, ogSize } from "@/components/og";

export const alt = "Tassenger taskable chat for personal groups and official workspaces";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createOgImage({
    title: "Chat can stay natural. Work can stay accountable.",
    subtitle: "Taskable chat for personal groups and official workspaces.",
    label: "Tassenger · A VSC product",
    icon: { path: "tassenger/icon.png", mime: "image/png" },
    tone: "tassenger"
  });
}
