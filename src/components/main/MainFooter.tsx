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
import Entries from "../transactions/Entreis";

const MainFooter = () => {
  return (
    <div className="bg-white rounded-xl m-1 justify-content-around p-1 flex">
      <div className="w-1/3 p-3 m-3 h-80 rounded-xl bg-indigo-100">
        Add
        {/* <TransactionsForm /> */}
      </div>
      <div className="w-60 p-3 m-3 h-80 rounded-xl bg-indigo-100">
        <DoughnutShow />
      </div>
      <div className="w-1/4 p-3 m-3 h-80 rounded-xl bg-indigo-100">
        <Entries />
      </div>
    </div>
  );
};

export default MainFooter;
