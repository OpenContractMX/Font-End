import React, { Fragment } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = (props) => {
  // const children = props.children;
  return (
    <Fragment>
      {props.children}
      <Header />
      <h1>soy el main </h1>
      <Footer />
    </Fragment>
  );
};
