import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "services/products";
import { useNavigate } from "react-router";
import { formatPrice } from "utils/functions";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import "./DetailsProduct.scss";

const DetailsProduct = () => {
  const [product, setProduct] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const getProduct = async (id) => {
    setLoader(true);
    try {
      const response = await getProductById(id);
      const { item } = response;
      console.log(item);
      setProduct(item);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      navigate("/");
    }
  };

  useEffect(() => {
    const { id } = params;
    if (id) getProduct(id);
    else navigate("/");
  }, []);

  const formatedCondition = (condition) => {
    switch (condition) {
      case "new":
        return "Nuevo";
      case "used":
        return "Usado";
      default:
        return "";
    }
  };

  const formatedSoldQuantity = (sold_quantity) =>
    sold_quantity > 0 ? `- ${sold_quantity} vendidos` : "";

  return (
    <Layout showLoader={loader}>
      {product && (
        <>
          <Helmet>
            <title> {product.title} | Mercado Libre</title>
            <meta
              name="description"
              content={` Detalle del producto ${product.title} `}
            />
          </Helmet>
          <div className="DetailsProduct">
            <Breadcrumb type={"path"} categories={product.categories} />
            <div className="DetailsProduct__content">
              <div className="DetailsProduct__firstContent">
                <img
                  className="DetailsProduct__image"
                  src={product.picture}
                  alt="foto del producto"
                />
                <div>
                  <p className="DetailsProduct__condition">{`${formatedCondition(
                    product.condition
                  )} ${formatedSoldQuantity(product.sold_quantity)}`}</p>
                  <h2 className="DetailsProduct__title">{product.title}</h2>
                  <h2 className="DetailsProduct__price">
                    {formatPrice(product.price.amount)}
                  </h2>
                  <button
                    className="DetailsProduct__button"
                    aria-label="comprar el prodcuto"
                    onClick={() => console.log("navegar a comprar el prodcuto")}
                  >
                    <span>Comprar</span>
                  </button>
                </div>
              </div>
              {product.description && (
                <div className="information">
                  <h2 className="information_title">
                    Descripción del producto
                  </h2>
                  <p className="information_text">{product.description}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default DetailsProduct;
