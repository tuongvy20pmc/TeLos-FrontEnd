module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors:{
        abc: "#0012",
        circle: "#F1E4FF",
        primary: "#8C30F5"
      },
      fontSize:{
        h1: "72px", // fontsize 72px
        h2: "48px",
        h5: "24px"
      },
      lineHeight:{
        '64': '64px',
        '32': '32px'
      },
      width:{
        section_heading: "350px",
      },
      maxWidth: {
        '1440': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}