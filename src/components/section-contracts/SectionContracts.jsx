import React from "react";
import "./SectionContracts.scss";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export const SectionContracts = () => {
  const { search } = useLocation();
  const { category, year } = queryString.parse(search);
  console.log(category, year);
  //fetch
  return (
    <section className="container-contracts">
      <h2 className="container-contracts--title">Contratos</h2>
      <div className="container-contracts__contract-wrap">
        <div className="container-contracts__contract-wrap--card-contract">
          <h3>Dependencia:</h3>
          <p>Secretaría de Comunicaciones y Transportes</p>
          <h3>Contrato:</h3>
          <p>El servicio de Comunicación Unificada San Fandila</p>
          <h3>Valor:</h3>
          <p>
            20000 <span>MXN</span>
          </p>
          <h3>Fecha:</h3>
          <p>2016-12-19T12:44:56</p>
        </div>
        <div className="container-contracts__contract-wrap--card-contract">
          <h3>Dependencia:</h3>
          <p>Secretaría de Comunicaciones y Transportes</p>
          <h3>Contrato:</h3>
          <p>
            El servicio de Comunicación Unificada San Fandila – México, y
            Servicios de bienes telemáticos, Mantenimiento preventivo y
            correctivo de hardware, PC’s y periféricos, firewall, switch y
            Access point.
          </p>
          <h3>Valor:</h3>
          <p>
            20000 <span>MXN</span>
          </p>
          <h3>Fecha:</h3>
          <p>2016-12-19T12:44:56</p>
        </div>
        <div className="container-contracts__contract-wrap--card-contract">
          <h3>Dependencia:</h3>
          <p>Secretaría de Comunicaciones y Transportes</p>
          <h3>Contrato:</h3>
          <p>
            El servicio de Comunicación Unificada San Fandila – México, y
            Servicios de bienes telemáticos, Mantenimiento preventivo y
            correctivo de hardware, PC’s y periféricos, firewall, switch y
            Access point.
          </p>
          <h3>Valor:</h3>
          <p>
            20000 <span>MXN</span>
          </p>
          <h3>Fecha:</h3>
          <p>2016-12-19T12:44:56</p>
        </div>
      </div>
    </section>
  );
};
