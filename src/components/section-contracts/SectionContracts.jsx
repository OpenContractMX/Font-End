import React, { useEffect, useState } from "react";
import "./SectionContracts.scss";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export const SectionContracts = ({ filterTime, query }) => {
  // console.log(">>>", filterTime, query);
  const [contracts, setContracts] = useState([]);
  const { search } = useLocation();
  const { category, year } = queryString.parse(search);
  // console.log(category, year);
  //fetch

  const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

  const getContractsMonth = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&month=${filterTime.month}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);
      // console.log(response);

      // console.log(contractsMonth);

      // console.log(resContracts, resContracts.contracts);
      // console.log(`cantidade de contratos: ${resContracts.contracts_number}`);
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(resContracts);
  // getContractsMonth();

  const getContractsQuarter = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&trimester=${filterTime.quarter}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);

      // let contractsQuarter = response.data.response.contracts;
      // console.log(contractsQuarter);
      // console.log(`cantidade de contratos: ${resContracts.contracts_number}`);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    if (filterTime.month !== "Mes" && filterTime.month !== "") {
      getContractsMonth();
      // console.log(filterTime);
    }
    if (filterTime.quarter !== ("Trimestre", "")) {
      getContractsQuarter();
      // console.log("fn ejecutada");
    }
    // console.log(contracts);
  }, [filterTime]);
  return (
    <section className="container-contracts">
      <h2 className="container-contracts--title">Contratos</h2>
      {contracts.length === 0 ? (
        <p>no hay contratos</p>
      ) : (
        <div className="container-contracts__contract-wrap">
          {contracts.map((contract, index) => (
            <div
              className="container-contracts__contract-wrap--card-contract"
              key={index}
            >
              <h3>Dependencia:</h3>
              <p>{contract.buyer_name}</p>
              <h3>Contrato:</h3>
              <p>{contract.title}</p>
              <h3>Valor:</h3>
              <p>
                {contract.amount} <span>MXN</span>
              </p>
              <h3>Fecha:</h3>
              <p>{contract.date}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
