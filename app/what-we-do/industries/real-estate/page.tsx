import dynamic from "next/dynamic";
import { AnimatedWavyBackground, RealEstate } from "@/content/AllSVG";
import rs from "../../../../public/RealEstate.jpg";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(
  () => import("@/components/whatwedo/Technologies")
);

const realEstatePage = () => {
  const title1 = "Revolutionizing Real Estate Ecosystems";
  const title2 = "Shaping Future Living";
  const text1 =
    "Transforming property management and real estate experiences through innovation.";
  const text2 = `Real estate enterprises are continuously evolving, developing robust networks 
  that facilitate seamless, secure, and flexible property transactions and management. 
  By forming strategic partnerships and creating virtual market platforms with advanced 
  technology, they're crafting innovative, personalized solutions.`;

  const sections = [
    { id: "set1", title: "Optimizing Property Management" },
    { id: "set2", title: "Creating Customized Living Experiences" },
    { id: "set3", title: "Enhancing Asset Management" },
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Property Management Platform",
          description:
            "A state-of-the-art platform designed to streamline property management operations and enhance efficiency.",
          link: "/property-management",
        },
      ],
    },
    set2: {
      items: [
        {
          title: "VSC Customized Living Solutions",
          description:
            "Leveraging data and AI to deliver personalized living experiences, boosting customer satisfaction and loyalty.",
          link: "/customized-living",
        },
      ],
    },
    set3: {
      items: [
        {
          title: "VSC Real Estate Asset Management System",
          description:
            "A comprehensive system for managing real estate assets efficiently, ensuring optimal performance and maintenance.",
          link: "/asset-management",
        },
      ],
    },
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={RealEstate}
      />
      <ScreenText title2={title2} text2={text2} image1={rs} />
      <Screen3
        content={content}
        sections={sections}
        mainp="Partner with us to innovate the real estate industry with cutting-edge solutions."
      />
      <Services />
      <Technologies />
    </div>
  );
};

export default realEstatePage;
