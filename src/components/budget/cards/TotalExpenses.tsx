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
        name="expensebudget"
        title="Total Expenses"
        color="rgb(255, 205, 86)"
      />
    </div>
  );
};

export default TotalExpenses;
