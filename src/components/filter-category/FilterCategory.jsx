import React from "react";
import "./FilterCategory.scss";

export const FilterCategory = ({ filter, setFilter }) => {
  const handleOnChangeCategory = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handleOnChangeYear = (e) => {
    setFilter({ ...filter, year: e.target.value });
  };

  const categorys = [
    "Categoria",
    "seguridad",
    "salud",
    "energia",
    "economia",
    "gobernacion",
    "medio_ambiente",
    "educacion",
    "comunicacion_transporte",
    "social",
    "investigacion",
    "trabajo",
  ];

  const years = ["Año", 2015, 2016, 2017, 2018];

  return (
    <section className="filter-category">
      <h2 className="filter-category--title">Filtar:</h2>
      <div className="filter-category__form">
        <form htmlFor="filter-category" className="filter-category__filter">
          <label>Categoria:</label>
          <select
            className="filter-category__filter--category"
            onChange={handleOnChangeCategory}
            value={filter.category}
          >
            {categorys.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </form>
        <span>Y</span>
        <form>
          <label>Año:</label>
          <select
            className="filter-category__filter--years"
            onChange={handleOnChangeYear}
            value={filter.year}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </form>
      </div>
    </section>
  );
};
