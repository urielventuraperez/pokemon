import React from "react";
import Banner from "../components/Banner";
import Image from "../assets/images/pokeball.jpg";
import NestedGrid from "../components/Grid";

const Home = (props) => {

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

export default Home;
