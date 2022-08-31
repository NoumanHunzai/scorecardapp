import { Divider, makeStyles } from "@material-ui/core";

const DividerLine = (props) => {
  const classes = useStyles();
  return <Divider {...props} className={classes.divider} />;
};
export default DividerLine;

const useStyles = makeStyles((theme) => ({
  divider: { color: "red" },
}));
