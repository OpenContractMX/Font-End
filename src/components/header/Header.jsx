import React from "react";
import "./Header.scss";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <figure className="header__container-logo--logo">
          <img src={logo} alt="logo" />
        </figure>
        <span className="header__container-logo--name">OpenContractMX</span>
      </div>
      <nav className="header__nav">
        <i className="header__nav--icon-menu fas fa-bars"></i>
        <ul className="header__nav--list">
          <li className="nav__list--home">
            <i className="list__home--icon-home fas fa-home"></i>
            <span className="list__home--name">Inicio</span>
          </li>
          <li className="nav__list--statistic">
            <i className="list__statistic--icon-chart fas fa-chart-line"></i>
            <span className="list__statistic--name">Estadisticas</span>
          </li>
          <li className="nav__list--about-us">
            <i className="list__about-us--icon-team fas fa-people-carry"></i>
            <span className="list__about-us--name">Sobre Nosotros</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
