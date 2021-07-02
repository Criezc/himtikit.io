module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: "#0C0217",
        darkerblue: "#0e1130",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
