import React, { useState, useEffect } from "react";
import "./ChartsContractsExpenses.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ChartsContractsExpenses = ({ contractsChars }) => {
  let contracts = contractsChars.top_ten;

  const [topContracts, setTopContracts] = useState([
    {
      name: "0",
      inversion: 0,
    },
  ]);

  useEffect(() => {
    gettingTopContracts();
  }, [contractsChars]);

  const gettingTopContracts = () => {
    const newContract = contracts.map((contract, index) => ({
      name: `ID: ${index + 1}`,
      inversion: contract.amount,
    }));

    setTopContracts(newContract);
  };

  const tranformToCapitalize = (title) => {
    const titleToLowercase = title.toLowerCase();
    return titleToLowercase.charAt(0).toUpperCase() + titleToLowercase.slice(1);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <section className="container__contract-expense">
      <h2 className="container__contract-expense--title">
        Top 10 contratos en gastos:
      </h2>
      <div className="container__contract-expense--expenses-wrap">
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            className="container__contract-expense--expenses-wrap--chart"
            width={380}
            height={240}
            data={topContracts}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
            <XAxis dataKey="name" tick={{ fill: "#1a233a" }} />
            <YAxis tick={{ fill: "#1a233a" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", color: "#1a233a" }}
              itemStyle={{ color: "#1a233a" }}
            />
            <Bar dataKey="inversion" fill={"#fdac41"} />
          </BarChart>
        </ResponsiveContainer>
        <p className="container__contract-expense--expenses-wrap-description">
          En la grafica podran observar el top 10 de los contratos mas costos de
          la categoria y año seleccionado. <strong> Sobre el eje X</strong>{" "}
          veran el ID de cada contrato, <strong> sobre el eje Y </strong>se
          muestra el costo total de dicho contrato.
        </p>
      </div>
      <div className="container__contract-expense--wrap">
        {contracts[0].amount !== 0
          ? contracts.map((contract, index) => (
              <div
                className="container__contract-expense--wrap--card"
                key={index}
              >
                <h3>
                  ID: <span>{index + 1}</span>
                </h3>
                <h3>Contrato:</h3>
                <p>{tranformToCapitalize(contract.title)}</p>
                <h3>
                  Inversión:{" "}
                  <span>{numberWithCommas(contract.amount)} MXN</span>
                </h3>
              </div>
            ))
          : null}
      </div>
    </section>
  );
};
