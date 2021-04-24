import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Image from "../assets/images/pokeball.jpg";
import NestedGrid from "../components/Grid";
import { getRandomNumbers } from "../utils/random";
import { getPokemons } from "../redux/actions";
import { connect } from "react-redux";

const Home = (props) => {

  const { getPokemons } = props;

  useEffect(()=>{
    // getRandomNumbers(1,150,10);
    getPokemons(getRandomNumbers(1,150,10));
  },[getPokemons]);

  return (
    <React.Fragment>
      <Banner
        image={Image}
        title={"¿Buscas un pokemon? Atrapalo"}
        backgroundColor={"rgb(255 255 255 / 85%)"}
        height={"80vh"}
      />
      <NestedGrid />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: (id) => {dispatch(getPokemons(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
