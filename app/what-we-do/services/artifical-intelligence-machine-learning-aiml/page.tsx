import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Strength = dynamic(() => import("@/components/whatwedo/Strength"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
import { AnimatedWavyBackground, AI } from "@/content/AllSVG";
import ss from "../../../../public/AI.jpg";
import ss1 from "../../../../public/ML.jpg";
import BusinessService from "@/components/whatwedo/BusinessService";


const page = () => {
  const title1 = "AI shapes tomorrow. Humanity defines it.";
  const title2 = "Fusing human ingenuity with AI to reinvent industries";
  const title3 = "ML-Driven Success: Embrace the Cloud";
  const text1 = "";
  const text2 = `In an era where AI is revolutionizing every facet of existence, achieving success 
  demands a delicate equilibrium between innovation and prudence. Tailoring AI architectures to 
  suit specific industries and organizations, while implementing safeguards to protect stakeholders,
   is paramount. By collaborating with humans, AI has the potential to democratize knowledge and 
   enhance decision-making prowess. With human creativity and strategic acumen at its core, AI has 
   the power to fundamentally transform businesses and drive unparalleled results.`;
  const text3 = `Harness the power of machine learning for transformative business value across the assist,
   augment, and transform spectrum. Leveraging cloud, machine learning, and data, our ML.Cloud division 
   redefines value chains and operational paradigms. With our expertise, achieve scalable, sustainable, 
   and responsible ML outcomes, from strategy to execution.`

  const approachItems = [
    {
      image: "/business 1.png",
      title: "Innovative and Scalable",
    },
    {
      image: "/customer 1.png",
      title: "User-Centric Design",
    },
    {
      image: "/technology 1.png",
      title: "Seamlessly Integrated",
    },
    {
      image: "/dependable 1.png",
      title: "Secure and Reliable",
    },
  ];

  const PartnersItems = [
    { image: '/datasphere 1.png', title: 'DataSphere' },
    { image: '/innovatelabs 1.png', title: 'InnovateLabs' },
    { image: '/techcraft.jpg', title: 'TechCraft Solutions' },
    { image: '/DI.png', title: 'Digital Innovators' },
    { image: '/smartcorp.png', title: 'SmartCorp' },
    { image: '/ecompulse.png', title: 'EcomPulse' },
  ];


  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={AI}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={ss1}
      />
      <Strength />
      <Partners PartnersItems={PartnersItems} />
      <BusinessService />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
