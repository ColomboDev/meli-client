import React from "react";
import { Link } from "react-router-dom";
import FreeShipping from "assets/shipping.png";
import { formatPrice } from "utils/functions";
import "./ProductsItem.scss";

const ProductsItem = ({ picture, price, title, city, free_shipping, id }) => {
  return (
    <Link to={`/items/${id}`} className="productsItem">
      <div className="productsItem_content">
        <img
          className="productsItem__image"
          src={picture}
          alt="foto-producto"
        />
        <div className="description">
          <div className="description__priceAndCity">
            <div className="price">
              <h1 className="price__text">{formatPrice(price.amount)}</h1>
              {free_shipping && (
                <img
                  className="price__freeShipping"
                  src={FreeShipping}
                  alt="envio gratis"
                />
              )}
            </div>
            <div>
              <p className="description__city">{city}</p>
            </div>
          </div>
          <div>
            <p className="description__text">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsItem;
