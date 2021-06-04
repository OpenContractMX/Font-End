import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Home } from "./";

it("[render component `pages / Home`]", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
