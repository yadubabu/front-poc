import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FieldValues, useForm } from "react-hook-form";
import "../style.css";
import axios from "axios";
import { setbudgetApi } from "../../../redux/apis";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { Budget } from "../../../dataTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SetBudget = () => {
  const [msg, setMsg] = useState("");
  let email = useSelector<AppState, string>((state) => state.user.email);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const budget = useSelector<AppState, Budget>((state) => state.budget);
  const submitHandle = async (data: FieldValues) => {
    const { totalBudget } = data;

    await axios
      .post(`${setbudgetApi}/${email}`, {
        totalBudget,
        expenseBudget: totalBudget * 0.5,
        investmentBudget: totalBudget * 0.3,
        savingsBudget: totalBudget * 0.2,
      })
      .then(() =>
        toast("Successfully Deposited", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
        })
      )
      .then(() => reset())
      .then(() => navigate("/dashboard"))
      .catch((err) => toast.error(err));
  };

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-4 p-4 bg-white rounded-xl flex align-center justify-around h-1/2">
        <>
          <Form className="flex-col" onSubmit={handleSubmit(submitHandle)}>
            <p className="text-center h3 text-indigo-700 m-1 p-1 font-bold">
              Deposit Form
            </p>
            <div className="row m-4 align-center justify-center flex">
              <label className="col-5 m-1 font-bold text-sm">
                Opening Deposit
              </label>
              <input
                type="number"
                placeholder={`${budget.totalBudget}`}
                className="col-6 border-1 text-xs m-1 font-bold"
                {...register("totalBudget")}
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
