import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Statistic } from "./pages/statistic";
import { AboutUs } from "./pages/aboutus";

import { Layout } from "./components/layout";
import "../src/assets/css/App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/statistic" component={Statistic} />
          <Route exact path="/about-us" component={AboutUs} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
