import React from "react";
import "./Header.scss";
import Logo from "assets/logo_mercado_libre.jpeg";
import SearchIcon from "assets/search.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleSearch = async (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    if (value) navigate(`/items?search=${value}`);
  };
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="logo" />
      <form onSubmit={handleSearch} className="form">
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
