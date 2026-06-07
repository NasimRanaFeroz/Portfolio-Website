/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        rain: "url('/images/bg-rain.png')",
      },
      keyframes: {
        "navbar-slide": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "lcp-fade": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "navbar-slide": "navbar-slide 0.4s ease-out forwards",
        "lcp-fade": "lcp-fade 0.6s ease-out 0.1s forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
