import React from "react";
import "./FilterCategory.scss";

export const FilterCategory = () => {
  const categorys = [
    "Categoria",
    "Seguridad",
    "Salud",
    "Energia",
    "Economia",
    "Gobernacion",
    "Medio-Ambiente",
    "Educacion",
    "Comunicacion-Transporte",
    "Social",
    "Investigacion",
    "Trabajo",
  ];

  const years = ["Año", 2015, 2016, 2017, 2018];

  return (
    <section className="filter-category">
      <h2 className="filter-category--title">Filtar:</h2>
      <form className="filter-category__filter">
        <select className="filter-category__filter--category">
          {categorys.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select className="filter-category__filter--years">
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
