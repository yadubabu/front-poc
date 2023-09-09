import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../redux/actions/userAction";
import { getBudget } from "../redux/actions/budgetActions";
import { getAccount } from "../redux/actions/accountAction";
import { Dispatch } from "redux";
import "./style.css";
import { AppState } from "../redux/store";
import { getTransactions } from "../redux/actions/transactionActions";
import { Trans } from "../dataTypes";
const Sidebar = () => {
  const email = useSelector<AppState, string>((state) => state.user.email);
  const name = useSelector<AppState, string>((state) => state.user.name);
  const trans = useSelector<AppState, Trans[]>(({ trans }) => trans);
  const account = useSelector<AppState>((state) => state.account);
  const auth = useSelector<AppState>((state) => state.auth);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getTransactions(email));
  }, []);
  useEffect(() => {
    dispatch(getAccount(email));
  }, [auth]);
  useEffect(() => {
    dispatch(getBudget(email));
  }, [auth]);
  return (
    <div className="sidebar m-2">
      <h5>
        Welcome!
        <span>{name}</span>
      </h5>
      <Nav className="sideNavs flex-column align-items-center justify-content-center my-5">
        <Nav.Link href="/dashboard">DASH BOARD</Nav.Link>
        <Nav.Link href="/budget/setbudget">Set Budget</Nav.Link>
        <Nav.Link href="/budget/savingsbudget">Total-Savings</Nav.Link>
        <Nav.Link href="/budget/expensebudget">Total-Expenses</Nav.Link>
        <Nav.Link href="/budget/investmentbudget">Total-Investments</Nav.Link>
        <Nav.Link href="/transactions/tracker">Transactions-Tracker</Nav.Link>
        <Nav.Link href="/transactions/add">Add-Transactions</Nav.Link>
        <Nav.Link href="/transactions/edit">Transactions-History</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
