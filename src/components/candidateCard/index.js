import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";

const CandidateCard = ({ username, catagory, image }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.leftContainer}>
        <img src={image} alt="Avatar" />
      </Box>
      <Box className={classes.rightContainer}>
        <Typography variant="h3" className={classes.heading}>
          {username}
        </Typography>
        <Typography variant="h3" className={classes.catagory}>
          {catagory}
        </Typography>
      </Box>
    </Box>
  );
};

export default CandidateCard;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    background: theme.palette.background.primary,
    width: "252px",
    cursor: "pointer",
  },
  leftContainer: {
    width: "104px",
    height: "104px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    color: theme.palette.background.primary,
    padding: "1.5em 0.5em 1.5em 0.8em",
  },
  heading: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    paddingBottom: "0.3em",
  },
  catagory: {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "19px",
  },
}));
