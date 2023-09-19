import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetSavings } from "../utils/getData";
import cashImg from "../../../assets/sold.png";
import Badge from "react-bootstrap/Badge";

function SavingsBudget() {
  const savingsBudget = useSelector<AppState, number>(
    (state) => state.budget.savingsBudget
  );
  const totalSavings = useSelector<AppState, number>(
    (state) => state.account.totalSavings
  );
  const savingsPart: number = (totalSavings * 100) / savingsBudget;
  const totalPart: number = 100 - savingsPart;

  return (
    <div className="row" style={{ background: "grey" }}>
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="savings my-2 col-10 ">
        <div className="save">
          <p className=" text-secodary">Allocated amount for Savings</p>
          <span className="h3 text-dark"> {savingsBudget}</span>
        </div>
        <ProgressBar className="m-3">
          <ProgressBar variant="success" now={totalPart} />
          <ProgressBar variant="primary" now={savingsPart} />
        </ProgressBar>
        <p className="saves">
          <span className="previous text-success">
            Remaining Balance--{savingsBudget - totalSavings}
          </span>
          <span className="saveadd text-primary">
            Spent Savings--{totalSavings}
          </span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2 text-center">
            {" "}
            <Badge bg="warning text-dark">List of Savings</Badge>
          </p>
          {GetSavings()}
        </div>
      </div>
    </div>
  );
}

export default SavingsBudget;
