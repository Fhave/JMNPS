/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",
        "background-light": "#FFFFFF",
        "background-dark": "#111827",
        "text-light": "#1E293B",
        "text-dark": "#E5E7EB",
        "subtle-light": "#F8FAFC",
        "subtle-dark": "#1F2937",
        "secondary-text-light": "#475569",
        "secondary-text-dark": "#9CA3AF",
        "border-light": "#E2E8F0",
        "border-dark": "#374151",
        "brand-dark": "#4F46E5",
        "brand-light": "#312E81",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/typography"],
};
