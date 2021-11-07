import React from "react";
import Error from "assets/error.svg";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <div className="notfound">
      <img src={Error} alt="error" />
      <p className="notfound__message">Parece que esta página no existe</p>
    </div>
  );
};

export default NotFound;
