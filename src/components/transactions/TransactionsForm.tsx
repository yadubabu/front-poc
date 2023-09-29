import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import ThankYouPage from "./ThankYouPage";
import "./style.css";
import "../../pages/style.css";
import { FieldValues } from "react-hook-form/dist/types";
import MessageModal from "../MessageModal";

const TransactionsForm = () => {
  const [msg, setMsg] = useState("");
  let user = JSON.parse(sessionStorage.getItem("data") || "{}");
  const { register, handleSubmit, reset } = useForm();

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
      .then((res) => setMsg(res.data))
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  return (
    <div className="row bg-indigo-200">
      {msg === "added successfully" ? (
        <div>
          <MessageModal msg={msg} />
        </div>
      ) : (
        ""
      )}
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 m-4 p-4 bg-white rounded-xl flex align-center justify-evenly ">
        <form onSubmit={handleSubmit(submitTrans)} className="flex-col  ">
          <p className="text-center h3 font-bold text-indigo-700 m-1 p-1">
            Transactions Form
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
