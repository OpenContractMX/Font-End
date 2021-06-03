import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Layout } from "./Layout";

it("[render content `statistic / Layout`]", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
