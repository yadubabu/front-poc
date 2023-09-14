import { useSelector } from "react-redux";
import { Trans } from "../../../dataTypes";
import { AppState } from "../../../redux/store";
import "./style.css";
import salImg from "../../../assets/salary.png";
import { BsMotherboardFill } from "react-icons/bs";
import { AiFillGold } from "react-icons/ai";
import { GiIsland } from "react-icons/gi";

export const GetSavings = () => {
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const totalSavings = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  const totalExpenses = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  const totalInvestments = useSelector<AppState, number>(
    ({ account }) => account.totalSavings
  );
  const getSalary = () => {
    return trans
      .filter((tran) => tran.type === "savings")
      .filter((el) => el.name === "Salary")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getSoldIncomes = () => {
    const sold = trans
      .filter((tran) => tran.type === "savings")
      .filter((el) => el.name === "Sold car")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
    if (sold) {
      return sold;
    } else {
      return 0;
    }
  };

  return (
    <>
      {getSalary() === 0 ? (
        ""
      ) : (
        <div className="save d-flex">
          <span className="h6 text-light">
            Earnings By Salary{" "}
            <img src={salImg} alt="" width={50} height={50} />
          </span>
          <span className="h2 text-light">{getSalary()}</span>
        </div>
      )}
      {getSoldIncomes() === 0 ? (
        ""
      ) : (
        <>
          <div className="save d-flex">
            <span className="h6 text-light">Earnings By Soldings </span>
            <span className="h2 text-light">{getSoldIncomes()}</span>
          </div>
        </>
      )}
      {totalSavings === getSalary() + getSoldIncomes() ? (
        ""
      ) : (
        <div className="save d-flex">
          <span className="h6 text-light">
            Earnings By Others{" "}
            <span className="text-success">
              {" "}
              <BsMotherboardFill />{" "}
            </span>
          </span>

          <span className="h2 text-light">
            {totalSavings - getSalary() - getSoldIncomes()}
          </span>
        </div>
      )}
      <hr />
      <div className="save d-flex">
        <span className="h6 text-light">Total Savings</span>
        <span className="h2 text-light">{totalSavings}</span>
      </div>
    </>
  );
};
export const GetExpenses = () => {
  const getTotalExpenses = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .map((el) => el.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getRents = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter((el) => el.name === "Rent")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getGroceries = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter((el) => el.name === "Groceries")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getShoppingExpense = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter((el) => el.name === "Shopping")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getOtherExpenses = () => {
    return trans
      .filter((tran) => tran.type === "expense")
      .filter((el) => el.name === "Others")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      <div className="save d-flex">
        <span className="h6">Expense on Rents </span>
        <span className="h6 text-light">{getRents()}</span>
      </div>
      <div className="save d-flex">
        <span className="h6">Expense on Groceries </span>
        <span className="h6 text-light">{getGroceries()}</span>
      </div>
      <div className="save d-flex">
        <span className="h6">Expense on Shoppings </span>
        <span className="h6 text-light">{getShoppingExpense()}</span>
      </div>
      <div className="save d-flex">
        <span className="h6">Expense on Others </span>
        <span className="h6 text-light">{getOtherExpenses()}</span>
      </div>

      <hr />
      <div className="save d-flex">
        <span className="h6">Total Savings</span>
        <span className="h2 text-light">{getTotalExpenses()}</span>
      </div>
    </>
  );
};

export const GetInvestment = () => {
  const getTotalInvestments = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .map((el) => el.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getGoldInvestments = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .filter((el) => el.name === "Buy Gold")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getLandInvestment = () => {
    return trans
      .filter((tran) => tran.type === "investment")
      .filter((el) => el.name === "Buy Land")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  return (
    <>
      <div className="save d-flex">
        <span className="h6">
          Investments on Gold{" "}
          <span className="text-warning">
            <AiFillGold />
          </span>
        </span>

        <span className="h6 text-light">{getGoldInvestments()}</span>
      </div>
      <div className="save d-flex">
        <span className="h6">
          Investments on Land
          <span className="text-danger">
            <GiIsland />
          </span>{" "}
        </span>
        <span className="h6 text-light">{getLandInvestment()}</span>
      </div>
      <div className="save d-flex">
        <span className="h6">
          Expense on Others{" "}
          <span className="text-primary">
            <BsMotherboardFill />
          </span>
        </span>
        <span className="h6 text-light">
          {getTotalInvestments() - getGoldInvestments() - getLandInvestment()}
        </span>
      </div>
      <hr />
      <div className="save d-flex">
        <span className="h6 ">Total Investments</span>
        <span className="h2 text-light">{getTotalInvestments()}</span>
      </div>
    </>
  );
};
