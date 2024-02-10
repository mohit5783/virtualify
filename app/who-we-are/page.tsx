import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/whoweare/Hero"));
const FuelBetter2moro = dynamic(
  () => import("@/components/whoweare/FuelBetter2moro")
);
const VSCGlance = dynamic(() => import("@/components/whoweare/VSCGlance"));
const OurPeople = dynamic(() => import("@/components/whoweare/OurPeople"));
const FooterFlyout = dynamic(
  () => import("@/components/whoweare/FooterFlyout")
);

const page = () => {
  return (
    <main>
      <Hero />
      <FuelBetter2moro />
      <VSCGlance />
      <OurPeople />
      <FooterFlyout />
    </main>
  );
};

export default page;
