import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { Trans } from "../../../dataTypes";
const GetIncomes = () => {
  const totalIncomes = useSelector<AppState, number>(
    (state) => state.account.totalIncomes
  );
  const trans = useSelector<AppState, Trans[]>((state) => state.trans);
  const getSalaries = () => {
    return trans
      .filter((tran) => tran.type === "income")
      .filter((el) => el.name.toLowerCase() === "salary")
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getRentals = () => {
    return trans
      .filter((tran) => tran.type === "income")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "Rents" ||
          el.name.split(" ")[1] === "Rents" ||
          el.name.split(" ")[0] === "rents" ||
          el.name.split(" ")[1] === "rents"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getSales = () => {
    return trans
      .filter((tran) => tran.type === "income")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "sale" ||
          el.name.split(" ")[1] === "sales" ||
          el.name.split(" ")[0] === "Sale" ||
          el.name.split(" ")[1] === "Sales"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getAdvances = () => {
    return trans
      .filter((tran) => tran.type === "income")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "advance" ||
          el.name.split(" ")[1] === "advance" ||
          el.name.split(" ")[0] === "Advance" ||
          el.name.split(" ")[1] === "Advance"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  return (
    <div className="bg-indigo-200 m-3 h-100 rounded-md">
      {getSalaries() === 0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Salary</span>

          <span className="h6 w-1/9">{getSalaries()}</span>
        </div>
      )}
      {getRentals() === 0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Rentals</span>
          <span className="h6 w-1/9">{getRentals()}</span>
        </div>
      )}
      {getSales() === 0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Sales</span>

          <span className="h6 w-1/9">{getSales()}</span>
        </div>
      )}
      {getAdvances() === 0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Advances</span>
          <span className="h6 w-1/9">{getAdvances()}</span>
        </div>
      )}
      {totalIncomes -
        getAdvances() -
        getRentals() -
        getSalaries() -
        getSales() ===
      0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Others</span>
          <span className="h6 w-1/9">
            {totalIncomes -
              getAdvances() -
              getRentals() -
              getSalaries() -
              getSales()}
          </span>
        </div>
      )}
      <hr />
      <div className="flex  align-center justify-between p-3">
        <span className="h6 w-3/4 text-md font-bold">Total Earnings</span>

        <span className="h6 w-1/9 text-md font-bold">{totalIncomes}</span>
      </div>{" "}
    </div>
  );
};

export default GetIncomes;
