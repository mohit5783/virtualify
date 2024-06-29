import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, IoT } from "@/content/AllSVG";
import iotImg1 from "../../../../public/iot1.jpg";
import iotImg2 from "../../../../public/iot2.jpg";

const page = () => {
  const title1 = "Infusing Intelligence into Everyday Objects";
  const title2 = "Seamless Connected Experiences";
  const title3 = "Unlock the Potential of IoT-enabled Systems";
  const text1 = "";
  const text2 = `IoT-enabled systems unlock immense potential by embedding digital intelligence into physical entities. By interlinking products, processes, plants, and people, organizations can craft exceptional customer experiences and develop boundless digital ecosystems. We term this transformative approach as Infusing Intelligence into Everyday Objects™.`;
  const text3 = `Our IoT services enable businesses to leverage the power of interconnected devices, creating intelligent environments that enhance operational efficiency and drive innovation. From smart factories to connected vehicles, our comprehensive IoT solutions cater to diverse industry needs, ensuring robust and scalable implementations.`;

  const panels = [
    {
      heading: "Connected Plants",
      content: "Transform your manufacturing processes with IoT-enabled connected plants. Achieve greater efficiency and predictive maintenance capabilities.",
      image: "/iot11.jpg",
      title: "Connected Plants"
    },
    {
      heading: "Connected Services",
      content: "Enhance customer experiences and streamline operations with our IoT-powered connected services.",
      image: "/iot12.jpg",
      title: "Connected Services"
    },
    {
      heading: "Digital Thread",
      content: "Integrate and trace data throughout the product lifecycle with our digital thread solutions, ensuring seamless connectivity and data consistency.",
      image: "/iot13.jpg",
      title: "Digital Thread"
    },
    {
      heading: "Intelligent Automotive Solutions",
      content: "Revolutionize the automotive industry with our intelligent IoT solutions, offering enhanced safety, performance, and user experiences.",
      image: "/iot14.jpg",
      title: "Intelligent Automotive Solutions"
    },
    {
      heading: "Intelligent Products",
      content: "Develop and deploy smart products that communicate, learn, and adapt to user needs, driving innovation and customer satisfaction.",
      image: "/iot15.jpg",
      title: "Intelligent Products"
    }
  ];

  const benefits = [
    "Unlock new business opportunities with intelligent, connected devices.",
    "Enhance operational efficiency through real-time monitoring and predictive maintenance.",
    "Improve customer satisfaction by delivering personalized, data-driven experiences.",
    "Achieve scalability and flexibility with advanced IoT architectures.",
    "Drive innovation and stay ahead of the competition with cutting-edge IoT solutions.",
    "Ensure data security and integrity with robust IoT cybersecurity measures.",
    "Optimize resource management and reduce operational costs.",
    "Enable seamless integration of digital and physical systems.",
    "Foster collaboration and communication across connected ecosystems.",
    "Leverage advanced analytics for insightful decision-making."
  ];


  const approachItems = [
    {
      image: "/customer 1.png",
      title: "Smart",
    },
    {
      image: "/business 1.png",
      title: "Predictive",
    },
    {
      image: "/exchange 1.png",
      title: "Self-monitoring",
    },
    {
      image: "/car 1.png",
      title: "Autonomous",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={IoT}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={iotImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={iotImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="IoT" />
      <Technologies />
    </div>
  );
};

export default page;
