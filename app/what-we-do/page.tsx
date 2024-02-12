import dynamic from "next/dynamic";

const BeliefBusiness = dynamic(
  () => import("@/components/whatwedo/BeliefBusiness")
);
const Hero = dynamic(() => import("@/components/whatwedo/Hero"));
const IndustryImpact = dynamic(
  () => import("@/components/whatwedo/IndustryImpact")
);
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(
  () => import("@/components/whatwedo/Technologies")
);

const page = () => {
  return (
    <main>
      <Hero />
      <BeliefBusiness />
      <IndustryImpact />
      <Services />
      <Technologies />
    </main>
  );
};

export default page;
