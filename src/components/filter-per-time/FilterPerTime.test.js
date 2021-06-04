import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { FilterPerTime } from "./FilterPerTime";

it("[render content `statistic / FilterPerTime`]", () => {
  const filterTime = {
    month: "Mes",
    quarter: "Trimestre",
  };
  const { asFragment } = render(<FilterPerTime filterTime={filterTime} />);
  expect(asFragment()).toMatchSnapshot();
});
