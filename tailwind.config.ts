import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        handlee: ["var(--font-handlee)"],
        zcool: ["var(--font-zcool)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
export default config;
