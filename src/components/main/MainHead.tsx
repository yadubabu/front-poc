import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./style.css";
import BalanceCard from "../budget/cards/BalanceCard";
import TotalSavings from "../budget/cards/TotalSavings";
import TotalExpenses from "../budget/cards/TotalExpenses";
import TotalInvestments from "../budget/cards/TotalInvestments";

const MainHead = () => {
  return (
    <div className="bg-white rounded-xl m-1 justify-content-around p-1 flex">
      <Row>
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
