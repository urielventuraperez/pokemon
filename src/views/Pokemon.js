import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Banner from "../components/Banner";
import Container from '@material-ui/core/Container';
import { getPokemon } from "../redux/actions";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import InfoTabs from "../components/InfoTabs";
import PokeChip from "../components/PokeChip";
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
      padding: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
}));

const Pokemon = (props) => {
    const classes = useStyles();
    const { getPokemon, pokemon, species, isLoad, match } = props;
  const [pokePrincipal, setPokePrincipal] = useState({
    name: '',
    image: ''
  })
  const [types, setTypes] = useState([]);
  const [pokeMoves, setPokeMoves] = useState([]);
  const [pokeAbout, setPokeAbout] = useState({
      experience: '',
      height: '',
      weight: '',
  });

  const [pokeSpecies, setPokeSpecies] = useState({
    generation: '',
    capureRate: '',
    happiness: '',
  });

  const nameParam = match.params.name;
  useEffect(()=>{
    getPokemon(nameParam);
  },[getPokemon]);

  useEffect(()=>{
    if(pokemon) {
        setPokePrincipal({
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
        })
        setPokeAbout({
            height: pokemon.height,
            weight: pokemon.weight,
            experience: pokemon.base_experience
        });
        setTypes(pokemon.types)
        setPokeMoves(pokemon.moves)
        setPokeSpecies({
            happiness: species.base_happiness,
            capureRate: species.capture_rate,
            generation: species.generation.name
        })

    }
  },[pokemon])

  return (
    <React.Fragment>
      {
          isLoad ? <Skeleton /> :
          <div>
          <Banner
          image={pokePrincipal.image}
          backgroundColor={"rgb(255 255 255 / 35%)"}
          height={"50vh"}
          isSearch={false}
        />
        <Container className={classes.container}>
        <Typography variant="h1" component="h2">{`${pokePrincipal.name.charAt(0).toUpperCase()}${pokePrincipal.name.slice(1)}`}</Typography>
        {
            types.map( t => (
              <PokeChip className={classes.types} key={t.slot} label={t.type.name} />
            ))
          }
        <InfoTabs
            pokeAbout={pokeAbout}
            moves={pokeMoves}
            species={pokeSpecies}
        />
        </Container>
        </div>
      }
      <Fab onClick={props.history.goBack} color="secondary" aria-label="add" className={classes.fab}>
        <ArrowBackIcon />
      </Fab>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon.pokemon[0],
    species: state.pokemon.pokemon[1],
    isLoad: state.pokemon.isLoad
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemon: (name) => {dispatch(getPokemon(name))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
