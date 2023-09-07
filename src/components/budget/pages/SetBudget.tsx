import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import "../style.css";
import axios from "axios";
import { setbudgetApi } from "../../../redux/apis";

const Login = () => {
  const [msg, setMsg] = useState("");
  let user: any = JSON.parse(sessionStorage.getItem("data") || "{}");
  console.log(user.email);
  const { register, handleSubmit } = useForm();
  const submitHandle = async (data: any) => {
    const { totalAmount, expenseBudget, investmentBudget } = data;
    if (
      parseInt(expenseBudget) + parseInt(investmentBudget) >
      parseInt(totalAmount)
    ) {
      setMsg("Limit on expense and investment not exceeds total amount ");
    }
    const response = await axios.post(`${setbudgetApi}/${user.email}`, {
      totalAmount,
      expenseBudget,
      investmentBudget,
    });
    if (response) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="mt-3 md-6 login" id="login">
      {msg ? <span className="text-danger">{msg}</span> : ""}
      <>
        <Form
          className="m-5 p-3 loginForm"
          onSubmit={handleSubmit(submitHandle)}
        >
          <Form.Group
            as={Row}
            className="mt-3 m-2"
            controlId="formPlainNumberTotalAmount"
          >
            <Form.Label column sm="3">
              Total Amount
            </Form.Label>
            <Col sm="9">
              <Form.Control
                {...(register("totalAmount") as unknown as Record<
                  any,
                  unknown
                >)}
                type="number"
                placeholder="Enter Total Amount"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mt-3 m-2"
            controlId="formPlainNumberExpenseBudget"
          >
            <Form.Label column sm="3">
              Expense
            </Form.Label>
            <Col sm="9">
              <Form.Control
                {...(register("expenseBudget") as unknown as Record<
                  any,
                  unknown
                >)}
                type="number"
                placeholder="Enter Budget on Expense"
              />
              <small className="text-danger"></small>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mt-3 m-2"
            controlId="formPlainNumberInvestmentBudget"
          >
            <Form.Label column sm="3">
              Investment
            </Form.Label>
            <Col sm="9">
              <Form.Control
                {...(register("investmentBudget") as unknown as Record<
                  any,
                  unknown
                >)}
                type="number"
                placeholder="Enter Budget on Investment"
              />
              <small className="text-danger"></small>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="3" className="setBtn mt-3">
              <Form.Control
                className="btn btn-warning"
                type="submit"
                value="Set Budget"
              />
            </Col>
          </Form.Group>
        </Form>{" "}
      </>
    </div>
  );
};

export default Login;
