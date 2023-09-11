import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetExpenses } from "../utils/getData";

function ExpenseBudget() {
  const expense = useSelector<AppState, number>(
    (state) => state.budget.expenseBudget
  );
  const totalExpense = useSelector<AppState, number>(
    (state) => state.account.totalExpense
  );
  const expensePart: number = (totalExpense * 100) / expense;
  const totalPart: number = 100 - expensePart;

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="expense my-2 col-10">
        <h4>Total Amount for spent:{expense}</h4>
        <ProgressBar className="m-5">
          <ProgressBar animated variant="success" now={totalPart} />
          <ProgressBar animated variant="danger" now={expensePart} />
        </ProgressBar>
        <p>
          <span className="tot">Remaining Expense Amount</span>
          <span className="tot">Spent on Expenses</span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2">List of Expenses</p>
          {GetExpenses()}
        </div>
      </div>
    </div>
  );
}

export default ExpenseBudget;
