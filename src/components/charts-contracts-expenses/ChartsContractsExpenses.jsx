import React, { Fragment } from "react";
import "./ChartsContractsExpenses.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const ChartsContractsExpenses = ({ contractsChars }) => {
  let contracts = contractsChars.top_ten;
  console.log(">>", contracts);

  const data = [
    {
      name: "1",
      Inversion: 4000,
    },
    {
      name: "2",
      uv: 3000,
    },
    {
      name: "3",
      uv: 2000,
    },
    {
      name: "4",
      uv: 2780,
    },
    {
      name: "5",
      uv: 1890,
    },
    {
      name: "6",
      uv: 2390,
    },
    {
      name: "7",
      uv: 3490,
    },
    {
      name: "8",
      uv: 3490,
    },
    {
      name: "9",
      uv: 3490,
    },
    {
      name: "10",
      uv: 3490,
    },
  ];
  return (
    <section className="container__contract-expense">
      <h2 className="container__contract-expense--title">
        Top 10 contratos en gastos:
      </h2>
      {/* <div className="container__contract-expense--chart">chart</div> */}
      <BarChart
        width={600}
        height={240}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend /> */}

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {}
        <Bar dataKey="Inversion" fill="#82ca9d" />
      </BarChart>
    </section>
  );
};
