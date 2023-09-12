import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FieldValues, useForm } from "react-hook-form";
import "../style.css";
import axios from "axios";
import { setbudgetApi } from "../../../redux/apis";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";

const SetBudget = () => {
  const [msg, setMsg] = useState("");
  let email = useSelector<AppState, string>((state) => state.user.email);

  const { register, handleSubmit, reset } = useForm();
  const submitHandle = async (data: FieldValues) => {
    const { totalAmount, expenseBudget, investmentBudget } = data;
    if (
      parseInt(expenseBudget) + parseInt(investmentBudget) >
      parseInt(totalAmount)
    ) {
      setMsg("Limit on expense and investment not exceeds total amount ");
    }
    const response = await axios.post(`${setbudgetApi}/${email}`, {
      totalAmount,
      expenseBudget,
      investmentBudget,
    });
    if (response) {
      reset();
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="setBudget row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="setForm col-10 ">
        <div className="set">
          {msg ? <span className="text-danger">{msg}</span> : ""}
          <>
            <Form className="setForm" onSubmit={handleSubmit(submitHandle)}>
              <Form.Group as={Row} controlId="formPlainNumberTotalAmount">
                <Form.Label column sm="4">
                  Total Amount
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...register("totalAmount")}
                    type="number"
                    placeholder="Enter Total Amount"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlainNumberExpenseBudget">
                <Form.Label column sm="4">
                  Expense
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...register("expenseBudget")}
                    type="number"
                    placeholder="Enter Budget on Expense"
                  />
                  <small className="text-danger"></small>
                </Col>
              </Form.Group>
              <Form.Group
                className="mt-2"
                as={Row}
                controlId="formPlainNumberInvestmentBudget"
              >
                <Form.Label column sm="4">
                  Investment
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...register("investmentBudget")}
                    type="number"
                    placeholder="Enter Budget on Investment"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm="6" className="mt-4 ">
                  <Form.Control
                    className="btn btn-success"
                    type="submit"
                    value="Set Budget"
                  />
                </Col>
              </Form.Group>
            </Form>{" "}
          </>
        </div>
      </div>
    </div>
  );
};

export default SetBudget;
