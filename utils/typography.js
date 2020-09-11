import Typography from 'typography'
import theme from 'typography-theme-github'


theme.googleFonts = [
  {
    name: "Noto+Sans+JP",
    styles: ["300","400","500","600","700","800","900"],
  }
]

theme.headerFontFamily = ["Noto Sans JP"]
theme.bodyFontFamily = ["Noto Sans JP"]


const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography