import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Banner from "../components/Banner";
import Image from "../assets/images/pokeball.jpg";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pokecard from '../components/PokeCard';
import { getRandomNumbers } from "../utils/random";
import { getPokemons } from "../redux/actions";
import { connect } from "react-redux";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { getPokemons, pokemons, isLoad } = props;

  useEffect(()=>{
    getPokemons(getRandomNumbers(1,151,12))
  },[getPokemons]);
  
  return (
    <React.Fragment>
      <Banner
        image={Image}
        title={"¿Buscas un pokemon? !Atrápalo ya!"}
        backgroundColor={"rgb(255 255 255 / 85%)"}
        height={"80vh"}
      />
      { isLoad ?
       <div>
         <Skeleton animation="wave" />
       </div>
       :
       <Container maxWidth={false}>
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
    pokemons: state.pokemon.pokemons,
    isLoad: state.pokemon.isLoad
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: (list) => {dispatch(getPokemons(list))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
