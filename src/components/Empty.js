import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.papper,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 320,
    marginBottom: 50,
  }
}));

const Empty = () => {
  const classes = useStyles();

  return (
      <Box
        display="flex"
        flexDirection="column"
        height="80%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
              Vamo a calmarnos
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
              El pokemon no existe
          </Typography>
          <Box textAlign="center">
            <img
              alt="Vamo a calmarnos"
              className={classes.image}
              src="/static/images/404.png"
            />
          </Box>
          <Box textAlign="center">
            <Button
              color="primary"
              variant='outlined'
              aria-label="inicio"
              component={RouterLink}
              to={`/`}
            >
              Inicio
            </Button>
          </Box>
        </Container>
      </Box>
  );
};

export default Empty;
