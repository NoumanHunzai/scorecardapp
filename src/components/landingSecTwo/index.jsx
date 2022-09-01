import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Data from "./list.js";
function Sectiontwo() {
  const classes = useStyles();
  return (
    <Box className={classes.main_container}>
      {Data.map(({ description }, i) => (
        <React.Fragment key={i}>
          <Box className={classes.inner_container}>
            {description && (
              <Typography
                className="desc"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default Sectiontwo;
const useStyles = makeStyles((theme) => ({
  main_container: {
    padding: "20px 60px",
    width: "100%",
    margin: "auto",
    color: theme.palette.text.bold,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 10px",
    },
  },

  inner_container: {
    "& .heading": {
      fontFamily: theme.fontFamily,
      fontSize: 24,
      fontWeight: 600,
      paddingRight: 30,
    },

    "& .desc": {
      paddingRight: 60,
      fontweight: 700,
      fontSize: 14,
      fontFamily: theme.fontFamily,
      color: theme.palette.text.bold,
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
    },
  },
}));
