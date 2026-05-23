import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = {
  width: 1200,
  height: 630
};

export const ogContentType = "image/png";

type OgCardProps = {
  title: string;
  subtitle: string;
  label?: string;
  icon?: {
    path: string;
    mime: "image/png" | "image/svg+xml";
  };
  tone?: "vsc" | "tassenger" | "fmt";
};

async function assetDataUri(path: string, mime: "image/png" | "image/svg+xml") {
  const file = await readFile(join(process.cwd(), "public", path));
  return `data:${mime};base64,${file.toString("base64")}`;
}

export async function createOgImage({
  title,
  subtitle,
  label = "VSC VirtualifyMe",
  icon = { path: "brand/vsc-logo.png", mime: "image/png" },
  tone = "vsc"
}: OgCardProps) {
  const accent = tone === "fmt" ? "#f26b2d" : tone === "tassenger" ? "#0f8f88" : "#10a7a6";
  const soft = tone === "fmt" ? "#fff6ec" : "#edf6f7";
  const iconSrc = await assetDataUri(icon.path, icon.mime);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          color: "#061b34",
          fontFamily: "Arial, sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 470,
            height: 630,
            background: soft,
            clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%, 16% 48%)"
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 68, width: 820 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <img src={iconSrc} width={86} height={86} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1 }}>VSC</div>
              <div style={{ color: "#52647a", fontSize: 22, fontWeight: 700 }}>{label}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 84, height: 8, background: accent, marginBottom: 28 }} />
            <div style={{ fontSize: 74, lineHeight: 0.94, fontWeight: 900, letterSpacing: -1 }}>{title}</div>
            <div style={{ marginTop: 26, color: "#142941", fontSize: 28, lineHeight: 1.3, fontWeight: 600 }}>{subtitle}</div>
          </div>
          <div style={{ color: "#52647a", fontSize: 22, fontWeight: 700 }}>
            Virtualify Software Consultancy Pvt. Ltd. · Harda, Madhya Pradesh
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
