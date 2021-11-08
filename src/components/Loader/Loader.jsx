import React from "react";
import Logo from "assets/logo_mercado_libre_home.png";
import { Helmet } from "react-helmet";
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <img className="loader__image" src={Logo} alt="logo" />
      <p className="loader__text">...Cargando</p>
    </div>
  );
};

export default Loader;
