import palette from "./palette";

const typography = {
  fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  fontStyle: "normal",
  fontWeight: "normal",
  color: palette.secondary.main,
  backgroundColor: "transparent",

  h1: {
    color: palette.primary.main,
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "45px",
  },
  h2: {
    color: palette.primary.main,
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "34px",
  },
  h3: {
    color: palette.primary.contrastText,
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },
  h4: {
    color: palette.primary.contrastText,
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "24px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },
  h5: {
    color: palette.primary.contrastText,
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "24px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },

  body1: {
    color: palette.primary.main,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },
  body2: {
    color: palette.text.select,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
  },
  subtitle1: {
    color: palette.text.shadow,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Bitter",
    fontStyle: "normal",
  },
  subtitle2: {
    color: palette.text.shadow,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    fontFamily: "Nunito Sans, sans-serif",
    fontStyle: "normal",
  },
  paragraph: {
    color: palette.primary.main,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "Bitter",
    fontStyle: "normal",
  },
};

export default typography;
