import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { addTransApi } from "../../redux/apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { toast } from "react-toastify";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [msg, setMsg] = useState("");
  const email = useSelector<AppState, string>((state) => state.user.email);
  const submitTrans = async (data: FieldValues) => {
    const { name, type, amount, transDate } = data;
    try {
      const res = await axios.post(`${addTransApi}`, {
        email: email,
        name,
        type,
        amount,
        transDate,
      });
      if (res) {
        toast.success(res.data, {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error(err, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex-col align-center justify-center ">
      <h3 className="m-1 p-1 text-center font-bold text-indigo-700 h5">
        Add Transactions
      </h3>
      <form
        onSubmit={handleSubmit(submitTrans)}
        className="space-y-3 mt-4 m-2 align-center justify-center flex-col"
      >
        <div className="row m-2 p-1 ">
          <label className="w-1/3 font-bold text-xs">Name</label>
          <input
            className="w-2/3 text-xs"
            type="text"
            placeholder="House, Rent, SIP"
            {...register("name")}
          />
        </div>
        <div className="row m-2 p-1">
          <label className="w-1/3 font-bold text-xs">Type</label>
          <select className="w-2/3 text-xs" {...register("type")}>
            <option value="Select categoery">Select</option>
            <option value="income">income</option>
            <option value="investment">investment</option>
            <option value="expense">expense</option>
            <option value="savings">savings</option>
          </select>
        </div>
        <div className="row m-1 p-1">
          <label className="w-1/3 font-bold text-xs ">Amount</label>

          <input
            type="number"
            placeholder="Amount"
            className="w-2/3 text-xs"
            {...register("amount")}
          />
        </div>
        <div className="row m-2 p-1 align-center justify-center">
          <label className="w-1/3 font-bold text-xs">Date</label>
          <input
            type="date"
            {...register("transDate")}
            className="w-2/3 text-xs"
          />
        </div>
        <div className="row align-center justify-center mt-4">
          <input
            className="bg-indigo-700 text-light rounded-xl  m-2 center text-xs p-1 w-auto p-2"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
