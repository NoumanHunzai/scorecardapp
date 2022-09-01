import { Box, makeStyles, Typography, TextField } from "@material-ui/core";

import React from "react";

import { Link } from "react-router-dom";
import Buttons from "../../units/buttons";

export default function LoginSection() {
  const classes = useStyles();
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={5} pb={1}>
        <Typography variant="h4" className={classes.typo}>
          User Details
        </Typography>
      </Box>
      <Box className={classes.inputField}>
        <TextField
          className={classes.input}
          label="Name"
          variant="outlined"
          placeholder="Enter your full name"
        />
      </Box>
      <Box className={classes.inputField}>
        <TextField
          className={classes.input}
          label="Email Address (optional)"
          variant="outlined"
          placeholder="someone@example.com"
        />
      </Box>
      <Box className={classes.inputField}>
        <TextField
          className={classes.input}
          label="Location (State)"
          variant="outlined"
          placeholder="Enter your location "
        />
      </Box>
      <Box className={classes.buttonSection}>
        <Link to="/selectcandidate">
          <Buttons className={classes.ButtonSignin} variant="green">
            Next
          </Buttons>
        </Link>
      </Box>
      <Box mt={3}></Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  inputField: {
    paddingTop: 30,
  },
  mainContainer: {
    width: 600,
    height: 500,
    margin: "auto",
    paddingTop: 100,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    fontWeight: 400,
    fontSize: 18,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 120,
    },
  },

  input: {
    width: 500,
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    "& .MuiOutlinedInput-input": {
      fontWeight: "normal",
      color: theme.palette.text.select,
    },
  },

  buttonSection: {
    marginBottom: "50px",
    paddingTop: 50,
  },
  ButtonSignin: {
    textTransform: "capitalize",
    fontSize: 24,
    color: theme.palette.background.primary,
    width: 200,
    height: "50px",
    fontWeight: 500,
  },
}));
