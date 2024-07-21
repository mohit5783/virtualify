import type { Metadata, Viewport } from "next";
import {
  Inter,
  Raleway,
  Montserrat,
  Ubuntu,
  Merriweather,
} from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";

const TopBar = dynamic(() => import("@/components/TopBar"));
const BottomBar = dynamic(() => import("@/components/BottomBar"));
const Breadcrumb = dynamic(() => import("@/components/ui/Breadcrumb"));

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://virtualifyme.com/"),
  verification: {
    google: "pn2noD6LuKvWuKlgJBqPziiMKl893_2dk67kbzpb",
    yandex: "f5fc9fa01d4ad706",
    other: {
      "msvalidate.01": "7EC886356A901AC3DE452725A28FF447",
    },
  },
  openGraph: {
    url: "https://www.virtualifyme.com/",
    siteName: "Virtualify Software Consultancy Pvt. Ltd.",
    type: "website",
  },
  twitter: {
    siteId: "@vscsocialhandle",
    creator: "@vscsocialhandle",
    creatorId: "@vscsocialhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const jsonLd = {
  "@context": "http://www.schema.org",
  "@type": "LocalBusiness",
  name: "Virtualify Software Consultancy Pvt. Ltd.",
  url: "https://www.virtualifyme.com/",
  sameAs: [
    "facebook",
    "https://www.linkedin.com/in/virtualify-software-consultancy-78b7242a5/",
    "https://twitter.com/vscsocialhandle",
    "https://www.youtube.com/channel/UCJqoy7i4OV8VaKq7gcvChhA",
  ],
  logo: "https://www.virtualifyme.com/_next/image?url=%2Flogo.webp&w=128&q=75",
  image: "https://www.virtualifyme.com/_next/image?url=%2Flogo.webp&w=128&q=75",
  description:
    "Elevate your business with cutting-edge software tailored to your needs. VirtualifyMe offers expert IT consulting & development services. Get a free quote!",
  address: {
    "@type": "PostalAddress",
    streetAddress: "103, Maharana Pratap Colony, Subhash Ward",
    addressLocality: "Harda",
    addressRegion: "Madhya Pradesh",
    postalCode: "461331",
    addressCountry: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.342117913308744",
    longitude: "77.09277144451126",
  },
  hasMap: "https://maps.app.goo.gl/anEqib4CjRaTyzWD7",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#181818",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased",
          inter.variable,
          raleway.variable,
          montserrat.variable,
          ubuntu.variable,
          merriweather.variable
        )}
      >
        <TopBar />
        <Breadcrumb
          homeElement={"Home"}
          separator={
            <span aria-hidden="true" className="font-bold">
              &rarr;
            </span>
          }
          activeClasses="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent"
          containerClasses="flex p-5 font-montserrat"
          listClasses="mx-2 font-bold"
          capitalizeLinks
        />
        {children}
        <BottomBar />
      </body>
      <GoogleAnalytics gaId="G-EMXKKVZRCB" />
      <Script
        strategy="lazyOnload"
        id="json_ld"
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
