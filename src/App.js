import React from "react";
import "./App.scss";
import Header from "components/Header";
import Home from "pages/Home";
import Products from "pages/Products";
import NotFound from "pages/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const handleSearch = (event) => {
    console.log("entra");
    event.preventDefault();
  };
  return (
    <Router>
      <Header onSubmit={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Products />} />
        <Route path="/items/:id" element={<div>items id</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
