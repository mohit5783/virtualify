import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Strength = dynamic(() => import("@/components/whatwedo/Strength"));
import { AnimatedWavyBackground, Web } from "@/content/AllSVG";
import ss from "../../../../public/web.jpg";

const page = () => {
  const title1 = "Transforming the Web Industry";
  const title2 = "Innovating Online Experiences";
  const text1 = "Pioneering the Future of Web Development";
  const text2 = `Revolutionizing the web industry involves more than just advanced coding techniques. 
  To create compelling and user-centric online experiences, web businesses must innovate their development 
  processes and adopt flexible, scalable solutions. The backbone of this progress will be a resilient 
  digital framework that ensures reliability and performance, enabling companies to drive innovation across 
  the entire web ecosystem.`;

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

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Web}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Strength />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
