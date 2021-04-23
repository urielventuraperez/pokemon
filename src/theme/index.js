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
    },
    secondary: {
      main: "#ffdbd0",
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
