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
  const savingPercent = Math.round((totalSavings / totalAmount) * 100);
  const expensePercent = Math.round((totalExpense / totalAmount) * 100);
  const investPercent = Math.round((totalInvestment / totalAmount) * 100);

  const shares: Shares[] = [
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      percent: savingPercent,
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      percent: investPercent,
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      percent: expensePercent,
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
