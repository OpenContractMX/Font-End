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

  const changeOfName = (data) => {
    if (data === "comunicacion_transporte") {
      return "Comunicación y Transporte";
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
    if (data === "gobernacion") {
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
        Estas en la categoría:{" "}
        <span className="container-contracts__text--category">
          {changeOfName(category)}{" "}
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
