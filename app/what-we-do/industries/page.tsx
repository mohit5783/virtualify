import Link from "next/link";
import Image from "next/image";

const industries = [
  "AgriTech", "HealthTech", "FinTech", "EdTech", "Retail", "Banking",
  "News Media", "Insurance", "Public Services", "Travel", "Logistics",
  "Real Estate", "Energy", "Telecom", "Entertainment", "E-commerce",
  "Social Media", "Advertising"
];

const IndustryImpact = () => {
  const makeSEOFriendly = (str: string) => {
    return str
      .replace(/[^a-zA-Z0-9 -]/g, "")
      .replace(/ /g, "-")
      .toLowerCase()
      .replace(/-+/g, "-");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/testing2.jpg"
          alt="Industry Impact"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Explore Industries, Experience Impact
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Discover how we drive success across various sectors with our tailored solutions.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto mt-16 p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              href={`/what-we-do/industries/${makeSEOFriendly(industry)}`}
              key={industry}
              className="group bg-white text-black rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300"
            >
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
                  {industry}
                </h3>
                <p className="text-gray-700">
                  Explore our innovative solutions for the {industry} sector.
                </p>
              </div>
              <div className="bg-gray-200 px-6 py-4">
                <span className="text-black group-hover:text-gray-700 transition-colors duration-300">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryImpact;