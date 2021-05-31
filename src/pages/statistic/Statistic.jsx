import React, { useState, useEffect } from "react";
import axios from "axios";

import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import { ChartsContractsExpenses } from "../../components/charts-contracts-expenses";
import { ContractPerMonth } from "../../components/contrac-per-month";
import { AverageExecutionContract } from "../../components/average-execution-contract";

import "./Statistic.scss";

export const Statistic = () => {
  const [filter, setFilter] = useState({ category: "Categoria", year: "Año" });
  console.log(">>>", filter);

  const [contractsChars, setContractsChars] = useState({
    contracts_number: "sin datos",
    inversion: 0,
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
  });

  const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

  const getContracts = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${filter.category}&year=${filter.year}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContractsChars(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filter.category !== "Categoria" && filter.year !== "Año") {
      getContracts();
    }
  }, [filter]);

  return (
    <main className="container-statistic">
      <FilterCategory setFilter={setFilter} filter={filter} />
      <CardTotalContacts filter={filter} contractsChars={contractsChars} />
      <ChartsContractsExpenses contractsChars={contractsChars} />
      <ContractPerMonth contractsChars={contractsChars} />
      <AverageExecutionContract contractsChars={contractsChars} />
    </main>
  );
};
