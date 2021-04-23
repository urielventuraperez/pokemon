import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import { ConnectedRouter } from 'connected-react-router';

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
    </ConnectedRouter>
  );
};

export default App;
