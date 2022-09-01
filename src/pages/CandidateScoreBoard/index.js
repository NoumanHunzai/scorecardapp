import { makeStyles, Typography } from "@material-ui/core";
import DividerLine from "../../units/Divider";
import InfoIcon from "@material-ui/icons/Info";
import Select from "../../units/select";

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
      <DividerLine margin={"10px 0px"} />
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
      <div style={{ display: "flex" }}>
        <InfoIcon />
        <Typography>General</Typography>
      </div>
      <DividerLine margin={"30px 0px"} height={"3px"} />
      <div className={classes.names}>
        <Typography>Candidate Name1</Typography>
        <Typography>Candidate Name1</Typography>
        <Typography>Candidate Name1</Typography>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon />
        <Typography>Candidate Age</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon />
        <Typography>Level Of Education</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon />
        <Typography>National Recoginition</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <Typography>Section Subtotal</Typography>
        <Typography>
          {"("}out of 17 {")"}
        </Typography>
        <div className={classes.names}>
          <Typography>Total candidate points</Typography>
          <Typography>Total candidate points</Typography>
          <Typography>Total candidate points</Typography>
        </div>
      </div>
    </div>
  );
};

export default CandidateScoreBoard;

const useStyles = makeStyles((theme) => ({
  scoremain: {
    padding: "20px 50px",
    display: "flex",
    minHeight: "100vh",
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
    marginBottom: "20px",
  },

  names: {
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
    position: "relative",
    left: "0px",
    marginLeft: "auto",
  },
}));
