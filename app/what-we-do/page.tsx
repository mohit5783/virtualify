import { Metadata } from "next";
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
export const metadata: Metadata = {
  title: "VirtualifyMe: Innovative Software Solutions & IT Consulting Services",
  description:
    "VirtualifyMe goes beyond software development. We empower businesses with innovative solutions tailored to their industry. Unleash your potential & make a difference.",
  keywords: [
    "custom software development",
    "IT consulting",
    "software solutions",
    "industry-specific solutions",
    "cloud computing",
    "digital marketing",
    "web development",
    "mobile app development",
    "virtual reality",
    "augmented reality",
    "metaverse",
    "Web 3.0",
    "blockchain",
    "AWS",
    "Azure",
    "GCP",
    "SEO",
    "SEM",
    "SMO",
    "SMM",
    "healthcare software development",
    "FinTech solutions",
    "best software development company for FinTech",
    "affordable healthcare software solutions",
  ],
  openGraph: {
    title:
      "Custom Software Development, IT Consulting | Industry-Specific Solutions | VirtualifyMe",
    description:
      "Need tailored software solutions or impactful IT consulting? Discover VirtualifyMe's industry-focused services & technologies. Get a free quote & unlock your business potential!",
    siteName: "VirtualifyMe",
    type: "website",
    url: "https://www.virtualifyme.com/",
  },
};
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
