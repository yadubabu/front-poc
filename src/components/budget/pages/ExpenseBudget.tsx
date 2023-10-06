import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetExpenses } from "../utils/getExpenses";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";

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
      <div className="w-3/4 my-4 m-3 rounded-xl m-4 bg-white">
        <div className="h-1/4 bg-indigo-200 m-3 rounded-xl">
          <div className="flex align-center justify-center p-1">
            <span className="h3 mt-2">
              <FaRupeeSign />
            </span>
            <span className="h2 "> {remainExpenses}</span>
            <Badge className="h-1/2 mt-2 m-2 bg-success">Left</Badge>
          </div>
          <div>
            <div className="ml-5 mr-5">
              <ProgressBar className="h-5 rounded-xl w-100">
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

                
              </ProgressBar>{" "}
            </div>
            <div className="font-bold m-1 mx-4 text-md">
              {totalExpense}
              <span className="text-xs">
                ({Math.round((totalExpense * 100) / expenseBudget)}%)
              </span>{" "}
              of {expenseBudget} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
          <div className="font-bold text-xl p-2 text-indigo-800  rounded-md text-center ">
            Total Expenses
          </div>
          <div>{GetExpenses()}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBudget;
