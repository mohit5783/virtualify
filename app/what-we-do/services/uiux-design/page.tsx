import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, UIUX } from "@/content/AllSVG";
import ss from "../../../../public/uiux1.jpg";
import ss1 from "../../../../public/uiux2.png";

const page = () => {
  const title1 = "Innovate with Exceptional UI/UX.";
  const title2 = "Driving Business Success with User-Centered Design";
  const title3 = "Transform Your Business with Intuitive UI/UX";
  const text1 = "";
  const text2 = `In the current digital landscape, delivering exceptional user experiences is vital for competitive advantage. Our customized UI/UX solutions focus on enhancing user satisfaction, engagement, and efficiency. By working closely with clients, we ensure smooth design implementation and optimization, resulting in a significant business impact and increased user loyalty.`;
  const text3 = `Utilize the power of user-friendly design to foster innovation and operational excellence. Our UI/UX Services division provides end-to-end design strategies and solutions, from initial concept to final deployment. With our expertise, create seamless, engaging, and user-friendly interfaces that drive your business forward.`;

  const panels = [
    {
      heading: "UI/UX Strategy and Transformation",
      content: "VSC's UI/UX solutions help businesses develop scalable design strategies and expedite their transformation journeys. Discover how our services can enhance your organization's value.",
      image: "/uiux11.jpg",
      title: "UI/UX Strategy and Transformation"
    },
    {
      heading: "VSC and User Research",
      content: "Experience the benefits of VSC's comprehensive user research, providing insights into user needs and behaviors to inform better design decisions.",
      image: "/uiux12.jpg",
      title: "VSC and User Research"
    },
    {
      heading: "VSC and Prototyping",
      content: "Leverage VSC's prototyping services to iterate and refine designs, ensuring a superior user experience through continuous improvement.",
      image: "/uiux13.jpg",
      title: "VSC and Prototyping"
    },
    {
      heading: "VSC and Interaction Design",
      content: "Utilize VSC's expertise in interaction design to enhance user engagement and satisfaction, driving your UI/UX transformation journey.",
      image: "/uiux14.jpg",
      title: "VSC and Interaction Design"
    },
    {
      heading: "Enterprise UI/UX Solutions",
      content: "VSC's tailored UI/UX services provide future-ready strategies, offering industry-specific solutions that improve user engagement and competitive edge.",
      image: "/uiux15.jpg",
      title: "Enterprise UI/UX Solutions"
    }
  ];

  const benefits = [
    "Ensure a robust future with personalized UI/UX solutions.",
    "Discover new opportunities for your design strategy.",
    "Innovate, adapt, and grow with user-centric design ecosystems.",
    "Develop unique UI/UX models and expand quickly.",
    "Adopt advanced design technologies.",
    "Accelerate design innovation and unlock new growth potential."
  ];

  const approachItems = [
    {
      image: "/customer 1.png",
      title: "Comprehensive User Research",
    },
    {
      image: "/iterative 1.png",
      title: "Iterative Prototyping",
    },
    {
      image: "/interaction 1.png",
      title: "Engaging Interaction Design",
    },
    {
      image: "/software-testing 1.png",
      title: "Enhanced Usability Testing",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={UIUX}
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
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="UIUX" />
      <Technologies />
    </div>
  );
};

export default page;
