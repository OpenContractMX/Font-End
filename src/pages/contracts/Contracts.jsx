import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { FilterPerTime } from "../../components/filter-per-time";
import { NavOfContracts } from "../../components/nav-of-contracts";
import { SectionContracts } from "../../components/section-contracts";

import "./Contracts.scss";

export const Contracts = () => {
  const [filterTime, setFilterTime] = useState({
    month: "Mes",
    quarter: "Trimestre",
  });

  const { search } = useLocation();
  const { category, year } = queryString.parse(search);
  console.log(typeof category);

  const validation = (data) => {
    if (data === "comunicacion_transporte") {
      return "Comunicación y Tranpoosrte";
    }
    if (data === "seguridad") {
      return "Seguridad";
    }
    if (data === "salud") {
      return "Salud";
    }
    if (data === "energia") {
      return "Energía";
    }
    if (data === "economia") {
      return "Economía";
    }
    if (data === "gobernacio") {
      return "Gobernación";
    }
    if (data === "medio_ambiente") {
      return "Medio Ambiente";
    }
    if (data === "educacion") {
      return "Educación";
    }
    if (data === "social") {
      return "Social";
    }
    if (data === "trabajo") {
      return "Trabajo";
    }
    if (data === "investigacion") {
      return "Investigación";
    }
  };
  return (
    <main className="container-contracts">
      <NavOfContracts />
      <span className="container-contracts__text">
        Estas en la cantegoría:{" "}
        <span className="container-contracts__text--category">
          {validation(category)}{" "}
        </span>
        <span className="container-contracts__text--year">{year}</span>
      </span>
      <FilterPerTime filterTime={filterTime} setFilterTime={setFilterTime} />
      <SectionContracts
        filterTime={filterTime}
        category={category}
        year={year}
      />
    </main>
  );
};
