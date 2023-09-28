import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
    },
    extend: {
      screens: {
        xl: "1120px",
      },
      colors: {
        gray: {
          950: "#212529",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
