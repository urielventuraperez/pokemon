import React from "react";
import PropTypes from "prop-types";
import MainLayout from "../src/layouts/";
import { ThemeProvider } from "@material-ui/core/styles";
import RenderRoutes from '../src/routes';
import theme from "../src/theme";
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyles from "../src/components/GlobalStyles";

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout content={RenderRoutes} />
    </ThemeProvider>
    </ConnectedRouter>
  );
};


App.propTypes = {
  history: PropTypes.object,
};


export default App;
