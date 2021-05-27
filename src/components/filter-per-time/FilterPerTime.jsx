import React from "react";
import "./FilterPerTime.scss";

export const FilterPerTime = () => {
  const months = [
    "Mes",
    1.0,
    2.0,
    3.0,
    4.0,
    5.0,
    6.0,
    7.0,
    8.0,
    9.0,
    10,
    11,
    12,
  ];

  const quarters = ["Trimestre", "Todos", 1.0, 2.0, 3.0, 4.0];

  return (
    <section className="filter-time">
      <h2 className="filter-time--title">Filtar:</h2>
      <form className="filter-time__filter">
        <select className="filter-time__filter--month">
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select className="filter-time__filter--quarter">
          {quarters.map((quarter, index) => (
            <option key={index} value={quarter}>
              {quarter}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};
