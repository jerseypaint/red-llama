import Typography from "typography"
const typography = new Typography({
    googleFonts: [
        {
            name: 'Maven Pro',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ],
        },
        {
            name: 'IBM Plex Sans',
            styles: [
                '600',
            ],
        },
    ],
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Maven Pro",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Maven Pro", "serif"],
})

export default typography