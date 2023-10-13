import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetExpenses } from "../utils/getExpenses";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io';


const ExpenseBudget = () => {
  const totalExpense = useSelector<AppState, number>(
    ({ account }) => account.totalExpense
  );
  const expenseBudget = useSelector<AppState, number>(
    (state) => state.budget.expenseBudget
  );

  const remainExpenses = expenseBudget - totalExpense;

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-3 rounded-xl m-3 bg-white lg:m-2">
        <div className="h-1/4 bg-indigo-200 m-3 rounded-xl">
          <div className="flex align-center justify-center lg:p-3 sm:text-xs lg:text-xl">
          <span className="sm:pr-20 lg:hidden sm:flex sm:w-1/8 sm:mt-1"><NavLink to='/dashboard' className=''><IoMdArrowRoundBack className="m-1"/></NavLink></span>

            <span className="h3 mt-2">
              <FaRupeeSign />
            </span>
            <span className="h2 "> {Math.round(remainExpenses)}</span>
            <Badge className="h-1/2 mt-2 m-2 bg-success">Left</Badge>
          </div>
          <div>
            <div className="m-2 p-1">
              <ProgressBar className="lg:h-5 sm:h-4 rounded-xl w-100">
                <ProgressBar
                  className="bg-danger"
                  now={(totalExpense * 100) / expenseBudget}
                  label="Spent"
                  key={1}
                />
                <ProgressBar
                  className="bg-success"
                  now={100 - (totalExpense * 100) / expenseBudget }
                  label="Left"
                  key={2}
                />
                {/* <ProgressBar
                  className="bg-warning text-xs"
                  now={5}
                  label="Break"
                  key={3}
                /> */}
              </ProgressBar>{" "}
            </div>
            <div className="font-bold m-1 mx-4 lg:text-md sm:text-sm">
              {totalExpense}
              <span className="text-xs">
                ({Math.round((totalExpense * 100) / expenseBudget)}%)
              </span>{" "}
              of {Math.round(expenseBudget)} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
          <div className="font-bold text-2xl p-2 text-indigo-800  rounded-md text-center ">
            Total Expenses
          </div>
          <div>{GetExpenses()}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBudget;
