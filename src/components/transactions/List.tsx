import React, { useEffect } from "react";
import { Shares } from "../../dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { sharesAction } from "../../redux/actions/sharesAction";
import { Dispatch } from "react";

const List = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const totalSavings = useSelector<AppState, number>(
    (state) => state.account.totalSavings
  );
  const totalExpense = useSelector<AppState, number>(
    (state) => state.account.totalExpense
  );
  const totalInvestment = useSelector<AppState, number>(
    (state) => state.account.totalInvestment
  );

  const totalAmount = useSelector<AppState, number>(
    (state) => state.budget.totalAmount
  );
  const savingPercent = Math.round((totalSavings * 100) / totalAmount);
  const expensePercent = Math.round((totalExpense * 100) / totalAmount);
  const investPercent = Math.round((totalInvestment * 100) / totalAmount);
  const availBalPercent = Math.round(
    100 - (savingPercent + expensePercent + investPercent)
  );

  const shares: Shares[] = [
    {
      type: "Balance",
      color: "rgb(27, 77, 14)",
      percent: availBalPercent,
    },
    {
      type: "Savings",
      color: "rgb(155, 05, 186)",
      percent: savingPercent,
    },
    {
      type: "Expenses",
      color: "rgb(238, 174, 26)",
      percent: expensePercent,
    },
    {
      type: "Investment",
      color: "rgb(15, 127, 201)",
      percent: investPercent,
    },
  ];
  useEffect(() => {
    dispatch(sharesAction(shares));
  });

  console.log(shares);

  return (
    <div className="flex justify-content max-w-xs-mx-auto">
      {shares.map((share: Shares) => {
        return (
          <div className="list">
            <span
              className="list-style p-2"
              style={{ background: `${share.color}` }}
            ></span>
            <span className="p-2">{share.type}</span>
            <span className="p-2">{share.percent}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;
