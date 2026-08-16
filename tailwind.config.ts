import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/lib/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        espresso: "#3E4737",
        surface: "#E3E8DE",
        gold: "#7D8F7B",
        forest: "#556B4E",
        brick: "#7D91A6",
        brass: "#A6A891",
        ink: "#222825",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
