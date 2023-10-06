import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const TotalSavings = () => {
  const totalSavings = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  return (
    <div>
      <Cards
        val={totalSavings}
        name="totalsavings"
        title="Total Savings"
        color="rgb(155, 05, 186)"
      />
    </div>
  );
};

export default TotalSavings;
