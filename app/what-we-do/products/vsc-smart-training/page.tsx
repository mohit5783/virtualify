import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Training } from "@/content/AllSVG";
import smartTrainingImage1 from "../../../../public/Training1.jpg";
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaLaptopCode } from "react-icons/fa";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const FutureBenefits = dynamic(() => import("@/components/whatwedo/FutureBenefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
const QuoteComponent = dynamic(() => import("@/components/whatwedo/Quote"));

const VscSmartTrainingPage = () => {
  const title1 = "VSC Smart Training: Revolutionizing Education";
  const text1 = "Empowering educators and learners with innovative technology";
  const title2 = "Transform Education with Smart Training Solutions";
  const text2 = "VSC Smart Training provides cutting-edge solutions designed to enhance learning experiences, streamline administrative tasks, and foster collaboration in educational institutions.";

  const highlights = [
    { number: "100+", text: "Educational institutions transformed" },
    { number: "10k+", text: "Educators empowered" },
    { number: "95%", text: "Student engagement boost" },
    { number: "30%", text: "Administrative efficiency improvement" },
  ];

  const panels = [
    {
      heading: "Online Learning Platforms",
      content: "Create engaging and interactive online learning environments that support both synchronous and asynchronous learning experiences.",
      image: "/training11.avif",
      title: "Online Learning Platforms"
    },
    {
      heading: "Virtual Classrooms",
      content: "Facilitate real-time collaboration and communication with virtual classrooms equipped with advanced teaching tools.",
      image: "/training12.jpg",
      title: "Virtual Classrooms"
    },
    {
      heading: "Learning Management Systems (LMS)",
      content: "Manage and deliver educational content efficiently with our comprehensive Learning Management Systems tailored for educational needs.",
      image: "/training13.avif",
      title: "Learning Management Systems (LMS)"
    },
    {
      heading: "Personalized Learning Paths",
      content: "Tailor learning experiences to individual student needs with adaptive learning technologies that optimize student engagement and success.",
      image: "/seo11.jpg",
      title: "Personalized Learning Paths"
    },
    {
      heading: "Assessment and Analytics",
      content: "Utilize data-driven insights to assess student performance, track learning outcomes, and continuously improve educational strategies.",
      image: "/analytics1.jpg",
      title: "Assessment and Analytics"
    },
    {
      heading: "Professional Development",
      content: "Empower educators with professional development resources and training programs designed to enhance teaching practices and educational leadership.",
      image: "/training14.jpg",
      title: "Professional Development"
    }
  ];

  const features = [
    {
      icon: <FaUserGraduate className="w-12 h-12" />,
      title: "Student-Centric Learning",
      description: "Promote personalized learning experiences that cater to diverse student needs and learning styles."
    },
    {
      icon: <FaChalkboardTeacher className="w-12 h-12" />,
      title: "Empower Educators",
      description: "Empower educators with innovative tools for effective teaching and professional growth."
    },
    {
      icon: <FaBookOpen className="w-12 h-12" />,
      title: "Comprehensive Course Management",
      description: "Streamline course content, assignments, and assessments with intuitive management solutions."
    },
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: "Integrated Learning Technologies",
      description: "Integrate cutting-edge technologies to create immersive learning experiences and foster collaboration."
    },
  ];

  const solutionsQuote = {
    text: "In today's rapidly evolving educational landscape, VSC Smart Training is committed to delivering innovative solutions that empower educators and enhance student learning outcomes.",
    author: "John Smith",
    position: "CEO, VSC Smart Training",
  };

  const futureBenefits = [
    {
      icon: "/technology 1.png",
      title: "Enhanced Learning Experiences",
      description: "Create interactive learning environments that inspire students and boost academic performance."
    },
    {
      icon: "/S2.png",
      title: "Administrative Efficiency",
      description: "Streamline administrative tasks with automated processes, reducing workload and optimizing resource allocation."
    },
    {
      icon: "/S1.png",
      title: "Improved Collaboration",
      description: "Foster collaboration among educators, students, and parents with integrated communication tools."
    },
    {
      icon: "/analytics 1.png",
      title: "Data-Driven Insights",
      description: "Utilize analytics to track student progress, identify learning trends, and inform instructional strategies."
    }
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Training}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={smartTrainingImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <FutureBenefits benefits={futureBenefits} />
      <BusinessService panels={panels} text1="Smart Training" />
      <QuoteComponent quote={solutionsQuote} />
      <Connect
        title="Transform Education with VSC Smart Training"
        description="Ready to enhance learning experiences and streamline educational operations? Contact us today to learn more about our innovative solutions."
        l1=""
        l2=""
        l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default VscSmartTrainingPage;
