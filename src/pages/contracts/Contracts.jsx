import React, { useState } from "react";
import { FilterPerTime } from "../../components/filter-per-time";
import { NavOfContracts } from "../../components/nav-of-contracts";
import { SectionContracts } from "../../components/section-contracts";

import "./Contracts.scss";

export const Contracts = () => {
  const [filterTime, setFilterTime] = useState({
    month: "Mes",
    quarter: "Trimestre",
  });
  console.log(filterTime);

  return (
    <main className="container-contracts">
      <NavOfContracts />
      <FilterPerTime filterTime={filterTime} setFilterTime={setFilterTime} />
      <SectionContracts filterTime={filterTime} />
    </main>
  );
};
