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
    } else {
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
    }
  };

  return (
    <div className="row bg-indigo-200">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 m-4 p-4 bg-white rounded-xl flex align-center justify-evenly">
        {msg ? <span className="text-danger">{msg}</span> : ""}
        <>
          <Form className="flex-col" onSubmit={handleSubmit(submitHandle)}>
            <p className="text-center h3 text-indigo-700 m-1 p-1 font-bold">
              Limit Form
            </p>
            <div className="row m-4 align-center justify-center flex">
              <label className="col-5 m-1 font-bold text-sm">TotalBudget</label>
              <input
                type="number"
                placeholder="Enter Total Amount"
                className="col-6 border-1 text-xs m-1"
                {...register("totalBudget")}
              />
            </div>
            <div className="row m-4 align-center justify-center flex">
              <label className="col-5 m-1 font-bold text-sm">Expenses</label>
              <input
                type="number"
                placeholder="Set Limit on Expenses"
                className="col-6 border-1 text-xs m-1"
                {...register("expenseBudget")}
              />
            </div>
            <div className="row m-4 align-center justify-center flex">
              <label className="col-5 m-1 font-bold text-sm">Investments</label>
              <input
                type="number"
                placeholder="Set Limit on Investments"
                className="col-6 border-1 text-xs m-1"
                {...register("investmentBudget")}
              />
            </div>
            <div className="row m-4 align-center justify-center flex">
              <label className="col-5 m-1 font-bold text-sm">Savings</label>
              <input
                type="number"
                placeholder="Set Limit on Savings"
                className="col-6 border-1 text-xs m-1"
                {...register("savingsBudget")}
              />
            </div>
            <div className="row flex justify-center align-center">
              <input
                className=" p-2 mt-2  bg-indigo-900 w-1/3 text-white rounded-full"
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
