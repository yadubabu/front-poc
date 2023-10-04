import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import "./style.css";
import "../../pages/style.css";
import { FieldValues } from "react-hook-form/dist/types";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Budget, Account } from "../../dataTypes";

const TransactionsForm = () => {
  let user = JSON.parse(sessionStorage.getItem("data") || "{}");
  const { register, handleSubmit, reset } = useForm();
  const budget = useSelector<AppState, Budget>((state) => state.budget);
  const account = useSelector<AppState, Account>((state) => state.account);

  const submitTrans = async (data: FieldValues) => {
    const { name, type, amount, transDate } = data;
    await axios
      .post(`${addTransApi}`, {
        email: user.email,
        name,
        type,
        amount,
        transDate,
      })
      .then((res) =>
        toast(res.data, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "success",
        })
      )
      .then(() => reset())
      .catch((err) => toast.error(err));
  };

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-4 bg-white rounded-xl flex align-center justify-evenly ">
        <form onSubmit={handleSubmit(submitTrans)} className="flex-col  ">
          <p className="text-center h3 font-bold text-indigo-700 m-1 p-1">
            Transaction Form
          </p>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Name</label>
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="col-6 m-1 text-xs border-1 "
              {...register("name")}
            />
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Type</label>
            <select className="col-6 m-1 border-1" {...register("type")}>
              <option value="Select categoery">Select</option>
              <option value="income">Income</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Amount</label>

            <input
              type="number"
              placeholder="Amount"
              className="col-6 m-1 border-1"
              {...register("amount")}
            />
          </div>
          <div className="row m-4 align-center justify-center">
            <label className="col-3 m-1 p-1 font-bold text-sm">Date</label>

            <input
              type="date"
              {...register("transDate")}
              className="col-6 m-1 border-1"
            />
          </div>
          <div className="row flex justify-center align-center">
            <input
              className=" p-2 mt-2  bg-indigo-900 w-auto text-white rounded-full "
              type="submit"
              value="Make Transaction"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionsForm;
