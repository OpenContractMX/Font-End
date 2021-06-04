import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Statistic } from "./pages/statistic";
import { AboutUs } from "./pages/aboutus";
import { Contracts } from "./pages/contracts";

import { Layout } from "./components/layout";
import "../src/assets/css/App.css";

export const App = () => {
  const [filter, setFilter] = useState({ category: "Categoria", year: "Año" });

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/statistic"
            render={(props) => (
              <Statistic {...props} filter={filter} setFilter={setFilter} />
            )}
          />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contracts" component={Contracts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
