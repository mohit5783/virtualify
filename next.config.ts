import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 95]
  },
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/who-we-are/:path*",
        destination: "/about",
        permanent: true
      },
      {
        source: "/upcoming-projects/tassenger",
        destination: "/tassenger",
        permanent: true
      },
      {
        source: "/products/tassenger",
        destination: "/tassenger",
        permanent: true
      },
      {
        source: "/upcoming-projects/:path*",
        destination: "/products",
        permanent: true
      },
      {
        source: "/what-we-do/services/:path*",
        destination: "/services",
        permanent: true
      },
      {
        source: "/what-we-do/industries/:path*",
        destination: "/industries",
        permanent: true
      },
      {
        source: "/what-we-do/products/:path*",
        destination: "/products",
        permanent: true
      },
      {
        source: "/what-we-do/innovation/:path*",
        destination: "/products",
        permanent: true
      },
      {
        source: "/what-we-do/technologies/:path*",
        destination: "/services",
        permanent: true
      },
      {
        source: "/what-we-do/:path*",
        destination: "/services",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
