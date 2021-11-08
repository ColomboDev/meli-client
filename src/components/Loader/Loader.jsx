import React from "react";
import Logo from "assets/logo_mercado_libre_home.png";
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__image" src={Logo} alt="logo" />
      <p className="loader__text">...Cargando</p>
    </div>
  );
};

export default Loader;
