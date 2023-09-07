import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./style.css";
import BalanceCard from "../budget/cards/BalanceCard";
import TotalSavings from "../budget/cards/TotalSavings";
import TotalExpenses from "../budget/cards/TotalExpenses";
import TotalInvestments from "../budget/cards/TotalInvestments";
import TransactionsForm from "../transactions/TransactionsForm";
import TransactionsTracker from "../transactions/TransactionsTracker";

const MainHead = () => {
  return (
    <div className="head m-2">
      <Row className="budgetCards ">
        <Col sm={3}>
          <BalanceCard />
        </Col>
        <Col sm={3}>
          <TotalSavings />
        </Col>
        <Col sm={3}>
          <TotalExpenses />
        </Col>
        <Col sm={3}>
          <TotalInvestments />
        </Col>
      </Row>
    </div>
  );
};
export default MainHead;
