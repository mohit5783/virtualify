import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Analytics } from "@/components/analytics";
import { PageShell } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "VSC VirtualifyMe | Software Product Engineering & Digital Transformation",
    description:
      "VirtualifyMe (VSC) builds software products, web and mobile platforms, automation systems, modernization programs, and digital services for growing organizations."
  }),
  metadataBase: new URL(site.baseUrl),
  verification: {
    google: "pn2noD6LuKvWuKlgJBqPziiMKl893_2dk67kbzpb",
    yandex: "f5fc9fa01d4ad706",
    other: {
      "msvalidate.01": "7EC886356A901AC3DE452725A28FF447"
    }
  },
  applicationName: `${site.shortName} ${site.brandName}`,
  appleWebApp: {
    title: site.shortName,
    capable: true,
    statusBarStyle: "default"
  },
  icons: {
    icon: "/brand/vsc-logo.png",
    apple: "/brand/vsc-logo.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#061b34",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <Analytics />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
