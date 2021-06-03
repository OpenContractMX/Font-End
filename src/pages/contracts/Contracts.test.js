import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Contracts } from "./Contracts";

it("[render content `statistic / Contracts`]", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Contracts />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
