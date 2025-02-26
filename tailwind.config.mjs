/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          500: "#F59E0B",
          600: "#D97706",
        },
        blue: {
          500: "#3B82F6",
        },
        purple: {
          800: "#6B21A8",
        },
        indigo: {
          600: "#4F46E5",
        },
      },
      backgroundImage: {
        circleRadial:
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 60%, rgba(140, 140, 140, 0.25) 80%, rgba(255, 255, 255, 0.5) 100%)",
      },
      boxShadow: {
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
