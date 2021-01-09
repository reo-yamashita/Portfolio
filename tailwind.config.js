const colors = require("tailwindcss/colors")

module.exports = {
  purge: false,
  theme: {
    colors: {
      // Build your palette here
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      orange: colors.orange,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
