import React from "react";
import "./FilterPerTime.scss";

export const FilterPerTime = ({ filterTime, setFilterTime }) => {
  const handleOnChangeMonth = (e) => {
    // console.log(e.target.value);
    setFilterTime({
      ...filterTime,
      month: e.target.value,
      quarter: "Trimestre",
    });
  };

  const handleOnChangeQuarter = (e) => {
    // console.log(e.target.value);
    setFilterTime({ ...filterTime, quarter: e.target.value, month: "Mes" });
  };
  const months = ["Mes", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const quarters = ["Trimestre", "Todos", 1.0, 2.0, 3.0, 4.0];

  return (
    <section className="filter-time">
      <h2 className="filter-time--title">Filtar:</h2>
      <form className="filter-time__filter">
        <select
          className="filter-time__filter--month"
          onChange={handleOnChangeMonth}
        >
          {months.map((month, index) => (
            <option key={index} value={month} defaultValue="pepito">
              {month}
            </option>
          ))}
        </select>
        <select
          className="filter-time__filter--quarter"
          onChange={handleOnChangeQuarter}
        >
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
