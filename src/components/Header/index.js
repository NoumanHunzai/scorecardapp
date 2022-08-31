import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.innerContainer}>
        <img className={classes.logoImage} src={logo} alt="logo" />
      </Box>
      <Box className={classes.secContainer}>
        <Box>
          <Typography variant="h2" className={classes.Typooo}>
            SCORING
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.Typooo}>
            {" "}
            RESULTS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  innerContainer: {
    paddingLeft: 50,
    paddingTop: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
  },
  logoImage: {
    width: " 206px",
    height: "48px",
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
  },

  secContainer: {
    paddingRight: 50,
    paddingTop: "18px",
    width: 250,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  Typooo: {},
}));
