import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetExpenses } from "../utils/getExpenses";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";

const ExpenseBudget = () => {
  const expenseBudget = useSelector<AppState, number>(
    (state) => state.budget.investmentBudget
  );
  const totalExpense = useSelector<AppState, number>(
    (state) => state.account.totalExpense
  );

  const remainExpenses = expenseBudget - totalExpense;

  return (
    <div className="row bg-indigo-200">
      <div className="w-1/4 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="w-2/3 rounded-xl m-4 bg-white">
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
              <ProgressBar now={(totalExpense * 100) / expenseBudget} />
            </div>
            <div className="font-bold m-1 mx-4 text-xs">
              {totalExpense}
              <span className="text-xs">
                ({(totalExpense * 100) / expenseBudget}%)
              </span>{" "}
              of {expenseBudget} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
          <div className="font-bold p-2 text-indigo-800  rounded-md text-center ">
            Total Expenses
          </div>
          <div>{GetExpenses()}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBudget;
