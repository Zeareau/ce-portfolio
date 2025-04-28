/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": "1535px",
    },
    colors: {
      baseDarkerGrey: "#757575",
      baseDarkGrey: "#B2BABB",
      baseGrey: "#CCD1D1",
      baseWhite: "#EFEFEF",
      black: "#000000",
      white: "#F1E1D9",
      cyan: "#15D1E9",
      lightCyan: "#88E5F0",
      darkCyan: "#009FB3",
      red: "#FF461E",
      lightRed: "#FF6E4F",
      darkRed: "#CE492D",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3F4441",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: '10px 10x 200px 150px rgba(94, 206, 220, 0.5)',
        redMediumShadow: '10px 10x 200px 150px rgba(255,70, 30, 0.5)',
      }
    },
    fontFamily: {
      body: ['Josefin Sans'],
      special: ['Roboto']
    }
  },
  plugins: [],
}

