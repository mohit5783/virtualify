import dynamic from "next/dynamic";
import { AnimatedWavyBackground, CryptoTravel } from "@/content/AllSVG";
import cryptoTravelImage1 from "../../../../public/blockchain1.jpg";
import { FaWallet, FaLock, FaGlobe, FaExchangeAlt } from 'react-icons/fa';

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const QuoteComponent = dynamic(() => import("@/components/whatwedo/Quote"));
const UseCases = dynamic(() => import("@/components/whatwedo/UseCases"));

const page = () => {
  const title1 = "Revolutionizing Travel with Blockchain Innovation";
  const text1 = "Our Crypto-travel-platform leverages cutting-edge blockchain technology to create a seamless, secure, and innovative experience for modern travelers.";

  const title2 = "Empowering Global Adventures through Cryptocurrency";
  const text2 = "By integrating blockchain and cryptocurrencies, we're transforming the travel industry, offering enhanced security, reduced fees, and unparalleled global accessibility.";

  const features = [
    {
      icon: <FaWallet className="w-12 h-12" />,
      title: "Multi-Cryptocurrency Support",
      description: "Book travel services using a wide range of popular cryptocurrencies.",
    },
    {
      icon: <FaLock className="w-12 h-12" />,
      title: "Blockchain-Powered Security",
      description: "Ensure secure transactions and data protection through advanced cryptography.",
    },
    {
      icon: <FaGlobe className="w-12 h-12" />,
      title: "Borderless Transactions",
      description: "Travel globally without currency exchange worries or hefty fees.",
    },
    {
      icon: <FaExchangeAlt className="w-12 h-12" />,
      title: "Smart Contract Bookings",
      description: "Automate bookings and refunds with transparent, self-executing contracts.",
    },
  ];

  const highlights = [
    { number: "50%", text: "Reduced Transaction Fees" },
    { number: "100+", text: "Supported Cryptocurrencies" },
    { number: "24/7", text: "Global Accessibility" },
    { number: "99.9%", text: "Transaction Security" }
  ];

  const futureBenefits = [
    "Decentralized travel marketplaces",
    "Tokenized loyalty programs",
    "Blockchain-verified travel reviews",
    "Crypto-friendly hotel networks",
    "Instant cross-border settlements"
  ];

  const timelineEvents = [
    { year: "2022", event: "Launch of multi-cryptocurrency booking system" },
    { year: "2023", event: "Integration of smart contract-based travel insurance" },
    { year: "2024", event: "Introduction of decentralized identity for travelers" },
    { year: "2025", event: "Implementation of AI-driven, blockchain-based travel recommendations" },
    { year: "2026", event: "Rollout of tokenized global loyalty program" }
  ];

  const useCases = [
    { title: "Corporate Travel", description: "Streamlined expense management and enhanced transparency" },
    { title: "Adventure Tourism", description: "Secure payments for remote locations and unique experiences" },
    { title: "Digital Nomads", description: "Borderless transactions for location-independent professionals" },
    { title: "Luxury Travel", description: "High-value bookings with enhanced privacy and security" }
  ];

  const innovationQuote = {
    text: "Our Crypto-travel-platform is not just about using blockchain in travel; it's about reimagining the entire travel experience for the digital age.",
    author: "Alex Rivera",
    position: "Head of Blockchain Innovation"
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={CryptoTravel}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={cryptoTravelImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <Benefits benefits={futureBenefits} />
      <UseCases cases={useCases} />
      <QuoteComponent quote={innovationQuote} />
      <Connect
        title="Join the Blockchain Travel Revolution"
        description="Ready to transform your travel business with our innovative Crypto-travel-platform? Let's explore the possibilities together."
        l1="" l2="" l3=""
        bt="Schedule a Demo"
      />
    </div>
  );
};

export default page;