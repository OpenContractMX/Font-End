import React from "react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { NavOfContracts } from "./NavOfContracts";

it("[render content `statistic / NavOfContracts`]", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <NavOfContracts />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
