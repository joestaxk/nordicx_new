import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        xDark: "#0D0E0F",
        xMutedText: "#87909F",
        xRedColor: "#FF4761",
        xGreenColor: "#0BBA74",
        xBlueColor: "#4281FF",
        xButtonColor: "#0485EC",
        xBlueThickColor: "#4281FF"
      },
      screens: {
        "x3xl": "1690px",
        "x2xl": "1453px",
        "xsm": "468px",
        "xxs": "344px"
      }
    },
  },
  plugins: [],
} satisfies Config;
