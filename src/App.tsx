import { MuiThemeProvider, Toolbar } from "@material-ui/core";
import AppRouter from "./AppRouter";
import Header from "./Header";
import { StylesProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Header />
        <Toolbar />
        <AppRouter />
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
