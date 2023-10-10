import React from "react";
import Sidebar from "../../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import { FaRupeeSign } from "react-icons/fa";
import GetIncomes from "../utils/getIncomes";
import { NavLink } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io';


const Earnings = () => {
  const totalIncomes = useSelector<AppState, number>(
    (state) => state.account.totalIncomes
  );
  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="lg:w-3/4 sm:w-5/6 lg:my-4 sm:mx-4  lg:mx-2 sm:mx-3 m-4 bg-white rounded-xl">
        <div className="flex sm:text-sm sm:m-3 lg:text-xl align-center bg-indigo-200 lg:m-4 justify-center p-4 font-bold h4 text-indigo-800  rounded-md text-center ">
        <span className="sm:pr-20 lg:hidden sm:flex sm:w-1/9 pl-5"><NavLink to='/dashboard' className=''><IoMdArrowRoundBack className="m-1"/></NavLink></span>
          <span className="lg:text-2xl lg:text-center">Total Incomes--</span>
          <span className="lg:text-xl mt-2 sm:text-xs ">
            <FaRupeeSign />
          </span>
          <span className="lg:text-2xl">{totalIncomes}</span>
        </div>
        <hr />
        <div className="bg-indigo-200 m-3 rounded-xl flex-col">{GetIncomes()}</div>
      </div>
    </div>
  );
};

export default Earnings;
