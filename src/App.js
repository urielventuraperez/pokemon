import React from "react";
import MainLayout from "../src/layouts/";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyles from "../src/components/GlobalStyles";

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout />
    </ThemeProvider>
    </ConnectedRouter>
  );
};

export default App;
