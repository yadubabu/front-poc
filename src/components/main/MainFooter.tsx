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
    <div>
      <Row className="w-100 h-100">
        <Col className="w-1/3">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0"></div>
              <div className="p-16">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Category
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Card Title
                </a>
                <p className="mt-2 text-gray-500">
                  Some description or content for the card goes here.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="w-1/3">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {/* <img className="h-48 w-full object-cover md:w-48" src={formImg} alt="Card Image"> */}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Category
                </div>
                <a
                  href="/transactiond/add"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Card Title
                </a>
                <p className="mt-2 text-gray-500">
                  Some description or content for the card goes here.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="w-1/3 h-100 rounded-xl shadow-md">
          <a href="/transactions/tracker">
            {" "}
            <div className="w-100 h-100">
              <div className="h5 p-3 text-center text-indigo-700">
                Transactions Tracker
              </div>
              <div className="w-auto h-auto">
                <DoughnutShow />
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MainFooter;
