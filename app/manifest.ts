import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VSC VirtualifyMe",
    short_name: "VSC",
    description: "VirtualifyMe software company website and Tassenger product entry.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#061b34",
    icons: [
      {
        src: "/brand/vsc-logo.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ]
  };
}
