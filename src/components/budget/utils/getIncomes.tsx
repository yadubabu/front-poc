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
          el.name.split(" ")[0] === "Rental" ||
          el.name.split(" ")[1] === "Rental" ||
          el.name.split(" ")[0] === "rental" ||
          el.name.split(" ")[1] === "rental"
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
          el.name.split(" ")[0] === "sold" ||
          el.name.split(" ")[1] === "sold" ||
          el.name.split(" ")[0] === "Sold" ||
          el.name.split(" ")[1] === "Sold"
      )
      .map((e) => e.amount)
      .reduce((a: number, c: number) => {
        return a + c;
      }, 0);
  };
  const getGifts = () => {
    return trans
      .filter((tran) => tran.type === "income")
      .filter(
        (el) =>
          el.name.split(" ")[0] === "gifts" ||
          el.name.split(" ")[1] === "gifts" ||
          el.name.split(" ")[0] === "Gifts" ||
          el.name.split(" ")[1] === "Gifts"
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
      {getGifts() === 0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Gifts</span>
          <span className="h6 w-1/9">{getGifts()}</span>
        </div>
      )}
      {totalIncomes - getGifts() - getRentals() - getSalaries() - getSales() ===
      0 ? (
        ""
      ) : (
        <div className="flex align-center justify-between p-3">
          <span className="h6 w-3/4">Earns by Others</span>
          <span className="h6 w-1/9">
            {totalIncomes -
              getGifts() -
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
