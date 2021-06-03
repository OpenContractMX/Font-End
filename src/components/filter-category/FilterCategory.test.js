import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FilterCategory } from "./";

it("render content", () => {
  const filter = { category: "Categoria", year: "Año" };
  const component = render(<FilterCategory filter={filter} />);

  component.getByText("Filtrar:");
  component.getByText("Categoria:");
  component.getByText("Año:");
  component.debug();
});
