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
import Form from "../transactions/Form";
import List from "../transactions/List";

const MainFooter = () => {
  return (
    <div className="  bg-white rounded-xl justify-content-around lg:flex m-6 sm-flex-col sm:mr-15">
      <div className="lg:w-1/3 bg-indigo-100 m-2 h-65 rounded-xl p-3">
        <Form />
      </div>
      <div className="lg:w-1/3 bg-indigo-100 m-2 rounded-xl p-3 md:flex-col">
        <div>
          <DoughnutShow />
        </div>
        <div className="hidden">
          <List />
        </div>
      </div>
      <div className=" bg-indigo-100 m-2 rounded-xl p-3 lg:w-1/3">
        <Entries />
      </div>
    </div>
  );
};

export default MainFooter;
