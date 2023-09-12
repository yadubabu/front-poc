import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addTransApi } from "../../redux/apis";
import Sidebar from "../Sidebar";
import ThankYouPage from "./ThankYouPage";
import "./style.css";
import { FieldValues } from "react-hook-form/dist/types";

const TransactionsForm = () => {
  const [msg, setMsg] = useState("");
  let user = JSON.parse(sessionStorage.getItem("data") || "{}");
  const { register, handleSubmit, reset } = useForm();

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
      .then(() => reset())
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
      <div className="transForm col-6 m-2 p-2">
        <h3>Transactions Form</h3>
        <form id="form" onSubmit={handleSubmit(submitTrans)}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Salary,House,Rent,SIP"
                className="form-control m-2"
                {...register("name")}
              />
            </div>
            <select className="form-control m-2" {...register("type")}>
              <option value="Select categoery">Select</option>
              <option value="investment">Investment</option>
              <option value="expense">Expense</option>
              <option value="savings">Savings</option>
            </select>
            <div>
              <input
                type="number"
                placeholder="Amount"
                className="form-control m-2"
                {...register("amount")}
              />
            </div>
            <div>
              <input
                type="date"
                {...register("transdate")}
                className="form-control m-2"
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
