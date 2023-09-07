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
const MainFooter = () => {
  return (
    <div className="footer">
      <Row>
        <Col sm={4} className="trans">
          <NavLink
            className="text-decoration-none h6"
            to="/dashboard/transactions/add"
          >
            {" "}
            <img src={formImg} alt="" width={200} height={200} />
            <h6 className="mx-3 my-3">Add Your Transactions</h6>
          </NavLink>
        </Col>
        <Col sm={4} className="trans">
          <NavLink
            className="text-decoration-none h6"
            to="/dashboard/transactions/edit"
          >
            <img src={historyImg} alt="" width={200} height={200} />
            <h6 className="mx-4 my-3">Transaction History</h6>
          </NavLink>
        </Col>
        <Col sm={4} className="trans">
          <NavLink
            className="text-decoration-none h6"
            to="/dashboard/transactions/tracker"
          >
            <img src={trackerImg} alt="" width={200} height={200} />
            <h6 className="mx-4 my-3">Transaction Tracker</h6>
          </NavLink>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default MainFooter;
