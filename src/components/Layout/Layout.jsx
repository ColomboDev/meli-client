import React from "react";
import "./Layout.scss";
import Loader from "components/Loader";

const Layout = ({ children, showLoader }) => {
  return <main className="layout">{showLoader ? <Loader /> : children}</main>;
};

export default Layout;
