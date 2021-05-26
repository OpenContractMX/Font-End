import React from "react";
import { FilterCategory } from "../../components/filter-category";
import { CardTotalContacts } from "../../components/card-total-contact";
import "./Statistic.scss";

export const Statistic = () => {
  return (
    <main className="container-statistic">
      <FilterCategory />
      <CardTotalContacts />
    </main>
  );
};
