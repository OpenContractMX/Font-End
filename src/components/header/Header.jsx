import React from "react";
import { Link } from "react-router-dom";
// import { HamburgerMenu } from "../hamburger-menu/HamburgerMenu";
import "./Header.scss";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  const Menu = {
    home: "Inicio",
    statistic: "Estadistica",
    aboutUs: "Sobre Nosotros",
  };

  const Toggle = () => {
    const toBeToggledMenu = document.getElementById("menu");
    if (toBeToggledMenu.style.display === "none") {
      toBeToggledMenu.style.display = "block";
    } else {
      toBeToggledMenu.style.display = "none";
    }
  };

  return (
    <header className="header" id="header">
      <div className="header__container-logo">
        <figure className="header__container-logo--logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </figure>
        <span className="header__container-logo--name">OpenContractMX</span>
      </div>
      <nav className="header__nav" id="header__nav">
        {/* <i className="header__nav--icon-menu fas fa-bars" onClick={Toggle}></i>
        <ul className="header__nav--list" id="menu">
          <li className="nav__list--home">
            <Link to="/" className="list__home--name">
              <i className="list__home--icon-home fas fa-home"></i>
              {Menu.home}
            </Link>
          </li>
          <li className="nav__list--statistic">
            <Link to="/statistic" className="list__statistic--name">
              <i className="list__statistic--icon-chart fas fa-chart-line"></i>
              {Menu.statistic}
            </Link>
          </li>
          <li className="nav__list--about-us">
            <Link to="/about-us" className="list__about-us--name">
              <i className="list__about-us--icon-team fas fa-people-carry"></i>
              {Menu.aboutUs}
            </Link>
          </li>
        </ul> */}
        {/* <HamburgerMenu
          right
          pageWrapId={"header__nav"}
          outerContainerId={"header"}
        /> */}
      </nav>
    </header>
  );
};
