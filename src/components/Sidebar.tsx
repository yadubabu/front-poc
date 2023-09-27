import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import "./style.css";
import { AppState } from "../redux/store";
import { Trans } from "../dataTypes";
import {
  accountService,
  budgetService,
  transactionService,
} from "../redux/services/allServices";

const Sidebar = () => {
  const email = useSelector<AppState, string>((state) => state.user.email);
  const name = useSelector<AppState, string>((state) => state.user.name);
  const auth = useSelector<AppState>((state) => state.auth);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const [current, setCurrent] = useState({ border: "none", color: "white" });

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(transactionService(email));
  }, [trans, auth]);
  useEffect(() => {
    dispatch(accountService(email));
  }, [trans, auth]);
  useEffect(() => {
    dispatch(budgetService(email));
  }, [trans, auth]);
  return (
    <div className="h-90 m-3 bg-indigo-900 rounded-xl text-xs align-items-center justify-content-center text-center">
      <ul className="mb-3">
        <li className="p-3 m-2">
          {" "}
          <a href="/dashboard" className="font-bold uppercase text-light">
            Dashboard
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/budget/setbudget" className="text-light">
            Set Budget
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/budget/totalsavings" className="text-light">
            Total Savings{" "}
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/budget/totalexpense" className=" text-light">
            Total Expenses{" "}
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/budget/totalinvestment" className=" text-light">
            Total Investments{" "}
          </a>
        </li>
        <li className="p-3 m-2">
          <a href="/transactions/add" className="text-light">
            Add Transactions
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/transactions/edit" className="text-light">
            Transactions History{" "}
          </a>
        </li>
        <li className="p-3 m-2">
          {" "}
          <a href="/transactions/tracker" className="text-light">
            Transactions Tracker{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
