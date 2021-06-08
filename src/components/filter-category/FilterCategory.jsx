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
    {
      key: "Seguridad",
      value: "seguridad",
    },
    {
      key: "Salud",
      value: "salud",
    },
    {
      key: "Energía",
      value: "energia",
    },
    {
      key: "Economía",
      value: "economia",
    },
    {
      key: "Gobernación",
      value: "gobernacion",
    },
    {
      key: "Medio Ambiente",
      value: "medio_ambiente",
    },
    {
      key: "Educación",
      value: "educacion",
    },
    {
      key: "Comunicación y Transporte",
      value: "comunicacion_transporte",
    },
    {
      key: "Social",
      value: "social",
    },
    {
      key: "Investigación",
      value: "investigacion",
    },
    {
      key: "Trabajo",
      value: "trabajo",
    },
  ];

  const years = [2015, 2016, 2017, 2018];

  return (
    <section className="filter-category">
      <h2 className="filter-category--title">Filtrar:</h2>
      <div className="filter-category__forms">
        <form
          htmlFor="filter-category"
          className="filter-category__forms--filter-category"
        >
          <label>Categoría:</label>
          <select
            className="filter-category__forms--filter-category--select-category"
            onChange={handleOnChangeCategory}
            value={filter.category}
          >
            <option key="Categoría" value="Categoría" selected hidden>
              Categoría
            </option>
            {categorys.map((category, index) => (
              <option key={index} value={category.value}>
                {category.key}
              </option>
            ))}
          </select>
        </form>
        <p>Y</p>
        <form
          htmlFor="filter-year"
          className="filter-category__forms--filter-year"
        >
          <label>Año:</label>
          <select
            className="filter-category__forms--filter-year--select-year"
            onChange={handleOnChangeYear}
            value={filter.year}
          >
            <option key="Año" value="Año" selected hidden>
              Año
            </option>
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
