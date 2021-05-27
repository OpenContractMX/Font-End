import React from "react";
import { FilterPerTime } from "../../components/filter-per-time";
import { NavOfContracts } from "../../components/nav-of-contracts";
import { SectionContracts } from "../../components/section-contracts";

import "./Contracts.scss";

export const Contracts = () => {
  return (
    <main className="container-contracts">
      <NavOfContracts />
      <FilterPerTime />
      <SectionContracts />
    </main>
  );
};
