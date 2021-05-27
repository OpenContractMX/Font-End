import React from "react";
import { Link } from "react-router-dom";

import "./NavOfContracts.scss";

export const NavOfContracts = () => {
  return (
    <nav className="nav-contracts">
      <Link to="/statistic">
        <button type="button" className="nav-contracts--btn-volver">
          <i class="fas fa-arrow-left icon-volver"></i>
          Volver
        </button>
      </Link>

      <button type="button" className="nav-contracts--ver-todos">
        <span>Ver todos</span>
      </button>
    </nav>
  );
};
