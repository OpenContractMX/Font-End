import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AboutUs } from "./";

it("[render component `pages / AboutUs`]", () => {
  const { asFragment } = render(<AboutUs />);
  expect(asFragment()).toMatchSnapshot();
});
