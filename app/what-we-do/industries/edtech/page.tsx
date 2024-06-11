import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, EdTech } from "@/content/AllSVG";
import ss from "../../../../public/SliderImage4.webp";


const page = () => {
  const title1 = "Education Goes Digital";
  const title2 = "Transforming Education through Technology";
  const text1 = "Join the Educational Revolution. Expertly crafted EdTech solutions for accessible and affordable education.";
  const text2 = `Learners demand accessible, high-quality educational services anytime, anywhere, and at affordable costs.
This trend is pushing educational institutions to rethink their operations and build cross-industry ecosystems.
These solutions provide intelligent, connected, and personalized learning experiences, focusing on the most crucial element—the learner.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Learning Accessibility' },
    { id: 'set2', title: 'Ensuring Quality and Engagement' },
    { id: 'set3', title: 'Facilitating Career Readiness and Lifelong Learning' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "Digital Learning Platforms",
          description: "Offering user-friendly digital learning environments that provide 24/7 access to educational content, enhancing learner convenience and engagement.",
          link: '/digital-learning'
        },
        {
          title: "Mobile Learning Solutions",
          description: "Enabling secure and seamless mobile learning experiences through advanced technologies, making education more accessible and flexible.",
          link: '/mobile-learning'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "Interactive Content and Tools",
          description: "Implementing interactive content and tools to enhance learner engagement, comprehension, and retention.",
          link: '/interactive-content'
        },
        {
          title: "Assessment and Feedback Systems",
          description: "Providing tools and platforms that offer timely and constructive feedback to learners, ensuring continuous improvement and learning effectiveness.",
          link: '/assessment-feedback'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "Career Readiness Programs",
          description: "Developing programs that prepare learners for the workforce, equipping them with the necessary skills and knowledge for career success.",
          link: '/career-readiness'
        },
        {
          title: "Lifelong Learning Platforms",
          description: "Creating platforms that support continuous learning and professional development, enabling learners to stay current and competitive in their fields.",
          link: '/lifelong-learning'
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
        BankCreditCard={EdTech}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Partner with us for intelligent Edtech solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;