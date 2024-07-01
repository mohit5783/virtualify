import Link from "next/link";
import Image from "next/image";

const products = [
  "Web Apps",
  "Mobile Apps",
  "Native Apps",
  "Smart TV Apps",
  "Progressive Web Apps (PWA)",
  "Serverless Applications",
  "Single Page Applications (SPA)",
  "Microservices",
  "Cloud Native Applications"
];

const ProductsShowcase = () => {
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
          src="/Machine Learning on AWS.jpg"  // Replace with your actual image path
          alt="Product Showcase"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Innovative Product Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Explore our cutting-edge product offerings designed to elevate your digital presence.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto mt-16 p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              href={`/products/${makeSEOFriendly(product)}`}
              key={product}
              className="group bg-white text-black rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300 h-full flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
                  {product}
                </h3>
                <p className="text-gray-700">
                  Discover how our {product} can transform your business.
                </p>
              </div>
              <div className="bg-gray-200 px-6 py-4 mt-auto">
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

export default ProductsShowcase;