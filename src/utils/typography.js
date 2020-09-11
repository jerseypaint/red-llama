import Typography from "typography"
const typography = new Typography({
    googleFonts: [
        {
            name: 'Lato',
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
        {
            name: 'Poppins',
            styles: [
                '400',
            ],
        },
    ],
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Poppins",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Lato", "serif"],
})

export default typography