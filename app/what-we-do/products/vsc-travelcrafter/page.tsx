import dynamic from "next/dynamic";
import { AnimatedWavyBackground, TravelCrafter } from "@/content/AllSVG";
import travelcrafterImage1 from "../../../../public/travel.jpg";
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach } from "react-icons/fa";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const FutureBenefits = dynamic(() => import("@/components/whatwedo/FutureBenefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
const QuoteComponent = dynamic(() => import("@/components/whatwedo/Quote"));

const VscTravelcrafterPage = () => {
  const title1 = "VSC TravelCrafter: Revolutionizing Travel Management";
  const text1 = "Empowering travel agencies and tour operators with cutting-edge technology";
  const title2 = "Streamline Your Travel Business Operations";
  const text2 = "VSC TravelCrafter is an all-in-one travel management solution designed to optimize your workflow, enhance customer experiences, and boost your bottom line.";

  const highlights = [
    { number: "50k+", text: "Travel itineraries created monthly" },
    { number: "700+", text: "Travel agencies powered" },
    { number: "100%", text: "Booking accuracy" },
    { number: "40%", text: "Operational efficiency improvement" },
  ];

  const panels = [
    {
      heading: "Custom Itineraries",
      content: "Design personalized travel itineraries that cater to individual preferences and needs. Our advanced algorithms ensure a seamless and unique travel experience, making every trip unforgettable.",
      image: "/analytics13.jpg",
      title: "Custom Itineraries"
    },
    {
      heading: "Booking Management",
      content: "Manage all your travel bookings effortlessly with our integrated system. Track reservations, make modifications, and handle cancellations easily from one centralized platform.",
      image: "/seo13.jpg",
      title: "Booking Management"
    },
    {
      heading: "Real-Time Travel Updates",
      content: "Stay informed with real-time updates on flight statuses, hotel bookings, and travel alerts. Our system ensures you have up-to-the-minute information for a smooth and hassle-free journey.",
      image: "/cs15.jpg",
      title: "Real-Time Travel Updates"
    },
    {
      heading: "24/7 Travel Support",
      content: "Access round-the-clock customer support for any travel-related queries or issues. Our dedicated team is here to assist you every step of the way, ensuring peace of mind throughout your travels.",
      image: "/Travelcrafter13.png",
      title: "24/7 Travel Support"
    },
    {
      heading: "Expense Management",
      content: "Streamline your travel expenses with our efficient expense management tool. Easily track spending, generate reports, and maintain budgets to ensure cost-effective travel planning.",
      image: "/Travelcrafter12.avif",
      title: "Expense Management"
    },
    {
      heading: "Destination Insights",
      content: "Discover comprehensive destination guides with valuable insights on local attractions, dining options, and activities. Plan your trips with detailed, curated information to make the most of your travels.",
      image: "/travelcrafter11.jpg",
      title: "Destination Insights"
    }
  ];

  const features = [
    {
      icon: <FaPlane className="w-12 h-12" />,
      title: "Comprehensive Booking Engine",
      description: "Seamlessly manage flights, hotels, cars, and activities in one platform.",
    },
    {
      icon: <FaHotel className="w-12 h-12" />,
      title: "Real-time Inventory Management",
      description: "Access up-to-date availability and pricing across all travel services.",
    },
    {
      icon: <FaCar className="w-12 h-12" />,
      title: "Automated Itinerary Creation",
      description: "Generate professional travel itineraries with just a few clicks.",
    },
    {
      icon: <FaUmbrellaBeach className="w-12 h-12" />,
      title: "Customer Management",
      description: "Maintain detailed customer profiles for personalized service",
    },
  ];

  const solutionsQuote = {
    text: "In order to thrive in the competitive travel industry, it's crucial that agencies leverage easy-to-implement technology powered by artificial intelligence, data-driven analytics, and seamless integrations.",
    author: "Jane Doe",
    position: "CEO, VSC TravelCrafter",
  };

  const futureBenefits = [
    {
      icon: "/iterative 1.png",
      title: "Streamlined Booking Process",
      description: "Simplify travel arrangements with our intuitive booking interface, designed to save time and reduce errors."
    },
    {
      icon: "/agile 1.png",
      title: "Real-Time Updates",
      description: "Stay informed with instant notifications on flight changes, hotel bookings, and itinerary updates."
    },
    {
      icon: "/innovation 1.png",
      title: "Cost Optimization",
      description: "Leverage our smart algorithms to find the best deals and optimize travel spending for your clients."
    },
    {
      icon: "/testing.png",
      title: "Customizable Packages",
      description: "Create unique travel experiences with our flexible package builder, tailored to each client's preferences."
    }
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={TravelCrafter}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={travelcrafterImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <FutureBenefits benefits={futureBenefits} />
      <BusinessService panels={panels} text1="Travel Crafter" />
      <QuoteComponent quote={solutionsQuote} />
      <Connect
        title="Transform Your Travel Business with VSC TravelCrafter"
        description="Ready to take your travel agency to the next level? Get in touch with our experts today."
        l1="" l2="" l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default VscTravelcrafterPage;