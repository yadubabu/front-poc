import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./style.css";
import BalanceCard from "../budget/cards/TotalIncomes";
import TotalSavings from "../budget/cards/TotalSavings";
import TotalExpenses from "../budget/cards/TotalExpenses";
import TotalInvestments from "../budget/cards/TotalInvestments";
import TotalIncomes from "../budget/cards/TotalIncomes";

const MainHead = () => {
  return (
    <div className="m-4 bg-white rounded-xl justify-content-evenly align-items-center flex">
      <Row>
        <Col sm={3}>
          <TotalIncomes />
        </Col>
        <Col sm={3}>
          <TotalExpenses />
        </Col>
        <Col sm={3}>
          <TotalInvestments />
        </Col>
        <Col sm={3}>
          <TotalSavings />
        </Col>
      </Row>
    </div>
  );
};
export default MainHead;
