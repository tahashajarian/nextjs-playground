module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandPrimary: {
          light: "#61acff",
          main: "#0078ff",
          dark: "#005abf",
        },
        brandSecondary: {
          light: "#6febd4",
          main: "#1ed6b5",
          dark: "#169981",
        },
        tertiary: {
          DEFAULT: "#fe8075",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
