import type { Config } from "tailwindcss";

const config: Config = {
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
        'green': {
          DEFAULT: '#739E82',
          dark: '#547860',
          light: '#93B49E'
        },
        'red': {
          DEFAULT: '#95190C',
          dark: '#711409',
          light: '#BD210F'
        }
      },
    },
  },
  plugins: [],
};
export default config;
