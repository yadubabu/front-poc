import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";
import "./style.css";
import pfImg from "../../../assets/pf.png";
import { BsMotherboardFill } from "react-icons/bs";
import { AiFillGold } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";

export const GetSavings = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const totalSavings = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  const getPF = () => {
    return trans
      .filter((tran) => tran.type === "savings")
      .filter((el) => el.name === "PF" || el.name === "pf")
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
          el.name.split(" ")[1] === "fund" || el.name.split(" ")[1] === "Fund"
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
      {getPF() === 0 ? (
        ""
      ) : (
        <div className="flex text-dark align-center justify-around">
          <span className="h4 ">PF</span>
          <img src={pfImg} alt="" width={15} height={15} />
          <span className="h4">{getPF()}</span>
        </div>
      )}
      {getFunds() === 0 ? (
        ""
      ) : (
        <>
          <div className="flex">
            <span className="h6 text-light">Earnings By Soldings </span>
            <span className="h2 text-light">{getFunds()}</span>
          </div>
        </>
      )}
      {totalSavings === getPF() + getFunds() ? (
        ""
      ) : (
        <div className="">
          <span className="h6 text-light">
            Earnings By Others{" "}
            <span className="text-success">
              {" "}
              <BsMotherboardFill />{" "}
            </span>
          </span>

          <span className="h2 text-light">
            {totalSavings - getPF() - getFunds()}
          </span>
        </div>
      )}
      <hr />
      <div className=" flex">
        <span className="h6 text-light">Total Savings</span>
        <span className="h2 text-light">{totalSavings}</span>
      </div>
    </>
  );
};
export const GetExpenses = () => {
  const totalExpense = useSelector<AppState, number>(
    ({ account }) => account.totalExpense
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

  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      {getRents() === 0 ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">Expense on Rents </span>
          <span className="h6 text-light">{getRents()}</span>
        </div>
      )}
      {getGroceries() === 0 ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">Expense on Groceries </span>
          <span className="h6 text-light">{getGroceries()}</span>
        </div>
      )}
      {getShoppingExpense() === 0 ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">Expense on Shoppings </span>
          <span className="h6 text-light">{getShoppingExpense()}</span>
        </div>
      )}
      {totalExpense === getRents() + getGroceries() + getShoppingExpense() ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">Expense on Others </span>
          <span className="h6 text-light">
            {totalExpense - getRents() - getShoppingExpense() - getGroceries()}
          </span>
        </div>
      )}
      <hr />
      <div className="save d-flex">
        <span className="h6">Total Expenses</span>
        <span className="h2 text-light">{totalExpense}</span>
      </div>
    </>
  );
};

export const GetInvestment = () => {
  const totalInvestment = useSelector<AppState, number>(
    ({ account }) => account.totalInvestment
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
        <div className="save d-flex p-1">
          <span className="h6">
            Investments on Gold{" "}
            <span className="text-warning">
              <AiFillGold />
            </span>
          </span>

          <span className="h6 text-light">{getGoldInvestments()}</span>
        </div>
      )}
      {getLandInvestment() === 0 ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">
            Investments on Land
            <span className="text-danger">
              <GiIsland />
            </span>{" "}
          </span>
          <span className="h6 text-light">{getLandInvestment()}</span>
        </div>
      )}
      {getStocks() === 0 ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">Investments on Stocks </span>

          <span className="h6 text-light">{getStocks()}</span>
        </div>
      )}
      {totalInvestment ===
      getGoldInvestments() + getLandInvestment() + getStocks() ? (
        ""
      ) : (
        <div className="save d-flex p-1">
          <span className="h6">
            Investments on Others{" "}
            <span className="text-primary">
              <BsMotherboardFill />
            </span>
          </span>
          <span className="h6 text-light">
            {totalInvestment -
              getGoldInvestments() -
              getLandInvestment() -
              getStocks()}
          </span>
        </div>
      )}
      <hr />
      <div className="save d-flex ">
        <span className="h6 ">Total Investments</span>
        <span className="h2 text-light">{totalInvestment}</span>
      </div>
    </>
  );
};
