import React, { useEffect, useState } from "react";
import "./SectionContracts.scss";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export const SectionContracts = ({ filterTime }) => {
  const [contracts, setContracts] = useState([]);
  const [totalContracts, setTotalContracts] = useState([
    {
      contracts: "0",
      contracts_number: "0",
    },
  ]);
  const { search } = useLocation();
  const { category, year } = queryString.parse(search);

  const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

  const getContractsMonth = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&month=${filterTime.month}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);
      setTotalContracts(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const getContractsQuarter = async () => {
    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&trimester=${filterTime.quarter}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);
      setTotalContracts(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const tranformToCapitalize = (title) => {
    const titleToLowercase = title.toLowerCase();
    return titleToLowercase.charAt(0).toUpperCase() + titleToLowercase.slice(1);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (filterTime.month !== "Mes") {
      getContractsMonth();
    }
    if (filterTime.quarter !== "Trimestre") {
      getContractsQuarter();
    }
  }, [filterTime]);
  return (
    <section className="section-contracts">
      <h2 className="section-contracts--title">Contratos:</h2>
      <p className="section-contracts--total">
        Total de contratos: {totalContracts.contracts_number}
      </p>
      {(filterTime.month !== "Mes" && contracts.length === 0) ||
      (filterTime.quarter !== "Trimestre" && contracts.length === 0) ? (
        <p className="section-contracts--no-contracts">
          No hay contratos, para el filtro actualemte seleccionado.
        </p>
      ) : filterTime.month === "Mes" && filterTime.quarter === "Trimestre" ? (
        <p className="section-contracts--filter">
          Haz un filtro por mes o trimestre, para traer los datos
        </p>
      ) : (
        <div className="section-contracts__contract-wrap">
          {contracts.map((contract, index) => (
            <div
              className="section-contracts__contract-wrap--card-contract"
              key={index}
            >
              <h3>Dependencia:</h3>
              <p>{contract.buyer_name}</p>
              <h3>Contrato:</h3>
              <p>{tranformToCapitalize(contract.title)}</p>
              <h3>Valor:</h3>
              <p>
                {numberWithCommas(contract.amount)} <span>MXN</span>
              </p>
              <h3>Fecha:</h3>
              <p>{new Date(contract.date).toDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
