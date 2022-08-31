import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Sectiontwo from "../landingSecTwo";
import Buttons from "../../units/buttons";

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
        <Box>
          <Buttons variant="green">TAKE POLL</Buttons>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 120,
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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
