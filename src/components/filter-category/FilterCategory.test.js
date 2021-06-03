import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FilterCategory } from "./";

it("render content", () => {
  const filter = { category: "Categoria", year: "Año" };
  const { asFragment } = render(<FilterCategory filter={filter} />);
  expect(asFragment()).toMatchSnapshot();
});
