/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F4F8EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme)=> ({
        "graident-yellowred": "linear-graident(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url(./assets/HomePageGraphic.png)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolveText: "url(./assets/banner-removebg.png)",
        abstractwaves: "url(./assets/flight_takeoff.svg)",
        sparkles: "url(./assets/flight_takeoff_24dp.svg)",
        cricles: "url(./assets/Circles.png)",
      }
    },
    screens: {
      "xs": "480px",
      "sm": "768px",
      "md": "1060px",
      "lg": "1260px",
      "xl": "1460px",
    }
  },
  plugins: [],
}

