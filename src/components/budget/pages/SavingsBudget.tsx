import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetSavings } from "../utils/getData";
import cashImg from "../../../assets/sold.png";
import Badge from "react-bootstrap/Badge";

function SavingsBudget() {
  const total = useSelector<AppState, number>(
    (state) => state.budget.totalAmount
  );
  const totalSavings = useSelector<AppState, number>(
    (state) => state.account.totalSavings
  );
  const savingsPart: number = (totalSavings * 100) / total;
  const totalPart: number = 100 - savingsPart;

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="savings my-2 col-10 ">
        <div className="d-flex align-items-center cash">
          <h4>Cash in Hand</h4>
          <img src={cashImg} alt="" width={35} height={35} />
          <span className="h1 text-light"> {total}</span>
        </div>
        <ProgressBar className="m-5">
          <ProgressBar animated variant="success" now={totalPart} />
          <ProgressBar animated variant="primary" now={savingsPart} />
        </ProgressBar>
        <p>
          <span className="tot">Previous Balance--{total - totalSavings}</span>
          <span className="tot">Total Savings--{totalSavings}</span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2 text-center">
            {" "}
            <Badge bg="success">List of Savings</Badge>
          </p>
          {GetSavings()}
        </div>
      </div>
    </div>
  );
}

export default SavingsBudget;
