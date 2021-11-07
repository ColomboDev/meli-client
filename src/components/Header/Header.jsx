import React from "react";
import "./Header.scss";
import Logo from "assets/logo_mercado_libre.jpeg";
import SearchIcon from "assets/search.svg";

const Header = ({ onSubmit }) => {
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="logo" />
      <form onSubmit={onSubmit} className="form">
        <input
          className="form__input"
          placeholder="Buscar productos, marcas y más…"
          type="search"
          aria-label="ingresa lo que quieras encontrar"
        />
        <button className="form__button" type="submit" aria-label="Buscar">
          <img className="form__image" src={SearchIcon} alt="search" />
        </button>
      </form>
    </header>
  );
};

export default Header;
