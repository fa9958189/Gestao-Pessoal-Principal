import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#8B5CF6",
        accent: "#22D3EE",
        dark: "#0B0B0F",
        graphite: "#13131A"
      },
      boxShadow: {
        glow: "0 0 35px rgba(139,92,246,0.35)",
        card: "0 10px 40px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
