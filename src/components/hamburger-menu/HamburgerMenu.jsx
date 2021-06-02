import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
// import { fallDown as Menu } from "react-burger-menu";
import "./HamburgerMenu.scss";

export const HamburgerMenu = () => {
  const Menu = {
    home: "Inicio",
    statistic: "Estadística",
    aboutUs: "Sobre Nosotros",
  };
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <i className="navBar__icon-menu" onClick={handleToggle}>
        {navbarOpen ? <MdClose /> : <FiMenu />}
      </i>
      <ul className={`navBar__list ${navbarOpen ? " showMenu" : ""}`}>
        <li
          className="nav__list--home"
          activeClassName="active-link"
          onClick={() => closeMenu()}
        >
          <Link to="/" className="list__home--name">
            <i className="list__home--icon-home fas fa-home"></i>
            {Menu.home}
          </Link>
        </li>
        <li
          className="nav__list--statistic"
          activeClassName="active-link"
          onClick={() => closeMenu()}
        >
          <Link to="/statistic" className="list__statistic--name">
            <i className="list__statistic--icon-chart fas fa-chart-line"></i>
            {Menu.statistic}
          </Link>
        </li>
        <li
          className="nav__list--about-us"
          activeClassName="active-link"
          onClick={() => closeMenu()}
        >
          <Link to="/about-us" className="list__about-us--name">
            <i className="list__about-us--icon-team fas fa-people-carry"></i>
            {Menu.aboutUs}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
