import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#F2F3F6',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

function Copyright() {
  return (
    <div>
    <Typography variant="body1" align="center">
      {"Mi Pokedex primera generación © "} {new Date().getFullYear()} 
    </Typography>
    <Typography variant="body2" align="center">
        {"Aplicación web creada por Uriel Ventura, prueba React.js para Houm."}
    </Typography>
    </div>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container maxWidth="md" className={classes.footer}>
          <Box mt={3}>
            <Copyright />
          </Box>
        </Container>
    </React.Fragment>
  );
};

export default Footer;
