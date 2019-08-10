import Typography from "typography";
import { Colors } from "./Theme";

const ThemeFontStyles = new Typography({
  title: "Open",
  baseFontSize: "13px",
  baseLineHeight: 1.25,
  scaleRatio: 5 / 2,
  headerFontFamily: ["HelveticaNeue", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  headerColor: Colors.copy,
  bodyColor: Colors.copy,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  includeNormalize: true,
  overrideStyles: () => ({
    h1: {
      marginBottom: "15px"
    },
    "h2,h3,h4,h5,h6": {
      marginBottom: "5px"
    },
    a: {
      color: Colors.primary,
      textDecoration: "none"
    }
  })
});

export default ThemeFontStyles;
