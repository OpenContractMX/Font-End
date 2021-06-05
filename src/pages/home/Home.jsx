import React from "react";
import "./Home.scss";
import filtrarComponentImg from "../../assets/img/filtrar.png";
import datosContratosComponentImg from "../../assets/img/cardDatosContratos.png";
import topDiezComponentImg from "../../assets/img/top10.png";
import contXmesComponentImg from "../../assets/img/contXmes.png";
import ejecucionPromedioComponentImg from "../../assets/img/ejecProm.png";
import verTodosComponentImg from "../../assets/img/verTodos.png";
import chartHomeImg from "../../assets/img/chartHome.png";
export const Home = () => {
  return (
    <main>
      <section className="home">
        <h1 className="home__title">OpenContractMX</h1>
        <h2 className="home__subtitle">
          Bienvenido, en esta plataforma podrás encontrar información y
          estadísticas de interés referente a Contratos Federales de México.
        </h2>
        <p className="home__paragraph--use">
          Cómo puedes usar nuestra plataforma?
        </p>
        <p className="home__paragraph">
          1. Puedes filtrar por Categoría y año.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img src={filtrarComponentImg} alt="Imagen ilustrativa paso 1" />
          </figure>
        </div>
        <p className="home__paragraph">
          2. Observar un total de contratos e inversión.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img
              src={datosContratosComponentImg}
              alt="Imagen ilustrativa paso 2"
            />
          </figure>
        </div>
        <p className="home__paragraph">
          3. Ver todos los contratos de manera detallada por mes o por
          trimestre.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img src={verTodosComponentImg} alt="Imagen ilustrativa paso 3" />
          </figure>
        </div>
        <p className="home__paragraph">
          4. Puedes ver el Top 10 de contratos por gastos.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img src={topDiezComponentImg} alt="Imagen ilustrativa paso 4" />
          </figure>
        </div>
        <p className="home__paragraph">
          5. Observar el número de contratos por mes.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img src={contXmesComponentImg} alt="Imagen ilustrativa paso 5" />
          </figure>
        </div>
        <p className="home__paragraph">
          6. Y un tiempo de ejecución promedio para estos contratos de la
          categoría detallada.
        </p>
        <div className="home__container-example">
          <figure className="home__container-example--img">
            <img
              src={ejecucionPromedioComponentImg}
              alt="Imagen ilustrativa paso 7"
            />
          </figure>
        </div>
        <p className="home__paragraph">
          Toda la información que puede ser obtenida por esta aplicación fue
          rescatada y procesada con los datos obtenidos el 14 de mayo del 2021,
          en el portal de la{" "}
          <a
            className="home__paragraph--link"
            href="https://datos.gob.mx/busca/dataset/concentrado-de-contrataciones-abiertas-de-la-apf-shcp/resource/aa36c461-a1d3-4373-bfb5-ca479ed86f26?inner_span=True"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            SHCP
          </a>
          (Secretaria de Hacienda y Crédito Público).
        </p>
        <div className="home__container-chart">
          <figure className="home__container-chart--logo">
            <img src={chartHomeImg} alt="Imagen del Home" />
          </figure>
        </div>
      </section>
    </main>
  );
};
