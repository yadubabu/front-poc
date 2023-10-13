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
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const email = useSelector<AppState, string>((state) => state.user.email);
  const auth = useSelector<AppState>((state) => state.auth);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);

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
    <div className="hidden pt-3 lg:flex row w-100  my-4  mx-2 bg-indigo-900 rounded-xl text-xs align-items-center justify-content-center text-center p-1">
      <NavLink
        id="active"
        to="/dashboard"
        className="w-1/2 p-2 m-2 font-bold uppercase text-light"
      >
        Dashboard
      </NavLink>{" "}
      <NavLink
        to="/budget/setbudget"
        className="w-1/2 p-2 m-2 text-light text-sm text-sm"
      >
        Set Budget
      </NavLink>{" "}
      <NavLink
        to="/budget/totalincomes"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Total Incomes
      </NavLink>
      <NavLink
        to="/budget/totalexpense"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Total Expenses{" "}
      </NavLink>
      <NavLink
        to="/budget/totalinvestment"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Total Investments{" "}
      </NavLink>
      <NavLink
        to="/budget/totalsavings"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Total Savings{" "}
      </NavLink>
      <NavLink
        to="/transactions/add"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Add Transactions
      </NavLink>
      <NavLink
        to="/transactions/edit"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Transactions History{" "}
      </NavLink>
      <NavLink
        to="/transactions/tracker"
        className="w-1/2 p-2 m-2 text-light text-sm"
      >
        Transactions Tracker{" "}
      </NavLink>
      <NavLink to="/faq" className="w-1/2 p-2 m-2 text-light text-sm">
        FAQ's{" "}
      </NavLink>
    </div>
  );
};

export default Sidebar;
