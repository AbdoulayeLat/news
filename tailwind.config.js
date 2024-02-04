/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        text: 'hsl(236, 13%, 42%)',
        text_hover: 'hsl(35, 77%, 62%)',
        verydarkblue: 'hsl(240, 100%, 5%)',
        darkgrayishblue: 'hsl(236, 13%, 42%)',
        softorange: 'hsl(35, 77%, 62%)',
        grayishblue: 'hsl(233, 8%, 79%)'
      }
    },
  },
  plugins: [],
};
