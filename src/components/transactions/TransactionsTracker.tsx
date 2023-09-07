import React from "react";
import List from "./List";
import DoughnutShow from "./DoughnutShow";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./style.css";

const TransactionsTracker = () => {
  return (
    <div className="tracker">
      <Row className="doughnut">
        <Col lg="12">
          <DoughnutShow />
        </Col>
      </Row>
      <Row className="list">
        <Col lg="12">
          <List />
        </Col>
      </Row>
    </div>
  );
};

export default TransactionsTracker;
