/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          secondary: '#EC4899',
          accent: '#F59E0B'
        }
      }
    },
  },
  plugins: [],
};
