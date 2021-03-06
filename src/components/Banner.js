import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  transparency: {
    backgroundColor: (props) => props.backgroundColor,
  },
  height: {
    height: (props) => props.height,
  },
  padding: {
    padding: theme.spacing(2),
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: (props) => props.size || "cover",
    backgroundBlendMode: "Color",
  },
  margin: {
    marginTop: "1rem",
  },
}));

const Banner = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      className={`${classes.image} ${classes.transparency} ${classes.height} ${classes.padding}`}
      container
      direction="column"
      justify="center"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <Container>
        <Typography variant="h2" component="h1">
          {props.title}
        </Typography>
        {props.isSearch && <Search all={props.all} />}
      </Container>
    </Grid>
  );
};

export default Banner;
