import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.css";
import dynamic from "next/dynamic";
import HomeAccelarators from "@/components/HomeAccelarators";
import HomeWhy from "@/components/HomeWhy";
import HomeLinks from "@/components/HomeLinks";
import HomeTestimonials from "@/components/HomeTestimonials";

const HomeHero = dynamic(() => import("@/components/HomeHero"));
const HomeWho = dynamic(() => import("@/components/HomeWho"));
const HomeWhat = dynamic(() => import("@/components/HomeWhat"));
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
