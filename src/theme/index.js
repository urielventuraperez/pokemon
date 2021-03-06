import { createMuiTheme, colors } from "@material-ui/core";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: "#F8F8F8",
    },
    primary: {
      main: "#ff5000",
      light: "#fff"
    },
    secondary: {
      main: "#ffdbd0",
      contrastText: "#FF452B"
    },
    text: {
      primary: "#424242",
      secondary: "#616161",
      hint: "#FF452B",
    },
    warning: {
      main: "#FF452B",
    },
  },
  typography,
});

export default theme;
