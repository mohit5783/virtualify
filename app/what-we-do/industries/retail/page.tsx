import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, Retail } from "@/content/AllSVG";
import ss from "../../../../public/retail.jpg";


const page = () => {
  const title1 = "Pioneering the Future of Retail";
  const title2 = "Drive Success with VSC Algo Retail™";
  const text1 = "We help you fuel growth and innovate continuously by enabling end-to-end business transformation across digital strategy, customer experience, operations, and commercial proposition optimization.";
  const text2 = `Our deep industry expertise, unique outcome-driven engagement model, AI-powered products and platforms, innovation hubs, and partnership ecosystems accelerate your journey to a data-led, nimble enterprise of the future.`;

  const sections = [
    { id: 'set1', title: 'Improving Customer Experience and Driving Loyalty' },
    { id: 'set2', title: 'Driving Operational Excellence and Adopting New Business Models' },
    // { id: 'set3', title: 'Accelerating Innovation and Ensuring Sustainability' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Experiential Digital Commerce Platform",
          description: "Our omnichannel commerce solution helps firms drive digital transformation, enabling flexibility and agility to meet the evolving needs of digital shoppers.",
          link: '/experiential-commerce'
        }
      ]
    },
    set2: {
      items: [

        {
          title: "VSC Cognitive Supply Chain Consulting",
          description: "A business consulting service enabled by a suite of AI-powered solutions for transforming three core dimensions of supply chains—design, optimization, and smart operations.",
          link: '/cognitive-supply-chain'
        }
      ]
    },
    // set3: {
    //   items: [
    //     {
    //       title: "VSC Pace™",
    //       description: "An ecosystem-led platform for innovation at speed and scale.",
    //       link: typeof window !== 'undefined' ? new URL('/pace', window.location.origin) : new URL('/pace', 'https://example.com')
    //     },
    //     {
    //       title: "VSC Envirozone™",
    //       description: "A suite of digital solutions to mitigate ESG risks through increased carbon footprint visibility.",
    //       link: typeof window !== 'undefined' ? new URL('/envirozone', window.location.origin) : new URL('/envirozone', 'https://example.com')
    //     },
    //     {
    //       title: "VSC Clever Energy™",
    //       description: "An energy and emission management system to drive energy efficiency and achieve carbon neutrality.",
    //       link: typeof window !== 'undefined' ? new URL('/clever-energy', window.location.origin) : new URL('/clever-energy', 'https://example.com')
    //     }
    //   ]
    // }
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Retail}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's revolutionize retail together with AI-powered solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
