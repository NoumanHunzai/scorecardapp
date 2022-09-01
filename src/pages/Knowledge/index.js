import { makeStyles, Typography } from "@material-ui/core";
import DividerLine from "../../units/Divider";
import InfoIcon from "@material-ui/icons/Info";
import Select from "../../units/select";
import Button from "../../units/buttons";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.rowsbar}>
        <Typography variant="body1">
          General <span className={classes.arrow}>{">"}</span>
        </Typography>
        <Typography variant="body1">
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
        <Typography variant="h3">Knowledge{"&"}Political History</Typography>
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
        <Typography variant="h4">Manifesto - Recovery Plan</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h4">Manifesto - Economic Plan</Typography>
        <div className={classes.names}>
          <Select />
          <Select />
          <Select />
        </div>
      </div>
      <DividerLine margin={"10px 0px"} height={"2px"} />
      <div style={{ display: "flex" }}>
        <InfoIcon className={classes.icon} />
        <Typography variant="h4">Manifesto - Addressing Insecurity</Typography>
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
          variant="green"
          onClick={() => {
            navigate("/score/global");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Knowledge;

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
