import { makeStyles, Typography } from "@material-ui/core";
import Buttons from "../../units/buttons";
import DividerLine from "../../units/Divider";
import Select from "../../units/select";
import InfoIcon from "@material-ui/icons/Info";
import { useNavigate } from "react-router-dom";

const General = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.rowsbar}>
        <Typography variant="body1">
          General <span className={classes.arrow}>{">"}</span>
        </Typography>
        <Typography variant="body2">
          Knowledge{"&"}Political History{" "}
          <span className={classes.arrow}>{">"}</span>
        </Typography>

        <Typography variant="body2">
          Global{"&"}Business Exposure{" "}
          <span className={classes.arrow}>{">"}</span>
        </Typography>
        <Typography variant="body2">
          Values <span className={classes.arrow}>{">"}</span>
        </Typography>
        <Typography variant="body2">
          {" "}
          Summary <span className={classes.arrow}>{">"}</span>
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h3">General</Typography>
      </div>
      <DividerLine margin={"40px 0px 2px 0px"} height={"3px"} />
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
        <Buttons
          variant="green"
          onClick={() => {
            navigate("/score/knowledge");
          }}
        >
          Next
        </Buttons>
      </div>
    </>
  );
};

export default General;

const useStyles = makeStyles((theme) => ({
  rowsbar: {
    display: "flex",

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
  arrow: {
    marginLeft: "10px",
  },
}));
