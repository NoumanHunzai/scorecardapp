import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import theme from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
