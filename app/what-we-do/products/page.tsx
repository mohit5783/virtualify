import Link from "next/link";
import Image from "next/image";

const products = [
  "VSC - TravelCrafter",
  "BenzMint",
  "VSC - Smart Training",
  "Dashview Pro",
  "VSC - ParkingPulse"
];

const ProductShowcase = () => {
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
          src="/Enterprise AI.jpg"  // Replace with your actual image path
          alt="Product Showcase"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-5 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Innovative Products
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Explore our cutting-edge solutions designed to transform your business.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto mt-16 p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              href={`/what-we-do/products/${makeSEOFriendly(product)}`}
              key={product}
              className="group bg-white text-black rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
                  {product}
                </h3>
                <p className="text-gray-700">
                  Discover how {product} can revolutionize your operations.
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

export default ProductShowcase;