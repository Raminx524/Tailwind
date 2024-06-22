/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPurple: "hsl(256, 26%, 20%)",
        grayBlue: "hsl(216, 30%, 68%)",
        darkMyPurple: "hsl(270, 9%, 17%)",
        grayViolet: "hsl(273, 4%, 51%)",
        vlGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
