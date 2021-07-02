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
      boxShadow: {
        new: "0 20px 25px -5px rgba(54, 212, 201,0.7), 0 10px 10px -5px rgba(54, 212, 201, 0.05)",
      },
      borderRadius: {
        full: "4,5rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
