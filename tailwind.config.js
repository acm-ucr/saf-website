/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saf: {
          brown: "#3C3535",
          red: "#C4494B",
          "beige-100": "#F9F2E7",
          "beige-200": "#E2C69E",
        },
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
        libre: ["var(--font-libre_bodoni)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-continuation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-continuation": "marquee-continuation 30s linear infinite",
      },
    },
  },
  plugins: [],
};
