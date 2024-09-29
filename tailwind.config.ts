import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        btn_green: "#26A17B",
        main_border: "#627D2B",
        main_orange: "#E63E21",
        txt_brown: "#542122",
      },
      boxShadow: {
        orange_shadow: "0 0 30px -10px #e63e21",
      },
    },
  },
  plugins: [],
};
export default config;
