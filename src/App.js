import React from "react";
import "./App.scss";
import Header from "components/Header";
import Home from "pages/Home";
import Products from "pages/Products";
import DetailsProduct from "pages/DetailsProduct";
import NotFound from "pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Products />} />
        <Route path="/items/:id" element={<DetailsProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
