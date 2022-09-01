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
        <Typography variant="body2" className={classes.heading}>
          {username}
        </Typography>
        <Typography variant="body2" className={classes.catagory}>
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
    padding: "1.5em 0.5em 1.5em 0.8em",
  },
  heading: {
    paddingBottom: "0.3em",
    color: `${theme.palette.primary.main} !important`,
  },
  catagory: {
    fontWeight: 700,
    color: `${theme.palette.primary.main} !important`,
  },
}));
