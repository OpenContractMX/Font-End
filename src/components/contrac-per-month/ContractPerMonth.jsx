import React from "react";
import "./ContractPerMonth.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const ContractPerMonth = ({ contractsChars }) => {
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
      <div className="container__contract-month--chart-wrap">
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart
            width={400}
            height={260}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#243240" />
            <XAxis dataKey="name" tick={{ fill: "#000" }} />
            <YAxis tick={{ fill: "#000" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", color: "#000" }}
              itemStyle={{ color: "#000" }}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="contratos"
              stroke="#fdac41"
              strokeWidth="3"
              dot={{ fill: "#2e4355", stroke: "#1a233a", strokeWidth: 2, r: 2 }}
              activeDot={{
                fill: "#2e4355",
                stroke: "#5a8dee",
                strokeWidth: 2,
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="container__contract-month--chart-wrap-description">
          En la grafica podran observar la cantidad de contratos que se
          ejecutaron por mes de la categoria y año seleccionado.{" "}
          <strong> Sobre el eje X</strong> se muestran los meses del año,{" "}
          <strong> sobre el eje Y </strong>
          veran el número de contratos ejecutados en ese mes.
        </p>
      </div>
    </section>
  );
};
