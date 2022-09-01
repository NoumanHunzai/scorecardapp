import React, { useState } from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import check_circle from "../../assets/check_circle.png";
import { clsx } from "clsx";

const CandidateCard = ({ username, catagory, image }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const menuStyle = clsx({
    [classes.mainContainer]: true,
    [classes.select]: selected,
  });
  return (
    <Box className={menuStyle} onClick={handleClick}>
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
        <Box className={classes.checkImgContainer}>
          {selected && (
            <img
              src={check_circle}
              alt={selected}
              className={classes.checkImg}
            />
          )}
        </Box>
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
  select: {
    border: `1px solid ${theme.palette.primary.main} !important`,
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
    padding: "1.5em 0.5em 1em 0.8em",
    position: "relative",
  },
  heading: {
    paddingBottom: "0.2em",
    color: `${theme.palette.primary.main} !important`,
  },
  catagory: {
    fontWeight: "700 !important",
    color: `${theme.palette.primary.main} !important`,
  },
  checkImg: {
    width: "26.67px",
    height: "26.67px",
  },
  checkImgContainer: {
    right: "-0.8em",
    bottom: "0.1em",
    position: "absolute",
  },
}));
