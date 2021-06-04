import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { App } from "./App";

it("render content", () => {
  const filter = { category: "Categoria", year: "Año" };
  const { asFragment } = render(<App filter={filter} />);
  expect(asFragment()).toMatchSnapshot();
});
