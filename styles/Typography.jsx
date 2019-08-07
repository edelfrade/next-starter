
import Typography from "typography";
import { Colors } from "./Theme";

const ThemeFontStyles = new Typography({
    title: "Open",
    baseFontSize: "15px",
    baseLineHeight: 1.25,
    scaleRatio: 5 / 3.5,
    headerFontFamily: ["Open Sans", "sans-serif"],
    bodyFontFamily: ["Open Sans", "sans-serif"],
    headerColor: Colors.copy,
    bodyColor: Colors.copy,
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    includeNormalize: true,
    overrideStyles: () => ({
        h1: {
            color: Colors.primary,
            marginBottom: "15px"
        },
        "h2,h3,h4,h5,h6": {
            marginBottom: "5px"
        },
        a: {
            color: Colors.primary
        }
    })
});

export default ThemeFontStyles;