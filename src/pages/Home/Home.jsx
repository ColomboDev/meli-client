import React from "react";
import Logo from "assets/logo_mercado_libre_home.png";
import { Helmet } from "react-helmet";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home | Mercado Libre</title>
        <meta name="description" content="Home app de Mercado Libre" />
      </Helmet>
      <img className="home__image" src={Logo} alt="logo" />
    </div>
  );
};

export default Home;
