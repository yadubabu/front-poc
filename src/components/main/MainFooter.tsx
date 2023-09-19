import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import TransactionsForm from "../transactions/TransactionsForm";
import TransactionsHistory from "../transactions/TransactionsHistory";
import TransactionsTracker from "../transactions/TransactionsTracker";
import formImg from "../../assets/form.jpg";
import historyImg from "../../assets/history.jpg";
import trackerImg from "../../assets/tracker.jpg";
import { NavLink } from "react-router-dom";
import Card from "../transactions/shared/Card";
import DoughnutShow from "../transactions/DoughnutShow";

const MainFooter = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm={4} className="trans">
          {" "}
          <h5>
            <Card title="Add Transactions" color="gray" val="add" />
          </h5>
        </Col>
        <Col sm={4} className="trans">
          {" "}
          <h5>
            <Card title="Transactions History" color="gray" val="edit" />
          </h5>
        </Col>
        <Col sm={4} className="trans">
          <h5>
            <Card title="Transactions Tracker" color="gray" val="tracker" />
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default MainFooter;
