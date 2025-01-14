/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Gold color for highlighted text
        secondary: "#004d66", // Dark teal for buttons and accents
        background: "#f8f9fa", // Light background for the body
        textPrimary: "#333333", // Dark text color
        link: "#000000", // Black for links in the header
        white: "#fff",
        black: "#000",
        main: "#002768",
      },
      fontFamily: {
        sans: ["Tajawal", "sans-serif"], // Arabic-friendly font
      },
      spacing: {
        headerHeight: "4rem", // Adjust height for header
        containerPadding: "1.5rem", // Padding for sections
      },
      backgroundImage: {
        hero: "url('/assets/hero-background.jpg')", // Example background image
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-rtl"), // Ensure to install this with npm or yarn
    require("tailwindcss-primeui"),
  ],
};
