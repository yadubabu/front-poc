import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";

export const GetInvestment = () => {
  const totalInvestment = useSelector<AppState, number>(
    ({ account }) => account.totalInvestment
  );
  const investmentBudget = useSelector<AppState, number>(
    (state) => state.budget.investmentBudget
  );

  const getGoldInvestments = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .filter(
        (el) =>
          el.name.split(" ")[1] === "Gold" || el.name.split(" ")[1] === "gold"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getStocks = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .filter(
        (el) =>
          el.name.split(" ")[1] === "stocks" ||
          el.name.split(" ")[1] === "Stocks"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getLandInvestment = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .filter(
        (el) =>
          el.name.split(" ")[1] === "land" || el.name.split(" ")[1] === "Land"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {getGoldInvestments() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Gold</span>
          <span className="text-xs w-1/2">
            {Math.round((getGoldInvestments() * 100) / investmentBudget)}% is
            spent
          </span>
          <span className="h6 w-1/7">{getGoldInvestments()}</span>
        </div>
      )}
      {getLandInvestment() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Land</span>
          <span className="text-xs w-1/2">
            {Math.round((getLandInvestment() * 100) / investmentBudget)}% is
            spent
          </span>
          <span className="h6 w-1/7">{getLandInvestment()}</span>
        </div>
      )}
      {getStocks() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Stocks</span>
          <span className="text-xs w-1/2">
            {Math.round((getStocks() * 100) / investmentBudget)}% is spent
          </span>
          <span className="h6 w-1/7">{getStocks()}</span>
        </div>
      )}
      {totalInvestment ===
      getGoldInvestments() + getLandInvestment() + getStocks() ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Investments on Others </span>
          <span className="text-xs w-1/2">
            {Math.round(
              ((totalInvestment -
                getGoldInvestments() -
                getStocks() -
                getLandInvestment()) *
                100) /
                investmentBudget
            )}
            % is spent
          </span>
          <span className="text-xs w-1/7">
            {totalInvestment -
              getGoldInvestments() -
              getLandInvestment() -
              getStocks()}
          </span>
        </div>
      )}
      <hr />
      <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h5 w-2/3">Total Investments</span>
          <span className="h5 text-sm w-1/2">
          ({Math.round((totalInvestment * 100) / investmentBudget)}% total
          spent)
        </span>

        <span className="h5">{totalInvestment}</span>
      </div>
    </>
  );
};
