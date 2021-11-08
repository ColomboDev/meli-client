import React from "react";
import "./Breadcrumb.scss";

const Breadcrumb = ({ type, categories }) => {
  const limitCategories = categories.filter((category, index) => index < 4);
  return (
    <div className="breadcrumb">
      {type === "categories" && (
        <p className="breadcrumb__title">Busquedas relacionadas: &nbsp;</p>
      )}
      {type === "categories" &&
        limitCategories.map((category, index) => {
          if (index !== 3 && index !== limitCategories.length - 1) {
            return (
              <p
                className="breadcrumb__category"
                key={index}
              >{`${category} -\u00A0`}</p>
            );
          } else
            return (
              <p
                className="breadcrumb__category"
                key={index}
              >{`${category}`}</p>
            );
        })}
      {type === "path" &&
        categories.map((category, index) => {
          if (index !== categories.length - 1) {
            return (
              <p
                className="breadcrumb__path"
                key={index}
              >{`${category}\u00A0 \u00A0>\u00A0 \u00A0`}</p>
            );
          } else
            return (
              <p
                key={index}
                className="breadcrumb__category"
              >{`${category}`}</p>
            );
        })}
    </div>
  );
};

export default Breadcrumb;
