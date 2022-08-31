import palette from "./palette";

const typography = {
  fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  fontStyle: "normal",
  fontWeight: "normal",
  color: palette.secondary.main,
  backgroundColor: "transparent",

  h1: {
    display: "flex",
    justifyContent: "center",
    color: palette.secondary.main,

    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "45px",
  },
  h2: {
    color: palette.text.secondary,

    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "34px",
  },
  h3: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "bitter",
  },

  body1: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
  },
};

export default typography;
