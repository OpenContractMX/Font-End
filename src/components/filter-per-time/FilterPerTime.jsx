import React from "react";
import "./FilterPerTime.scss";

export const FilterPerTime = ({ filterTime, setFilterTime }) => {
  const handleOnChangeMonth = (e) => {
    setFilterTime({
      ...filterTime,
      month: e.target.value,
      quarter: "Trimestre",
    });
  };

  const handleOnChangeQuarter = (e) => {
    setFilterTime({ ...filterTime, quarter: e.target.value, month: "Mes" });
  };
  // const months = ["Mes", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const months = [
    {
      key: "Mes",
      value: "Mes",
    },
    {
      key: "Enero",
      value: 1,
    },
    {
      key: "Febrero",
      value: 2,
    },
    {
      key: "Marzo",
      value: 3,
    },
    {
      key: "Abril",
      value: 4,
    },
    {
      key: "Mayo",
      value: 5,
    },
    {
      key: "Junio",
      value: 6,
    },
    {
      key: "Julio",
      value: 7,
    },
    {
      key: "Agosto",
      value: 8,
    },
    {
      key: "Septiembre",
      value: 9,
    },
    {
      key: "Octubre",
      value: 10,
    },
    {
      key: "Noviembre",
      value: 11,
    },
    {
      key: "Diciembre",
      value: 12,
    },
  ];

  // const quarters = ["Trimestre", 1.0, 2.0, 3.0, 4.0];
  const quarters = [
    {
      key: "Trimestre",
      value: "Trimestre",
    },
    {
      key: "Primer Trimestre",
      value: 1.0,
    },
    {
      key: "Segundo Trimestre",
      value: 2.0,
    },
    {
      key: "Tercer Trimestre",
      value: 3.0,
    },
    {
      key: "Cuarto Trimestre",
      value: 4.0,
    },
  ];

  return (
    <section className="filter-time">
      <h2 className="filter-time--title">Filtrar por:</h2>
      <div className="filter-time__forms">
        <form htmlFor="form-filter-month" className="filter-time__forms-month">
          <label>Mes:</label>
          <select
            className="filter-time__forms-month--select"
            onChange={handleOnChangeMonth}
            value={filterTime.month}
          >
            {months.map((month, index) => (
              <option key={index} value={month.value} defaultValue="pepito">
                {month.key}
              </option>
            ))}
          </select>
        </form>
        <span>Ó</span>
        <form
          htmlFor="form-filter-quarter"
          className="filter-time__forms-quarter"
        >
          <label>Trimestre:</label>
          <select
            className="filter-time__forms-quarter--select"
            onChange={handleOnChangeQuarter}
            value={filterTime.quarter}
          >
            {quarters.map((quarter, index) => (
              <option key={index} value={quarter.value}>
                {quarter.key}
              </option>
            ))}
          </select>
        </form>
      </div>
    </section>
  );
};
