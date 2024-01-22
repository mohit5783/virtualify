import type { Metadata, Viewport } from "next";
import {
  Inter,
  Raleway,
  Montserrat,
  Ubuntu,
  Merriweather,
} from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Script from "next/script";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import Breadcrumb from "@/components/ui/Breadcrumb";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Virtualify Software Consultancy (VSC) – Mastering Digital Solutions",
  description:
    "Elevate your business with Virtualify Software Consultancy. Experience innovation as we craft tailored digital solutions.",
  keywords: [
    "Web Development",
    "Mobile App Development",
    "Tailored Solutions",
    "React",
    "NextJS",
    "NodeJS",
    "Angular",
    "Google Cloud",
    "AWS",
    "GraphQL",
    "RestAPI",
    "Social Media Integrations",
    "SEO",
    "SEM (Search Engine Marketing)",
    "UI/UX Design",
    "React-Native",
    "Flutter",
    "Kotlin",
    "Swift",
    "Objective-C",
    "Digital Innovation",
    "Custom Solutions",
    "Technology Partners",
    "Client-Centric Development",
    "Innovation Hub",
    "Cross-Platform Development",
    "Emerging Technologies",
    "Digital Transformation",
    "App Optimization",
    "Scalable Solutions",
    "Software",
    "Technology",
    "Solutions",
    "Innovative",
    "Business",
    "Development",
    "Custom",
    "Enterprise",
    "Digital",
    "Platform",
    "Integration",
    "Automation",
    "Analytics",
    "Support",
    "Implementation",
    "Virtualify Software Consultancy",
  ],
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
    "Elevate your technological landscape with Virtualify Software Consultancy Pvt Ltd. Experience innovation at its best as we craft digital solutions tailored to meet the unique needs of your business.",
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
          "min-h-screen bg-background font-sans antialiased",
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
          separator={<span className="font-bold">&rarr;</span>}
          activeClasses="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent"
          containerClasses="flex p-5 font-montserrat"
          listClasses="mx-2 font-bold"
          capitalizeLinks
        />
        {children}
        <BottomBar />
      </body>
      <Script
        strategy="lazyOnload"
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-EMXKKVZRCB"
      />
      <Script strategy="lazyOnload" defer id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EMXKKVZRCB');
      `}
      </Script>
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
