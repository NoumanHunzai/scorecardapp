import React, { useState } from "react";
import Data from "../../components/candidateCard/data";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import CandidateCard from "../../components/candidateCard";
import Buttons from "../../units/buttons";

const SelectCandidate = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    console.log(selected, "selected");
  };
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography variant="h1" align="center" className={classes.typo}>
          SELECT CANDIDATES
        </Typography>
        <Typography variant="body2" align="center" className={classes.desc}>
          Kindly select the candidate(s) you wish to score. You can select up to
          3 candidates. If you wish to change a selected candidate,
          <br />
          click on the selected candidate to deselect it. Once you are satisfied
          with your selection, click “Next”.
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.select}
        >
          0/3 SELECTED
        </Typography>
      </Box>

      <Box className={classes.cardSection}>
        <Grid container spacing={3}>
          {Data.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <CandidateCard
                  username={item.username}
                  image={item.image}
                  catagory={item.catagory}
                  onClick={() => {
                    handleClick();
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={classes.btnContainer}>
        <Buttons variant="green">Done</Buttons>
      </Box>
    </Box>
  );
};

export default SelectCandidate;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em",
  },
  typo: {
    fontWeight: 600,
    fontSize: "40px",
  },
  desc: {
    fontWeight: 400,
    fontSize: "16px",
    padding: "2em",

    fontFamily: "Bitter !important",
    color: `${theme.palette.text.secondary} !important`,
  },
  select: {
    color: `${theme.palette.text.select} !important`,
    fontWeight: 600,
  },
  cardSection: {
    padding: "2em 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },

  btnContainer: {
    padding: "1em",
    textAlign: "center",
  },
}));
