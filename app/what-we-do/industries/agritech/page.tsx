import Screen3 from "@/components/whatwedo/Screen3";
import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";
import { AnimatedWavyBackground, Agriculture } from "@/content/AllSVG";
import ss from "../../../../public/SliderImage1.webp";



const page = () => {
  const title1 = "Agricultural Innovation";
  const title2 = "Transforming Agriculture through Technology";
  const text1 = "Pioneering AgriTech for profitable, eco-friendly farming. Explore tailored, budget-friendly solutions for sustainable growth.";
  const text2 = `Agriculture is undergoing a profound transformation, propelled by technological advancements. 
As the agriculture sector embraces digital solutions, traditional farming practices are evolving
into data-driven, precision agriculture methodologies. This paradigm shift is enhancing efficiency,
productivity, and sustainability across the entire agricultural value chain.
Furthermore, the integration of technologies such as IoT, AI, and blockchain is fostering transparency,
traceability, and resilience in agricultural operations. VSC is at the forefront of this Agritech revolution,
working closely with farmers, agribusinesses, and stakeholders to unlock the full potential of technology
in agriculture, ensuring food security, environmental stewardship, and economic prosperity.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Farm Productivity' },
    { id: 'set2', title: 'Ensuring Food Safety and Quality' },
    { id: 'set3', title: 'Facilitating Market Access and Traceability' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "Precision Farming Solutions",
          description: "Deploying IoT sensors, drones, and AI algorithms to optimize crop management practices, maximize yields, and minimize resource usage.",
          link: '/precision-farming'
        },
        {
          title: "Smart Irrigation Systems",
          description: "Utilizing sensor-based irrigation systems and data analytics to deliver water precisely where and when needed, conserving water resources and improving crop health.",
          link: '/smart-irrigation'

        }
      ]
    },
    set2: {
      items: [
        {
          title: "Quality Assurance Technologies",
          description: "Implementing blockchain-based traceability systems and AI-powered quality control solutions to ensure the safety, authenticity, and integrity of agricultural products.",
          link: '/quality-assurance'

        },
        {
          title: "Food Safety Compliance Solutions",
          description: "Enabling compliance with food safety regulations and standards through digital documentation, monitoring, and auditing tools.",
          link: '/food-safety-compliance'

        }
      ]
    },
    set3: {
      items: [
        {
          title: "Market Access Platforms",
          description: "Developing online marketplaces and e-commerce platforms to connect farmers directly with consumers, enabling fair trade and transparent transactions.",
          link: '/market-access'

        },
        {
          title: "Supply Chain Traceability Solutions",
          description: "Implementing blockchain-based supply chain solutions to track the journey of agricultural products from farm to fork, ensuring transparency, accountability, and sustainability.",
          link: '/supply-chain-traceability'

        }
      ]
    }
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Agriculture}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Leverage our AI expertise to unlock the future of farming together." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
