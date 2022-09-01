import { Divider, makeStyles } from "@material-ui/core";

const DividerLine = (props) => {
  const classes = useStyles();
  return (
    <Divider
      {...props}
      className={classes.divider}
      style={{ height: props.height, margin: props.margin }}
    />
  );
};
export default DividerLine;

const useStyles = makeStyles((theme) => ({
  divider: { color: "red" },
}));
