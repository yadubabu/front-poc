import React from "react";
import Cards from "./shared/Card";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
const TotalInvestments = () => {
  const totalInvestment = useSelector<AppState, number>(
    ({ account }) => account.totalInvestment
  );
  return (
    <div>
      <Cards
        val={totalInvestment}
        name="totalinvestment"
        title="Total Investments"
        color="rgb(15, 127, 201)"
      />
    </div>
  );
};

export default TotalInvestments;
