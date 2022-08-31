import { alpha, Button, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    fontWeight: 700,
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
    },
  },
  // green Button
  green: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.primary,
    width: "200px",
    height: "40px",
    fontSize: 16,
    fontFamily: "Inter",
    "&:hover": {
      color: theme.palette.background.primary,
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
    },
  },
}))(Button);
