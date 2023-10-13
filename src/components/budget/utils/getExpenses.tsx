import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";

export const GetExpenses = () => {
  const totalExpense = useSelector<AppState, number>(
    ({ account }) => account.totalExpense
  );
  const expenseBudget = useSelector<AppState, number>(
    (state) => state.budget.expenseBudget
  );
  const getRents = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "Rent" ||
          el.name.split(" ")[1] === "Rent" ||
          el.name.split(" ")[0] === "rent" ||
          el.name.split(" ")[1] === "rent"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getGroceries = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter(
        (el) =>
          el.name === "Groceries" ||
          el.name.split(" ")[0] === "buy" ||
          el.name.split(" ")[0] === "Buy" ||
          el.name === "groceries"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getShoppingExpense = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter((el) => el.name === "Shopping" || el.name === "shopping")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getBills = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "Bill" ||
          el.name.split(" ")[1] === "Bill" ||
          el.name.split(" ")[0] === "bill" ||
          el.name.split(" ")[1] === "bill"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {getRents() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Rents</span>
          <span className="text-xs w-1/2">
            ({Math.round((getRents() * 100) / expenseBudget)}% is spent)
          </span>
          <span className="h6 w-1/7">{getRents()}</span>
        </div>
      )}
      {getGroceries() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Needs</span>
          <span className="text-xs w-1/2">
            ({Math.round((getGroceries() * 100) / expenseBudget)}% is spent)
          </span>
          <span className="h6 w-1/7">{getGroceries()}</span>
        </div>
      )}
      {getShoppingExpense() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Shopping</span>
          <span className="text-xs w-1/2">
            ( {Math.round((getShoppingExpense() * 100) / expenseBudget)}% is
            spent)
          </span>
          <span className="h6 w-1/7">{getShoppingExpense()}</span>
        </div>
      )}
      {getBills() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Bills</span>
          <span className="text-xs w-1/2">
            ({Math.round((getBills() * 100) / expenseBudget)}% is spent)
          </span>
          <span className="h6 w-1/7">{getBills()}</span>
        </div>
      )}
      {totalExpense ===
      getRents() + getGroceries() + getShoppingExpense() + getBills() ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-between m-2 p-2">
          <span className="h6 w-2/3">Spent on Others</span>
          <span className="text-xs w-1/2">
            (
            {Math.round(
              ((totalExpense -
                getRents() -
                getShoppingExpense() -
                getGroceries() -
                getBills()) *
                100) /
                expenseBudget
            )}
            % is spent)
          </span>
          <span className="h6 w-1/7">
            {totalExpense -
              getRents() -
              getShoppingExpense() -
              getGroceries() -
              getBills()}
          </span>
        </div>
      )}
      <hr />
      <div className="flex text-dark align-center justify-between m-2 p-2">
        <span className="h5 w-2/3">Total Expenses</span>
        <span className="h5 text-xs w-1/2 font-bold">
          ({Math.round((totalExpense * 100) / expenseBudget)}% is spent)
        </span>
        <span className="h5 w-1/7">{totalExpense}</span>
      </div>
    </>
  );
};
