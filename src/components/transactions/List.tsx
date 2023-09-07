import { AppState } from "../../redux/store";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

const TransactionsTracker = () => {
  const dispatch = useDispatch();
  const account = useSelector<AppState>((state) => state.account);
  const budget = useSelector<AppState>((state) => state.budget);
  const trans = useSelector<AppState>((state) => state.trans);
  // const { totalAmount } = budget;
  // const { totalSavings, totalExpense, totalInvestment } = account;

  // const savingPercent = Math.round((totalSavings * 100) / totalAmount);
  // const expensePercent = Math.round((totalExpense * 100) / totalAmount);
  // const investPercent = Math.round((totalInvestment * 100) / totalAmount);
  // const availBalPercent = Math.round(
  //   100 - (savingPercent + expensePercent + investPercent)
  // );

  const objects: any = [
    {
      type: "Balance",
      color: "rgb(155, 05, 186,0.7)",
      percent: 30,
    },
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      percent: 20,
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      percent: 20,
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      percent: 30,
    },
  ];

  // useEffect(() => {
  //   if (account !== null) {
  //     dispatch(getObjects(objects));
  //   }
  // }, [trans]);

  return (
    <div className="tracker flex justify-content max-w-xs-mx-auto">
      {objects.map((object: any) => {
        return (
          <div className="list">
            <span
              className="list-style p-2"
              style={{ background: `${object.color}` }}
            ></span>
            <span className="p-2">{object.type}</span>
            <span className="p-2">{object.percent}%</span>
          </div>
        );
      })}
    </div>
  );
};
export default TransactionsTracker;
