import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Sectiontwo from "../landingSecTwo";
import Buttons from "../../units/buttons";
import { Link } from "react-router-dom";
export default function SectionLanding() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Box className={classes.innerContainer}>
          <Typography variant="h1" className={classes.Typooo}>
            2023 NIGERIAN PRESIDENTIAL{" "}
          </Typography>
          <Typography variant="h1" className={classes.Typooo}>
            CANDIDATE SCOREBOARD
          </Typography>
        </Box>
        <Box className={classes.Sectiontwo}>
          <Sectiontwo />
        </Box>
        <Box className={classes.SectionButton}>
          <Link to="/login">
            <Buttons variant="green" className={classes.Buttons}>
              take poll
            </Buttons>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Typooo: {
    color: theme.palette.text.bold,

    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      lineHeight: 2,
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 50,
    },
  },
  Sectiontwo: {
    width: 930,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: "0px 70px 0px 70px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0px 5px 0px 5px",
    },
  },
  SectionButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px 60px 0px",
  },
  Buttons: {
    fontFamily: "Inter ",
    textTransform: "capitalize",
  },
}));
