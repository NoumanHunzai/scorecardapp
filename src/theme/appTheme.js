import { createTheme } from "@material-ui/core";

export const AppTheme = createTheme({
  palette: {
    primary: "#EBF0F0",
    secondary: "#E7EDED",
    Scorecardtextcolor: "#092D2D",
    text: "#0F4C4B",
    lc: "#87A5A5",
    vlc: "#8EA7A3",
    dc: "#092D2D",
  },

  typography: {
    fontFamily: ["Nunito Sans", "sans-serif"],
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    fontWeightHeading: 700,

    h1: {
      fontWeight: 700,
      fontSize: "40px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "24px",
    },
    body1: {
      fontWeight: 700,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "16px",
    },
  },
});
