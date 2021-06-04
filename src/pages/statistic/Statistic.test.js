import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Statistic } from "./";

it("[render content `statistic / Statistic`]", () => {
  const filter = { category: "Categoria", year: "Año" };
  const contractsChars = {
    contracts_number: "0",
    inversion: 0,
    top_ten: [
      {
        id: 0,
        month: 0,
        trimester: 0,
        title: "vacio",
        buyer_name: "vacio",
        date: "0",
        amount: 0,
        currency: "",
      },
    ],
    execution_mean: 0,
    months: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
  };
  const { asFragment } = render(
    <Statistic contractsChars={contractsChars} filter={filter} />
  );
  expect(asFragment()).toMatchSnapshot();
});
