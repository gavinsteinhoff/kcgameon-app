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
        primary: "rgb(var(--primary))",
        accent: "rgb(var(--accent))",

        "base-100": "rgb(var(--base-100))",
        "base-90": "rgb(var(--base-90))",
        "base-80": "rgb(var(--base-80))",
        "base-70": "rgb(var(--base-70))",
        "base-60": "rgb(var(--base-60))",
        "base-50": "rgb(var(--base-50))",
        "base-40": "rgb(var(--base-40))",
        "base-30": "rgb(var(--base-30))",
        "base-20": "rgb(var(--base-20))",
        "base-10": "rgb(var(--base-10))",
      },
    },
  },
  plugins: [],
};

export default config;

// primary: "#3eb1dc",
// secondary: "#ffffff",
// accent: "##2398C4",
// neutral: "#6b7280",
// "base-100": "#2f2d2e",
// info: "#2087AC",
// success: "#3fea8c",
// warning: "#ffc800",
// error: "#d40035",
