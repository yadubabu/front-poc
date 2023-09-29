import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";

export const GetSavings = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const savingsBudget = useSelector<AppState, number>(
    (state) => state.budget.savingsBudget
  );
  const totalSavings = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  const getBonds = () => {
    return trans
      .filter((tran) => tran.type === "savings")
      .filter(
        (el) =>
          el.name.split(" ")[1] === "Bonds" || el.name.split(" ")[1] === "bonds"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getFunds = () => {
    const soldings = trans
      .filter((tran) => tran.type === "savings")
      .filter(
        (el) =>
          el.name.split(" ")[1] === "funds" || el.name.split(" ")[1] === "Funds"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
    if (soldings) {
      return soldings;
    } else {
      return 0;
    }
  };

  return (
    <>
      {getBonds() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Bonds</span>
          <span className="text-xs w-1/2">
            {(getBonds() * 100) / savingsBudget}% is spent
          </span>
          <span className="h6 w-1/7">{getBonds()}</span>
        </div>
      )}
      {getFunds() === 0 ? (
        ""
      ) : (
        <>
          <div className="flex text-dark align-center justify-between m-2 p-2">
            <span className="h6 w-2/3">Spent on Emergency Funds</span>
            <span className="text-xs w-1/2">
              {(getFunds() * 100) / savingsBudget}% is spent
            </span>
            <span className="h6 w-1/7">{getFunds()}</span>
          </div>
        </>
      )}
      {totalSavings === getBonds() + getFunds() ? (
        ""
      ) : (
        <div className="flex text-dark m-2 p-2">
          <span className="h6 w-2/3">Spent on Other Savings</span>
          <span className="text-xs w-1/2">
            {((totalSavings - getFunds() - getBonds()) * 100) / savingsBudget}%
            is spent
          </span>
          <span className="h6 w-1/7">
            {totalSavings - getBonds() - getFunds()}
          </span>
        </div>
      )}
      <hr />
      <div className="flex text-dark align-center justify-between m-2 p-2">
        <span className="h6">Total Savings</span>
        <span className="h6">{totalSavings}</span>
      </div>
    </>
  );
};
