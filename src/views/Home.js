import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "../components/Banner";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Pokecard from "../components/PokeCard";
import { getRandomNumbers, randonNumber } from "../utils/random";
import { getPokemons, getAllPokemon } from "../redux/actions";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  description: {
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: '#fffff7',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paragraph: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  image: {
    width: 220
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const { getPokemons, pokemons, all, isLoad, getAllPokemon } = props;

  useEffect(() => {
    getPokemons(getRandomNumbers(1, 151, randonNumber(1,12)));
    getAllPokemon();
  }, [getPokemons, getAllPokemon]);

  return (
    <React.Fragment>
      <Banner
        image={"/static/images/pokeball.jpg"}
        title={"¿Buscas un pokemon? !Atrápalo ya!"}
        backgroundColor={"rgb(255 255 255 / 85%)"}
        height={"85vh"}
        isSearch={true}
        all={all}
      />
      <Grid className={classes.description}>
        <Container>
        <Typography variant="h1">Descubre conmigo</Typography>
        <Grid container spacing={3}>
          <Grid className={classes.paragraph} item xs={12} md={8}>
          <Typography variant="subtitle1" paragraph>¿Quierés ser el mejor maestro Pokemon?</Typography>
          <Typography paragraph variant="body1">
            Descubre conmigo todos los Pokemon y mira los que mi Pokedex ha detectado en los últimos minutos.
          </Typography>
          <Typography paragraph variant="caption">
            *Unicamente la primera generación.
          </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <img className={classes.image} src={'/static/images/descubre.png'} alt={'Pokemon'} />
          </Grid>
        </Grid>
        </Container>
      </Grid>
      {isLoad ? (
        <div>
          <Skeleton animation="wave" />
        </div>
      ) : (
        <Container>
          <Grid container className={classes.title}>
          <Badge color="secondary" variant="dot">
          <Typography variant="h3">Vistos recientemente ({pokemons.length})</Typography>
          </Badge>
          </Grid>
          <Grid container spacing={3}>
            {pokemons.map((pokemon) => (
              <Grid key={pokemon.id} item xs={12} sm={6} md={4}>
                <Pokecard
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types}
                  className={classes.card}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    all: state.pokemon.all,
    pokemons: state.pokemon.pokemons,
    isLoad: state.pokemon.isLoad,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: (list) => {
      dispatch(getPokemons(list));
    },
    getAllPokemon: () => {
      dispatch(getAllPokemon());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
