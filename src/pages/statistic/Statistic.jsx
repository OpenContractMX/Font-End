import React, { useState } from "react";
// import axios from "axios";

import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import { ChartsContractsExpenses } from "../../components/charts-contracts-expenses";
import { ContractPerMonth } from "../../components/contrac-per-month";
import { TypeOfContract } from "../../components/type-of-contract";
import { AverageExecutionContract } from "../../components/average-execution-contract";

import "./Statistic.scss";

export const Statistic = () => {
  const [filter, setFilter] = useState({ category: "", year: "" });

  return (
    <main className="container-statistic">
      <FilterCategory setFilter={setFilter} filter={filter} />
      <CardTotalContacts filter={filter} />
      <ChartsContractsExpenses />
      <ContractPerMonth />
      <TypeOfContract />
      <AverageExecutionContract />
    </main>
  );
};
