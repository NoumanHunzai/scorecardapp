import { Divider, makeStyles, Typography } from "@material-ui/core";

const CandidateScoreBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.scoremain}>
      <div className={classes.textScore}>
        <Typography gutterBottom>CANDIDATE SCORECARD</Typography>
        <Typography gutterBottom>
          You’d be scoring your selected candidates in 4 sections namely:
          General, Knowledge Political History, Global & Business Exposure and
          Values. You can move forward after scoring your candidate(s) using the
          “Next” button or the section tabs below.
        </Typography>
      </div>
      <Divider gutterTop className={classes.divider} />
      <div className={classes.rowsbar}>
        <Typography>General {">"}</Typography>
        <Typography>
          Knowledge{"&"}Political History {">"}
        </Typography>

        <Typography>
          Global{"&"}Business Exposure {">"}
        </Typography>
        <Typography>Values {">"}</Typography>
        <Typography> Summary {">"}</Typography>
      </div>
    </div>
  );
};

export default CandidateScoreBoard;

const useStyles = makeStyles((theme) => ({
  scoremain: {
    padding: "20px 50px",
    display: "flex",

    flexDirection: "column",
  },
  textScore: {
    textAlign: "center",
  },
  rowsbar: {
    display: "flex",
    paddingTop: "40px",
    justifyContent: "space-between",
    width: "60%",
  },
}));
