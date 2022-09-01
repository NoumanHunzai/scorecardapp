import { alpha, Button, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    fontWeight: 700,
    borderRadius: 0,
    backgroundColor: theme.palette.text.bold,
    "&:hover": {
      backgroundColor: alpha(theme.palette.text.bold, 0.9),
    },
  },
  // green Button
  green: {
    backgroundColor: theme.palette.text.bold,
    color: theme.palette.background.primary,
    width: "200px",
    height: "40px",
    fontSize: 16,
    fontFamily: "Inter",
    "&:hover": {
      color: theme.palette.background.primary,
      backgroundColor: alpha(theme.palette.text.bold, 0.9),
    },
  },
}))(Button);
