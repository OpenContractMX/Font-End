import React from "react";
import { Link } from "react-router-dom";
import "./CardTotalContracts.scss";

export const CardTotalContacts = ({ filter }) => {
  // console.log(filter);

  return (
    <div className="card-total-contract">
      <h2 className="card-total-contract--all">
        Total Contratos:
        <span>53</span>
      </h2>
      <h2 className="card-total-contract__investment">
        Inversión:
        <span className="card-total-contract__investment--amount">
          200
          <span>MX</span>
        </span>
      </h2>
      <Link to={`/contracts?category=${filter.category}&year=${filter.year}`}>
        <button type="button" className="btn-ver-todos">
          Ver todos
        </button>
      </Link>
    </div>
  );
};
