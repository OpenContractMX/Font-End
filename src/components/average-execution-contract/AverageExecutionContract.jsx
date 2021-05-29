import React from "react";
import "./AverageExecutionContract.scss";

export const AverageExecutionContract = ({ contractsChars }) => {
  return (
    <div className="card-average-contract">
      <h3 className="card-average-contract--tittle">
        Ejecución Promedio de los contratos:
      </h3>
      <p className="card-average-contract--quantity">
        {contractsChars.execution_mean} <span>Meses</span>
      </p>
    </div>
  );
};
