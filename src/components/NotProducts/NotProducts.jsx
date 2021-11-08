import React from "react";
import "./NotProducts.scss";
import Error from "assets/error-search.svg";

const NotProducts = () => {
  return (
    <div className="notProducts">
      <div className="notProducts__content">
        <img className="notProducts__image" src={Error} alt="error-productos" />
        <div>
          <h1 className="notProducts__title">
            No hay publicaciones que coincidan con tu búsqueda.
          </h1>
          <ul>
            <li>
              <b>Revisá la ortografía</b> de la palabra.
            </li>
            <li>
              Utilizá <b>palabras más genéricas</b> o menos palabras.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotProducts;
