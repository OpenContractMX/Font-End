import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ChartsContractsExpenses } from "./";

jest.mock("recharts", () => {
  const MockResponsiveContainer = (props) => <div {...props} />;

  return {
    ...jest.requireActual("recharts"),
    ResponsiveContainer: MockResponsiveContainer,
  };
});

it("[render content `statistic / ChartsContractsExpenses`]", () => {
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
    <ChartsContractsExpenses contractsChars={contractsChars} />
  );
  expect(asFragment()).toMatchSnapshot();
});
