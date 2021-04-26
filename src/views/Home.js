import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Banner from "../components/Banner";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pokecard from '../components/PokeCard';
import { getRandomNumbers } from "../utils/random";
import { getPokemons, getAllPokemon } from "../redux/actions";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title:{
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3)
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { getPokemons, pokemons, all, isLoad, getAllPokemon } = props;

  useEffect(()=>{
    getPokemons(getRandomNumbers(1,151,12))
    getAllPokemon()
  },[getPokemons, getAllPokemon]);
  
  return (
    <React.Fragment>
      <Banner
        image={'/static/images/pokeball.jpg'}
        title={"¿Buscas un pokemon? !Atrápalo ya!"}
        backgroundColor={"rgb(255 255 255 / 85%)"}
        height={"80vh"}
        isSearch={true}
        all={all}
      />
      { isLoad ?
       <div>
         <Skeleton animation="wave" />
       </div>
       :
       <Container>
         <Grid container className={classes.title} spacing={3}>
         <Typography variant="h3" gutterBottom>
            Vistos recientemente
          </Typography>
         </Grid>
       <Grid container spacing={3}>
         {
          pokemons.map( pokemon => (
             <Grid key={pokemon.id} item xs={12} sm={6} md={4}>
               <Pokecard 
                  name={pokemon.name} 
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types}
                  className={classes.card} />
           </Grid>   
           ))
         }
       </Grid>
     </Container>
      }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    all: state.pokemon.all,
    pokemons: state.pokemon.pokemons,
    isLoad: state.pokemon.isLoad
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: (list) => {dispatch(getPokemons(list))},
    getAllPokemon: () => {dispatch(getAllPokemon())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
