import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { User } from "../../dataTypes";
import { getTransApi, addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import ThankYouPage from "./ThankYouPage";
import { Trans } from "../../dataTypes";
import "./style.css";
import { FieldValues } from "react-hook-form/dist/types";

const TransactionsForm = () => {
  const [msg, setMsg] = useState("");
  let user: any = JSON.parse(sessionStorage.getItem("data") || "{}");
  const { register, handleSubmit } = useForm();

  const submitTrans = async (data: FieldValues) => {
    const { name, type, amount, transdate } = data;
    await axios
      .post(`${addTransApi}`, {
        email: user.email,
        name,
        type,
        amount,
        transdate,
      })
      .then((res) => setMsg(res.data))

      .catch((err) => console.log(err));
  };

  return (
    <div className="formTrans row">
      {msg === "added successfully" ? (
        <>
          <ThankYouPage />
        </>
      ) : (
        ""
      )}
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        <h3>Transactions</h3>
        <form id="form" onSubmit={handleSubmit(submitTrans)}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Salary,House,Rent,SIP"
                className="form-control m-1"
                {...(register("name") as unknown as Record<any, unknown>)}
              />
            </div>
            <select
              className="form-control m-1"
              {...(register("type") as unknown as Record<any, unknown>)}
            >
              <option value="Select categoery">Select</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
            <div className="input-group">
              <input
                type="number"
                placeholder="Amount"
                className="form-control m-1"
                {...(register("amount") as unknown as Record<any, unknown>)}
              />
            </div>
            <div>
              <input
                type="date"
                {...(register("transdate") as unknown as Record<any, unknown>)}
                className="form-control m-1"
              />
            </div>

            <div className="btn btn-sm d-flex">
              <button className="btn btn-success m-1">Make Transaction</button>
              {/* <button className="btn btn-primary" onClick={goHistory}>History</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionsForm;
