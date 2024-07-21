import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const HomeHero = dynamic(() => import("@/components/HomeHero"));
const HomeWho = dynamic(() => import("@/components/HomeWho"));
const HomeWhat = dynamic(() => import("@/components/HomeWhat"));
const HomeAccelarators = dynamic(() => import("@/components/HomeAccelarators"));
const HomeWhy = dynamic(() => import("@/components/HomeWhy"));
const HomeTestimonials = dynamic(() => import("@/components/HomeTestimonials"));
const HomeLinks = dynamic(() => import("@/components/HomeLinks"));
const HomeCoreCapability = dynamic(
  () => import("@/components/HomeCoreCapability")
);

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const metadata: Metadata = {
  title: "Custom Software Development & IT Consulting Services | VirtualifyMe",
  description:
    "Need custom software solutions? VirtualifyMe builds innovative apps & web systems across industries. Talk to our software consultants today!",
  keywords: [
    "software development",
    "software consultancy",
    "mobile app development",
    "web development",
    "emerging technologies",
    "Web 3.0",
    "blockchain",
    "IT consulting",
    "business solutions",
    "software solutions",
    "custom software development",
    "Web 3.0 development",
    "blockchain development",
    "AR/VR development",
    "AI development",
    "machine learning",
    "data analytics",
    "cloud computing",
    "cybersecurity",
    "best software consultancy for Web Applications",
    "top software development companies near you",
    "hire software developers for Next.js",
    "how to develop a mobile app",
    "what is Web 3.0?",
    "benefits of blockchain technology",
  ],
  openGraph: {
    title:
      "Custom Software Development & IT Consulting Services | VirtualifyMe",
    description:
      "Need custom software solutions? VirtualifyMe builds innovative apps & web systems across industries. Talk to our software consultants today!",
    siteName: "VirtualifyMe",
    type: "website",
    url: "https://www.virtualifyme.com/",
  },
};

export default function Home() {
  return (
    <main>
      <HomeHero slides={SLIDES} options={OPTIONS} />
      <HomeWho />
      <HomeCoreCapability />
      <HomeWhat />
      <HomeAccelarators />
      <HomeWhy />
      <HomeTestimonials />
      <HomeLinks />
    </main>
  );
}
