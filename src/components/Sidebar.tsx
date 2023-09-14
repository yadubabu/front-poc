import React, { useEffect } from "react";
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

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(transactionService(email));
  }, [auth, trans]);
  useEffect(() => {
    dispatch(accountService(email));
  }, [auth]);
  useEffect(() => {
    dispatch(budgetService(email));
  }, [auth]);
  return (
    <div className="sidebar m-2">
      <h6 className="text-center">Welcome!</h6>
      <p className="text-light text-center">{name}</p>
      <Nav className="sideNavs flex-column align-items-center ">
        <Nav.Link className="text-success p-2 m-2" href="/budget/setbudget">
          Set Budget
        </Nav.Link>
        <Nav.Link className="text-success p-2 m-2" href="/budget/savingsbudget">
          Total-Savings
        </Nav.Link>
        <Nav.Link className="text-success p-2 m-2" href="/budget/expensebudget">
          Total-Expenses
        </Nav.Link>
        <Nav.Link
          className="text-success p-2 m-2"
          href="/budget/investmentbudget"
        >
          Total-Investments
        </Nav.Link>
        <Nav.Link className="text-success p-2 m-2" href="/transactions/add">
          Add-Transactions
        </Nav.Link>
        <Nav.Link className="text-success p-2 m-2" href="/transactions/tracker">
          Transactions-Tracker
        </Nav.Link>

        <Nav.Link className="text-success p-2 m-2" href="/transactions/edit">
          Transactions-History
        </Nav.Link>
        <Nav.Link className="text-success p-2 m-2" href="/transactions/edit">
          FAQ's
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
