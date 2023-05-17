/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_2: "white",
        color_3: "black",
        color_4: "orange",
        color_5: "#292929",
        color_6: "#E78716",
        color_7: "#007FFF",
        // color_3: "#f5fafd",
        color_8: "#F5F5F5",
        color_9: "#ADD8E6",
        color_10: "#B0C4DE",
        color_11: "#65aed9",
        linkBlue: "#0047ab",
        maroon: "#541e1b",
        color_4: "#6987ab",
        text_1: "#36454f",
        text_2: "#979797",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      workSans: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
