import React, { useState, useEffect } from "react";
import axios from "axios";

import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import { ChartsContractsExpenses } from "../../components/charts-contracts-expenses";
import { ContractPerMonth } from "../../components/contrac-per-month";
// import { TypeOfContract } from "../../components/type-of-contract";
import { AverageExecutionContract } from "../../components/average-execution-contract";

import "./Statistic.scss";

export const Statistic = () => {
  const [filter, setFilter] = useState({ category: "Categoria", year: "Año" });
  const [contractsChars, setContractsChars] = useState({});
  // console.log(filter);

  const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

  const getContracts = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${filter.category}&year=${filter.year}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      console.log(response);
      // setContractsChars(response);

      // console.log(response);
      // console.log(`cantidade de contratos: ${resContracts.contracts_number}`);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if () {
  //     getContracts();
  //   }
  // }, [contractsChars]);

  return (
    <main className="container-statistic">
      <FilterCategory setFilter={setFilter} filter={filter} />
      <CardTotalContacts filter={filter} />
      <ChartsContractsExpenses />
      <ContractPerMonth />
      {/* <TypeOfContract /> */}
      <AverageExecutionContract />
    </main>
  );
};
