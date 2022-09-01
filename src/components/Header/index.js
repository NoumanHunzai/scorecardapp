import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.innerContainer}>
        <Link to="/">
          <img className={classes.logoImage} src={logo} alt="logo" />
          <img className={classes.logosec} src={logo2} alt="logo" />
        </Link>
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
    display: "flex",
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
      width: 100,
    },
  },
  logosec: {
    paddingBottom: "5px",
  },
  secContainer: {
    paddingRight: 50,
    paddingTop: "18px",
    width: 250,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  Typooo: {
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.secondary.main,
  },
}));
