import React, { useState, useEffect, useMemo } from "react";
import NotProducts from "components/NotProducts";
import Layout from "components/Layout";
import ProductsList from "components/ProductsList";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import { searchProduct } from "services/products";
import { useNavigate } from "react-router";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const value = queryParams.get("search");
  const getProducts = async (product) => {
    setLoader(true);
    try {
      const response = await searchProduct(product);
      setProducts(response);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      navigate("/");
    }
  };
  useEffect(() => {
    if (value) getProducts(value);
    else navigate("/");
  }, [queryParams]);

  const getContent = () =>
    products ? <ProductsList products={products} /> : <NotProducts />;

  return (
    <Layout showLoader={loader}>
      <Helmet>
        <title>{value} | Mercado Libre</title>
        <meta
          name="description"
          content={` busqueda del producto:  ${value} `}
        />
      </Helmet>
      {getContent()}
    </Layout>
  );
};

export default Products;
