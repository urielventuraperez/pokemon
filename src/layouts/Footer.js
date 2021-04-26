import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#F2F3F6",
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      textAlign: "left",
    },
  },
}));

function Copyright() {
  return (
    <div>
      <Typography variant="body1">
        {"Mi Pokedex primera generación © "} {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2">
        {"Aplicación web creada por Uriel Ventura, prueba React.js para Houm."}
      </Typography>
    </div>
  );
}

function MySocialMedia() {
  return (
    <Box>
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/urielventuraperez"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com/VenturaPerezCarlosUriel/"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
    </Box>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
      <Container maxWidth={false} className={classes.footer}>
        <Box mt={3}>
          <Copyright />
        </Box>
        <Box mt={3}>
          <MySocialMedia />
        </Box>
      </Container>
  );
};

export default Footer;
