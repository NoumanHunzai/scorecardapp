import { makeStyles, Typography } from "@material-ui/core";
import DividerLine from "../../units/Divider";
import InfoIcon from "@material-ui/icons/Info";
import Select from "../../units/select";
import Button from "../../units/buttons";

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
          General, Knowledge Political History, Global & Business Exposure and
          Values. You can move forward after scoring your candidate(s) using the
          “Next” button or the section tabs below.
        </Typography>
      </div>
      <DividerLine margin={"10px 0px"} />
      <div className={classes.rowsbar}>
        <Typography variant="body1">General {">"}</Typography>
        <Typography variant="body2">
          Knowledge{"&"}Political History {">"}
        </Typography>

        <Typography variant="body2">
          Global{"&"}Business Exposure {">"}
        </Typography>
        <Typography variant="body2">Values {">"}</Typography>
        <Typography variant="body2"> Summary {">"}</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h3">General</Typography>
      </div>
      <DividerLine margin={"30px 0px"} height={"3px"} />
      <div className={classes.names}>
        <Typography variant="h4">Candidate Name1</Typography>
        <Typography variant="h4">Candidate Name1</Typography>
        <Typography variant="h4">Candidate Name1</Typography>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h4">Candidate Age</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h4">Level Of Education</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h4">National Recoginition</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <Typography variant="h4">SECTION SUBTOTAL</Typography>
        <Typography variant="body2">
          {"("}out of 17 {")"}
        </Typography>
        <div className={classes.names}>
          <Typography variant="subtitle1">Total candidate points</Typography>
          <Typography variant="subtitle1">Total candidate points</Typography>
          <Typography variant="subtitle1">Total candidate points</Typography>
        </div>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button
          style={{
            minWidth: "100px",
            color: "white",
            fontWeight: "700",
            fontSize: "24px",
            textTransform: "capitalize",
          }}
        >
          Next
        </Button>
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
  icon: { color: theme.palette.primary.main, marginRight: "2px" },
}));
