import React from "react";
import "./FilterCategory.scss";
import axios from "axios";

export const FilterCategory = ({ filter, setFilter }) => {
  const handleOnChangeCategory = (e) => {
    // console.log(e.target.value);
    setFilter({ ...filter, category: e.target.value });
  };

  const handleOnChangeYear = (e) => {
    // console.log(e.target.value);
    setFilter({ ...filter, year: e.target.value });
  };


  if (filter.year !== ("Año", "") && filter.category !== ("Categoria", "")) {
    getContracts();
    // console.log("fn ejecutada");
  }
  const categorys = [
    "Categoria",
    "Seguridad",
    "Salud",
    "Energia",
    "Economia",
    "Gobernacion",
    "Medio-Ambiente",
    "Educacion",
    "comunicacion_transporte",
    "Social",
    "Investigacion",
    "Trabajo",
  ];

  const years = ["Año", 2015, 2016, 2017, 2018];

  return (
    <section className="filter-category">
      <h2 className="filter-category--title">Filtar:</h2>
      <form className="filter-category__filter">
        <select
          className="filter-category__filter--category"
          onChange={handleOnChangeCategory}
        >
          {categorys.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="filter-category__filter--years"
          onChange={handleOnChangeYear}
        >
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};
