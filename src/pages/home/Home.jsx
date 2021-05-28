import React from "react";
import "./Home.scss";
import filtrarComponentImg from "../../assets/img/filtrar.jpg";
import datosContratosComponentImg from "../../assets/img/cardDatosContratos.png";
import topDiezComponentImg from "../../assets/img/top10.jpg";
import contXmesComponentImg from "../../assets/img/contXmes.jpg";
import tipoContratosComponentImg from "../../assets/img/tipoContratos.jpg";
import ejecucionPromedioComponentImg from "../../assets/img/ejecProm.png";
import verTodosComponentImg from "../../assets/img/verTodos.jpg";
import chartHomeImg from "../../assets/img/chartHome.png";
export const Home = () => {
  return (
    <main className="home">
      <h1 className="home__title">OpenContractMX</h1>
      <h2 className="home__subtitle">
        Bienvenido, en esta plataforma podrás encontrar información y estadísticas de interés referente a Contratos Federales.
      </h2>
      <p className="home__paragraph">
        Puedes filtrar por dependencias y año.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={filtrarComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Observar un total de contratos e inversión.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={datosContratosComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Ver todos los contratos de manera detallada por mes o por trimestre.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={verTodosComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Puedes ver el Top 10 de contratos por gastos.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={topDiezComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Observar el número de contratos por mes.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={contXmesComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Detallar los tipos de contratos.
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={tipoContratosComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
        Y un tiempo de ejecución promedio para estos contratos de la dependencia detallada. 
      </p>
      <div className="home__container-example">
        <figure className="home__container-example--img">
        <img src={ejecucionPromedioComponentImg} alt="Imagen ilustrativa paso 1" />
        </figure>
      </div>
      <p className="home__paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <div className="home__container-chart">
        <figure className="home__container-chart--logo">
          <img src={chartHomeImg} alt="Imagen del Home" />
        </figure>
      </div>

      
    </main>
  );
};
