import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetExpenses } from "../utils/getData";
import Badge from "react-bootstrap/Badge";

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
        <h4>Allocated Expense Amount:{expense}</h4>
        <ProgressBar className="m-5">
          <ProgressBar animated variant="success" now={totalPart} />
          <ProgressBar animated variant="danger" now={expensePart} />
        </ProgressBar>
        <p>
          <span className="tot text-success">
            Remaining Expense Amount--{expense - totalExpense}
          </span>
          <span className="tot text-danger">
            Spent on Expenses--{totalExpense}
          </span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2 text-center">
            {" "}
            <Badge bg="success">List of Expenses</Badge>
          </p>
          {GetExpenses()}
        </div>
      </div>
    </div>
  );
}

export default ExpenseBudget;
