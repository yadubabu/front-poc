import React, { useState } from "react";
import Form from "react-bootstrap/Form";
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
    const { totalBudget, expenseBudget, investmentBudget, savingsBudget } =
      data;
    if (
      parseInt(expenseBudget) +
        parseInt(investmentBudget) +
        parseInt(savingsBudget) >
      parseInt(totalBudget)
    ) {
      setMsg(
        "Limit on savings,expense and investment not exceeds total amount "
      );
    }
    const response = await axios.post(`${setbudgetApi}/${email}`, {
      totalBudget,
      expenseBudget,
      investmentBudget,
      savingsBudget,
    });
    if (response) {
      reset();
      alert("set limits successfully");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="row" style={{ background: "gray" }}>
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-9 m-4">
        {msg ? <span className="text-danger">{msg}</span> : ""}
        <>
          <Form
            className="form"
            id="setTran"
            onSubmit={handleSubmit(submitHandle)}
          >
            <div className="row m-4">
              <label className="col-4 m-1">TotalBudget</label>
              <input
                type="number"
                placeholder="Enetr Total Amount"
                className="col-7 m-1"
                {...register("totalBudget")}
              />
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Expenses</label>
              <input
                type="number"
                placeholder="Set Limit on Expenses"
                className="col-7 m-1"
                {...register("expenseBudget")}
              />
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Investments</label>
              <input
                type="number"
                placeholder="Set Limit on Investments"
                className="col-7 m-1"
                {...register("investmentBudget")}
              />
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Savings</label>
              <input
                type="number"
                placeholder="Set Limit on Savings"
                className="col-7 m-1"
                {...register("savingsBudget")}
              />
            </div>
            <div
              className="row col-3"
              style={{ width: "180px", margin: "0 0 20px -16px" }}
            >
              <input
                className="formBtn btn btn-warning center"
                type="submit"
                value="Set Limit"
              />
            </div>
          </Form>{" "}
        </>
      </div>
    </div>
  );
};

export default SetBudget;
