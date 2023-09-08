import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

type Props = {
  setPercent: React.Dispatch<React.SetStateAction<number[]>>;
};
const GetPercent = (props: Props) => {
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
  useEffect(() => {
    props.setPercent([20, 30, 20, 30]);
  }, [props.setPercent]);
  return <div>getPercent</div>;
};

export default GetPercent;
