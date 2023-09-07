import React from "react";
import { useSelector } from "react-redux";
import { User } from "../dataTypes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Auth } from "../dataTypes";

import "./style.css";

const Sidebar = () => {
  const user = useSelector<User>((state) => state);

  return (
    <div className="sidebar m-2">
      <h5>
        Welcome!
        {/* {user.name} */}
      </h5>
      <Nav className="sideNavs flex-column align-items-center justify-content-center my-5">
        <Nav.Link href="/dashboard/budget/setbudget">Set Budget</Nav.Link>
        <Nav.Link href="/dashboard/budget/savingsbudget">
          Total-Savings
        </Nav.Link>
        <Nav.Link href="/dashboard/budget/expensebudget">
          Total-Expenses
        </Nav.Link>
        <Nav.Link href="/dashboard/budget/investmentbudget">
          Total-Investments
        </Nav.Link>
        <Nav.Link href="/dashboard/transactions/tracker">
          Transactions-Tracker
        </Nav.Link>
        <Nav.Link href="/dashboard/transactions/add">Add-Transactions</Nav.Link>
        <Nav.Link href="/dashboard/transactions/edit">
          Transactions-History
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
