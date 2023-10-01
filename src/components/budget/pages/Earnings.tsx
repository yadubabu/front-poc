import React from "react";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { FaRupeeSign } from "react-icons/fa";
import GetIncomes from "../utils/getIncomes";

const Earnings = () => {
  const totalIncomes = useSelector<AppState, number>(
    (state) => state.account.totalIncomes
  );
  return (
    <div className="row bg-indigo-200">
      <div className="w-1/4 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="w-2/3 bg-white m-4 rounded-xl">
        <div className="flex text-center align-center bg-indigo-200 p-1 m-3 justify-center p-4 font-bold h4 p-2 text-indigo-800  rounded-md text-center ">
          <span>Total Incomes--</span>
          <span className="text-xl mt-2">
            <FaRupeeSign />
          </span>
          <span>{totalIncomes}</span>
        </div>
        <hr />
        <div className="flex-col">{GetIncomes()}</div>
      </div>
    </div>
  );
};

export default Earnings;
