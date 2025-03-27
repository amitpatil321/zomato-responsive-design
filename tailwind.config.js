/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--primary-50))",
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
        },
        light: {
          50: "rgb(var(--light-50))",
          100: "rgb(var(--light-100))",
          200: "rgb(var(--light-200))",
          300: "rgb(var(--light-300))",
          400: "rgb(var(--light-400))",
          500: "rgb(var(--light-500))",
          600: "rgb(var(--light-600))",
          700: "rgb(var(--light-700))",
          800: "rgb(var(--light-800))",
          900: "rgb(var(--light-900))",
        },
      },
    },
  },
  plugins: [],
};
