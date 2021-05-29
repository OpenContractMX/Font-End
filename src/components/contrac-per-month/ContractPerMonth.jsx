import React from "react";
import "./ContractPerMonth.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const ContractPerMonth = ({ contractsChars }) => {
  console.log("=>", contractsChars.months);

  const data = [
    {
      name: "Ene.",
      contratos: contractsChars.months["1"],
    },
    {
      name: "Feb.",
      contratos: contractsChars.months["2"],
    },
    {
      name: "Marzo",
      contratos: contractsChars.months["3"],
    },
    {
      name: "Abr.",
      contratos: contractsChars.months["4"],
    },
    {
      name: "May.",
      contratos: contractsChars.months["5"],
    },
    {
      name: "Jun",
      contratos: contractsChars.months["6"],
    },
    {
      name: "Jul.",
      contratos: contractsChars.months["7"],
    },
    {
      name: "Agos.",
      contratos: contractsChars.months["8"],
    },
    {
      name: "Sep.",
      contratos: contractsChars.months["9"],
    },
    {
      name: "Oct.",
      contratos: contractsChars.months["10"],
    },
    {
      name: "Nov.",
      contratos: contractsChars.months["11"],
    },
    {
      name: "Dic.",
      contratos: contractsChars.months["12"],
    },
  ];
  return (
    <section className="container__contract-month">
      <h2 className="container__contract-month--title">Contratos por Mes:</h2>
      {/* <div className="container__contract-month--chart">chart</div> */}
      <LineChart
        width={600}
        height={240}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="contratos" stroke="#82ca9d" />
      </LineChart>
    </section>
  );
};
