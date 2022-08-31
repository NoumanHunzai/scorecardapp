// import { colors } from '@material-ui/core';

const white = "#FFFFFF";
const black = "#092D2D";
const primary = "#EBF0F0";
const secondary = "#E7EDED";
const Scorecardtextcolor = "#092D2D";
const text = "#0F4C4B";
const lc = "#87A5A5";
const vlc = "#8EA7A3";
const dc = "#092D2D";
const palette = {
  black,
  white,
  primary: {
    contrastText: black,
    main: "##0F4C4B",
  },
  secondary: {
    contrastText: white,
    main: "#092D2D",
  },
  text: {
    primary: "#000000",
    secondary: "#092D2D",
  },
  background: {
    default: "linear-gradient(180deg, #ebf0f0 0%, #ffffff 100%);",
    paper: white,
    primary: white,
  },
};

export default palette;
