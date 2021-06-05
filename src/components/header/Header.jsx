import React from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "../hamburger-menu/HamburgerMenu";
import "./Header.scss";
import logo from "../../assets/img/logo.png";

export const Header = () => {
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
      <div className="header__nav">
        <HamburgerMenu className="header__nav--list" />
      </div>
    </header>
  );
};
