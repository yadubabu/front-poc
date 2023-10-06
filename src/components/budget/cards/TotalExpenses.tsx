import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { Account, Budget } from "../../../dataTypes";
import { AppState } from "../../../redux/store";

const TotalExpenses = () => {
  const totalExpense = useSelector<AppState, number>(
    ({ account }) => account.totalExpense
  );
  return (
    <div>
      <Cards
        val={totalExpense}
        name="totalexpense"
        title="Total Expenses"
        color="rgb(238, 174, 26)"
      />
    </div>
  );
};

export default TotalExpenses;
