import React, { Fragment } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = (props) => {
  // const children = props.children;
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
