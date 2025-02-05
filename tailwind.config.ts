import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-orange": "#ff541a",
        "secondary-orange": "#ec9063",
        "tertiary-orange": "#ffc2a8",
        "primary-green": "#b0cdb8",
        "light-peach": "#f5ede3",
      },
      screens: {
        'xs': '500px'
      }
    },
  },
  plugins: [],
} satisfies Config;
