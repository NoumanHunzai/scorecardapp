import palette from "./palette";

const typography = {
  fontFamily: ["Nunito Sans", "sans-serif"].join(","),
  fontStyle: "normal",
  fontWeight: "normal",
  color: palette.secondary.main,

  h1: {
    display: "flex",
    justifyContent: "center",

    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "45px",
  },
  h2: {
    

    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "34px",
  },
  h3: {
   
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
  },

  body1: {
 
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
  },
};

export default typography;
