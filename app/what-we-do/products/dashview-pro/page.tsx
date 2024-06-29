import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Dashboard } from "@/content/AllSVG";
import dashviewproImage1 from "../../../../public/dashboard1.avif";
import { FaChartPie, FaCogs, FaTachometerAlt, FaCloud } from "react-icons/fa";
import QuoteComponent from "@/components/whatwedo/Quote";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const FutureBenefits = dynamic(() => import("@/components/whatwedo/FutureBenefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));

const DashviewProPage = () => {
  const title1 = "Dashview-Pro: The Ultimate Business Dashboard Solution";
  const text1 = "Empowering businesses with real-time data visualization and actionable insights.";
  const title2 = "Optimize Your Business Performance";
  const text2 = "Dashview-Pro provides a comprehensive dashboard solution designed to monitor key metrics, enhance decision-making, and drive growth.";

  const highlights = [
    { number: "500k+", text: "Dashboards created" },
    { number: "1k+", text: "Businesses served" },
    { number: "99.9%", text: "Uptime guarantee" },
    { number: "50%", text: "Increase in data-driven decisions" },
  ];

  const solutionsQuote = {
    text: "Dashview-Pro transforms the way businesses visualize and interact with their data, making it easier to derive actionable insights and drive growth.",
    author: "John Doe",
    position: "CEO, Dashview-Pro",
  };

  const panels = [
    {
      heading: "Real-Time Data Visualization",
      content: "Access real-time data visualizations with our advanced dashboard tools. Stay updated with live data streams and make informed decisions on the go.",
      image: "/analytics1.jpg",
      title: "Real-Time Data Visualization"
    },
    {
      heading: "Customizable Dashboards",
      content: "Create fully customizable dashboards tailored to your business needs. Add widgets, charts, and graphs to monitor the metrics that matter most.",
      image: "/analytics12.jpg",
      title: "Customizable Dashboards"
    },
    {
      heading: "Integration with Multiple Data Sources",
      content: "Seamlessly integrate with various data sources such as databases, cloud services, and APIs to consolidate your data in one place.",
      image: "/dashboard11.jpg",
      title: "Integration with Multiple Data Sources"
    },
    {
      heading: "Advanced Analytics",
      content: "Utilize advanced analytics tools to gain deeper insights into your data. Perform trend analysis, predictive modeling, and more to stay ahead of the competition.",
      image: "/analytics2.jpg",
      title: "Advanced Analytics"
    },
    {
      heading: "User Access Control",
      content: "Manage user access with robust security features. Ensure the right people have access to the right data, maintaining data integrity and confidentiality.",
      image: "/privacy.webp",
      title: "User Access Control"
    },
    {
      heading: "Cloud-Based Platform",
      content: "Access your dashboards from anywhere with our secure cloud-based platform. Enjoy the flexibility of remote monitoring and collaboration.",
      image: "/cloud1.jpg",
      title: "Cloud-Based Platform"
    }
  ];

  const features = [
    {
      icon: <FaChartPie className="w-12 h-12" />,
      title: "Comprehensive Data Visualization",
      description: "Visualize your data with a variety of charts, graphs, and widgets.",
    },
    {
      icon: <FaCogs className="w-12 h-12" />,
      title: "Seamless Integrations",
      description: "Integrate with your existing systems for a unified data view.",
    },
    {
      icon: <FaTachometerAlt className="w-12 h-12" />,
      title: "Performance Monitoring",
      description: "Monitor business performance metrics in real-time.",
    },
    {
      icon: <FaCloud className="w-12 h-12" />,
      title: "Cloud-Based Access",
      description: "Access your dashboards from anywhere, anytime.",
    },
  ];

  const futureBenefits = [
    {
      icon: "/iterative 1.png",
      title: "Enhanced Decision-Making",
      description: "Make informed decisions with up-to-date data and analytics."
    },
    {
      icon: "/agile 1.png",
      title: "Improved Efficiency",
      description: "Optimize operations with real-time monitoring."
    },
    {
      icon: "/innovation 1.png",
      title: "Scalable Solution",
      description: "Easily scale your dashboard as your business grows."
    },
    {
      icon: "/S1.png",
      title: "Increased Collaboration",
      description: "Boost collaboration with shared dashboards."
    }
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Dashboard}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={dashviewproImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <FutureBenefits benefits={futureBenefits} />
      <BusinessService panels={panels} text1="Dashview-Pro" />
      <QuoteComponent quote={solutionsQuote} />
      <Connect
        title="Transform Your Business with Dashview-Pro"
        description="Ready to optimize your business performance? Get in touch with our experts today."
        l1="" l2="" l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default DashviewProPage;
