import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Virtualify Software Consultancy",
    short_name: "VSC",
    description:
      "Virtualify Software Consultancy Pvt. Ltd. is a software development company based in India. We provide software development services to our clients.",
    start_url: "/",
    display: "standalone",
    background_color: "#181818",
    theme_color: "#181818",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/VSC192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/VSC512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "logo.webp",
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
