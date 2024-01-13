import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import dynamic from "next/dynamic";
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
