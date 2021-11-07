import React from "react";
import Logo from "assets/logo_mercado_libre_home.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={Logo} alt="logo" />
    </div>
  );
};

export default Home;
