import { makeStyles, Typography } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import DividerLine from "../../units/Divider";

const CandidateScoreBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.scoremain}>
      <div className={classes.textScore}>
        <Typography gutterBottom variant="h1">
          CANDIDATE SCORECARD
        </Typography>
        <Typography gutterBottom variant="paragraph">
          You’d be scoring your selected candidates in 4 sections namely:
          General, Knowledge Political History, Global {"&"} Business
          <br /> Exposure and Values. You can move forward after scoring your
          candidate(s) using the “Next” button or the section tabs below.
        </Typography>
      </div>
      <DividerLine margin={"10px 0px 0px 0px"} />
      <Outlet />
    </div>
  );
};

export default CandidateScoreBoard;

const useStyles = makeStyles((theme) => ({
  scoremain: {
    padding: "0px 50px",
    display: "flex",
    maxHeight: "100vh",
    flexDirection: "column",
  },
  textScore: {
    textAlign: "center",
  },
}));
