import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FieldValues, useForm, Controller } from "react-hook-form";
import "../style.css";
import axios from "axios";
import { setbudgetApi } from "../../../redux/apis";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { Budget } from "../../../dataTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SetBudget = () => {
  let email = useSelector<AppState, string>((state) => state.user.email);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const total = useSelector<AppState, number>(
    (state) => state.budget.totalBudget
  );

  const submitHandle = async (data: FieldValues) => {
    const { totalBudget, expenseBudget, investmentBudget, savingsBudget } =
      data;
    if (!totalBudget) {
      toast.error("Field not must be an empty", { theme: "dark" });
    } else if (
      parseInt(expenseBudget) +
        parseInt(investmentBudget) +
        parseInt(savingsBudget) >
      100
    ) {
      toast.error("Total percent not more than 100%", { theme: "dark" });
    } else {
      await axios
        .post(`${setbudgetApi}/${email}`, {
          totalBudget,
          expenseBudget: totalBudget * (expenseBudget / 100),
          investmentBudget: totalBudget * (investmentBudget / 100),
          savingsBudget: totalBudget * (savingsBudget / 100),
        })
        .then(() =>
          toast.success("Set Limit Successfully", {
            position: "top-center",
            theme: "light",
          })
        )
        .then(() => navigate("/dashboard"))
        .catch((err) => toast.error(err));
    }
  };

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 ">
        <Sidebar />
      </div>

      <div className="lg:w-3/4 sm:w-3/5 my-4 m-4 p-4 bg-white rounded-xl flex align-center justify-around ">
        <NavLink to="/dashboard" className="lg:hidden sm:flex sm:w-1/12">
          <IoMdArrowRoundBack className="m-1 h-9" />
        </NavLink>
        <Form
          className="flex-col lg:w-2/3 sm:w-2/2"
          onSubmit={handleSubmit(submitHandle)}
        >
          <p className="text-center h3 text-indigo-700 m-1 p-1 font-bold">
            Limit Form
          </p>
          <div className="row m-4 align-center justify-center flex">
            <label className="col-5 m-1 font-bold text-sm">Deposit</label>
            <Controller
              name="totalBudget"
              control={control}
              // defaultValue={total}
              render={({ field }) => (
                <input
                  className="font-bold text-black col-6 border-1 text-xs m-1"
                  type="text"
                  {...field}
                  placeholder={`${total}`}
                />
              )}
            />
          </div>
          <div className="row m-4 align-center justify-center flex">
            <label className="col-5 m-1 font-bold text-sm">
              Limit on Expense
            </label>
            <Controller
              name="expenseBudget"
              control={control}
              defaultValue={50}
              render={({ field }) => (
                <input
                  className="col-6 border-1 text-xs m-1 font-bold"
                  type="text"
                  {...field}
                  placeholder="50"
                />
              )}
            />
            %
          </div>
          <div className="row m-4 align-center justify-center flex">
            <label className="col-5 m-1 font-bold text-sm">
              Limit on Investments
            </label>
            <Controller
              name="investmentBudget"
              control={control}
              defaultValue={30}
              render={({ field }) => (
                <input
                  className="col-6 border-1 text-xs m-1 font-bold"
                  type="text"
                  {...field}
                  placeholder="30"
                />
              )}
            />
            %
          </div>
          <div className="row m-4 align-center justify-center flex">
            <label className="col-5 m-1 font-bold text-sm">
              Limit on Savings
            </label>
            <Controller
              name="savingsBudget"
              control={control}
              defaultValue={20}
              render={({ field }) => (
                <input
                  className="col-6 border-1 text-xs m-1 font-bold"
                  type="text"
                  {...field}
                  placeholder="20"
                />
              )}
            />
            %
          </div>
          <div className="row flex justify-center align-center">
            <input
              className=" p-2 mt-2  bg-indigo-900 w-1/3 text-white rounded-full"
              type="submit"
              value="Set Limit"
            />
          </div>
        </Form>{" "}
      </div>
    </div>
  );
};

export default SetBudget;
