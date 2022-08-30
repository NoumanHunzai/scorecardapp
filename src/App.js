import { ThemeProvider } from "@material-ui/core/styles";
import { AppTheme } from "./theme/appTheme";
const App = () => {
  return <ThemeProvider theme={AppTheme}></ThemeProvider>;
};

export default App;
