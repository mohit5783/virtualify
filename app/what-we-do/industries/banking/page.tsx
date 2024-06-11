import dynamic from "next/dynamic";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, BankCreditCard } from "@/content/AllSVG";
import ss from "../../../../public/banking-pp.avif";



const page = () => {
  const title1 = "Banks Go Boundaryless";
  const title2 = "Banking on innovation";
  const text1 = "Advancing Business Potential through Cutting-Edge Technology Solutions."
  const text2 = `Banking is evolving beyond the confines of traditional banks. 
  As financial services integrate into various industries, companies
  are expanding their traditional roles to develop cross - industry ecosystems,
    enhancing value throughout the entire customer journey.This seamless integration,
      powered by advanced intelligence, enables the creation of innovative products and
  experiences.Moreover, a human - centric approach to banking—emphasizing inclusivity and
  sustainability—promotes comprehensive growth.`;
  const sections = [
    { id: 'set1', title: 'Reimagining the banking experience' },
    { id: 'set2', title: 'Preempting and mitigating risk' },
    { id: 'set3', title: 'Battling financial crime in a digital-first world' },

  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Customer Experience Management Suite",
          description: "A suite driven by data and powered by automation, designed to reimagine customer engagements across critical service landscapes.",
          link: '/contact-us'

        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Assurance Intelligence Suite for Risk and Compliance",
          description: "Empowering intelligent interventions through cognitive technologies in risk data and control assurance.",
          link: '/contact-us'
        },
        {
          title: "Risk Radar: An Early Alert System",
          description: "Utilizing machine learning, this system monitors, evaluates, and addresses counterparty risks in real-time.",
          link: '/contact-us'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Anti-Fraud Solutions",
          description: "Comprehensive offerings and services to fortify defenses against fraudulent activities.",
          link: '/contact-us'
        },
        {
          title: "Sentinel Cybersecurity Platform",
          description: "Leveraging advanced analytics, VSC provides managed detection and response services to proactively combat cyber threats.",
          link: '/contact-us'
        }
      ]
    },
  };

  return (
    <div>
      {/* <h1>What We Do / Industries / advertising</h1> */}
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={BankCreditCard}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's transform your bank together with next-gen AI solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
