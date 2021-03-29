import { createMuiTheme } from "@material-ui/core/styles";
import "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "sohne",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
