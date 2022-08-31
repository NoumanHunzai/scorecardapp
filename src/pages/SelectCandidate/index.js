import React from "react";
import Data from "../../components/candidateCard/data";
import { Box, Typography, makeStyles } from "@material-ui/core";
import CandidateCard from "../../components/candidateCard";

const SelectCandidate = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Typography variant="h1" align="center" className={classes.typo}>
          SELECT CANDIDATES
        </Typography>
        <Typography variant="h3" align="center" className={classes.desc}>
          Kindly select the candidate(s) you wish to score. You can select up to
          3 candidates. If you wish to change a selected candidate, click on the
          selected candidate to deselect it. Once you are satisfied with your
          selection, click “Next”.
        </Typography>
        <Typography variant="h3" align="center" className={classes.desc}>
          0/3 SELECTED
        </Typography>
      </Box>
      {Data.map((item) => {
        return (
          <CandidateCard
            username={item.username}
            image={item.image}
            catagory={item.catagory}
          />
        );
      })}
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
    padding: "2em 13em 0em 13em",
  },
}));
