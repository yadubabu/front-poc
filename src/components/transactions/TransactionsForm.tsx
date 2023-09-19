import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import ThankYouPage from "./ThankYouPage";
import "./style.css";
import "../../pages/style.css";
import { FieldValues } from "react-hook-form/dist/types";

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
    <div className=" row " style={{ background: "grey" }}>
      {msg === "added successfully" ? (
        <div>
          <ThankYouPage />
        </div>
      ) : (
        ""
      )}
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-9 m-2 p-2">
        <form className="form" id="tran" onSubmit={handleSubmit(submitTrans)}>
          <h3 className="text-center ">Transactions Form</h3>
          <div className="row m-4">
            <label className="col-3 m-1">Name</label>
            <input
              type="text"
              placeholder="Salary,House,Rent,SIP"
              className="col-8 m-1"
              {...register("name")}
            />
          </div>
          <div className="row m-4">
            <label className="col-3 m-1">Type</label>
            <select className="col-8 m-1" {...register("type")}>
              <option value="Select categoery">Select</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div className="row m-4">
            <label className="col-3 m-1">Amount</label>

            <input
              type="number"
              placeholder="Amount"
              className="col-8 m-1"
              {...register("amount")}
            />
          </div>
          <div className="row m-4">
            <label className="col-3 m-1">Date</label>

            <input
              type="date"
              {...register("transDate")}
              className="col-8 m-1"
            />
          </div>
          <div
            className="row "
            style={{ width: "180px", margin: "0 0 20px -75px" }}
          >
            <input
              className="formBtn btn btn-warning center"
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
