import { alpha, Button, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    fontSize: 24,
    fontWeight: 700,

    backgroundColor: theme.palette.text.bold,
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.bold, 0.9),
    },
  },
  // green Button
  green: {
    backgroundColor: theme.palette.text.bold,
    color: theme.palette.background.primary,
    width: "249px",
    height: "40px",
    "&:hover": {
      color: theme.palette.background.primary,
      backgroundColor: alpha(theme.palette.text.bold, 0.9),
    },
  },
}))(Button);
