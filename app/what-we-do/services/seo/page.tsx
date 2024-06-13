import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Cloud } from "@/content/AllSVG";
import ss from "../../../../public/seo1.jpg";
import ss1 from "../../../../public/seo2.jpg";

const page = () => {
  const title1 = "Maximize Your Online Presence with SEO.";
  const title2 = "Driving Business Growth with Effective SEO Strategies";
  const title3 = "Transform Your Business with SEO Excellence";
  const text1 = "";
  const text2 = `In today's digital marketplace, achieving high visibility on search engines is essential for business success. Our tailored SEO solutions focus on enhancing your search engine rankings, driving organic traffic, and improving user engagement. By collaborating closely with clients, we ensure effective SEO implementation and optimization, leading to significant business growth and increased online presence.`;
  const text3 = `Leverage the power of SEO to drive innovation and operational excellence. Our SEO Services division provides comprehensive strategies and solutions, from keyword research to on-page optimization. With our expertise, achieve a robust, scalable, and effective SEO strategy that propels your business forward.`;

  const panels = [
    {
      heading: "SEO Strategy and Transformation",
      content: "VSC's SEO solutions help businesses develop scalable strategies and accelerate their transformation journeys. Discover how our services can enhance your organization's visibility and value.",
      image: "/seo11.jpg",
      title: "SEO Strategy and Transformation"
    },
    {
      heading: "VSC and Keyword Research",
      content: "Experience the benefits of VSC's in-depth keyword research, providing insights into user search behavior to inform better optimization decisions.",
      image: "/seo12.jpg",
      title: "VSC and Keyword Research"
    },
    {
      heading: "VSC and On-Page Optimization",
      content: "Leverage VSC's on-page optimization services to enhance your website's content, structure, and usability, ensuring a superior search engine performance.",
      image: "/seo13.jpg",
      title: "VSC and On-Page Optimization"
    },
    {
      heading: "VSC and Link Building",
      content: "Utilize VSC's expertise in link building to improve your website's authority and rankings, driving your SEO transformation journey.",
      image: "/seo14.jpg",
      title: "VSC and Link Building"
    },
    {
      heading: "Enterprise SEO Solutions",
      content: "VSC's tailored SEO services provide future-ready strategies, offering industry-specific solutions that enhance search engine visibility and competitive edge.",
      image: "/seo15.jpg",
      title: "Enterprise SEO Solutions"
    }
  ];

  const benefits = [
    "Ensure a robust online future with personalized SEO solutions.",
    "Discover new opportunities for your search strategy.",
    "Innovate, adapt, and grow with SEO-driven ecosystems.",
    "Develop unique SEO models and expand quickly.",
    "Adopt advanced SEO technologies.",
    "Accelerate SEO innovation and unlock new growth potential."
  ];

  const approachItems = [
    {
      image: "/research 1.png",
      title: "Comprehensive Keyword Research",
    },
    {
      image: "/optimization 1.png",
      title: "Strategic On-Page Optimization",
    },
    {
      image: "/link 1.png",
      title: "Effective Link Building",
    },
    {
      image: "/analytics 1.png",
      title: "Data-Driven Analytics",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Cloud}
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
      <BusinessService panels={panels} />
      <Technologies />
    </div>
  );
};

export default page;
