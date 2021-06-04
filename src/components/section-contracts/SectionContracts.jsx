import React, { useEffect, useState } from "react";
import "./SectionContracts.scss";

import axios from "axios";

import { LoadingBar } from "../LoadingBar";

export const SectionContracts = ({ filterTime, category, year }) => {
  const [contracts, setContracts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [totalContracts, setTotalContracts] = useState([
    {
      contracts: "0",
      contracts_number: "0",
    },
  ]);

  const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

  const URL_API_DOWNLOAD =
    "https://opencontractsmx.herokuapp.com/api/download?";

  const getContractsMonth = async () => {
    setIsLoading(true);

    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&month=${filterTime.month}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);
      setTotalContracts(response.data.response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getContractsQuarter = async () => {
    setIsLoading(true);

    try {
      let response = await axios.get(
        `${API_BASE}category=${category}&year=${year}&trimester=${filterTime.quarter}`,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      setContracts(response.data.response.contracts);
      setTotalContracts(response.data.response);
      setIsLoading(false);
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
  const checkFromRender = () => {
    if (
      (filterTime.month !== "Mes" && contracts.length === 0) ||
      (filterTime.quarter !== "Trimestre" && contracts.length === 0)
    ) {
      return true;
    }
    return false;
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
      {isLoading ? (
        <LoadingBar />
      ) : checkFromRender() ? (
        <p className="section-contracts--no-contracts">
          No hay contratos, para el filtro actualemte seleccionado.
        </p>
      ) : filterTime.month === "Mes" && filterTime.quarter === "Trimestre" ? (
        <p className="section-contracts--filter">
          Haz un filtro por mes o trimestre, para traer los datos
        </p>
      ) : (
        <>
          <h2 className="section-contracts--title">Contratos:</h2>
          <a
            className="section-contracts__btn-download"
            href={
              filterTime.quarter === "Trimestre" ? (
                `${URL_API_DOWNLOAD}category=${category}&year=${year}&month=${filterTime.month}`
              ) : <></> || filterTime === "Mes" ? (
                `${URL_API_DOWNLOAD}category=${category}&year=${year}&trimester=${filterTime.quarter}`
              ) : (
                <></>
              )
            }
            download
          >
            <button
              type="button"
              className="section-contracts__btn-download--download"
            >
              <i className="fas fa-download section-contracts__btn-download--icon-download"></i>
              <span>Descargar Excel</span>
            </button>
          </a>
          <p className="section-contracts--total">
            Total de contratos: {totalContracts.contracts_number}
          </p>

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
        </>
      )}
    </section>
  );
};
