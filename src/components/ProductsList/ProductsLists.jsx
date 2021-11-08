import React from "react";
import ProductsItem from "components/ProductsItem";
import Breadcrumb from "components/Breadcrumb";
import "./ProductsLists.scss";

const ProductsLists = ({ products }) => {
  const { items, categories } = products;

  return (
    <div className="productsLists">
      <Breadcrumb type={"categories"} categories={categories} />
      <div className="productsLists__content">
        {items.map(({ picture, price, title, city, free_shipping, id }) => (
          <ProductsItem
            id={id}
            key={id}
            picture={picture}
            price={price}
            title={title}
            city={city}
            free_shipping={free_shipping}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsLists;
