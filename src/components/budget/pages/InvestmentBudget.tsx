import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetInvestment } from "../utils/getData";

function InvestmentBudget() {
  const investment = useSelector<AppState, number>(
    (state) => state.budget.investmentBudget
  );
  const totalInvestment = useSelector<AppState, number>(
    (state) => state.account.totalInvestment
  );
  const investmentPart: number = (totalInvestment * 100) / investment;
  const totalPart: number = 100 - investmentPart;

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="investment my-2 col-10">
        <h4>Limit on Investments:{investment}</h4>
        <ProgressBar className="m-5">
          <ProgressBar animated variant="success" now={totalPart} />
          <ProgressBar animated variant="danger" now={investmentPart} />
        </ProgressBar>
        <p>
          <span className="tot">Remaining Investment Amount</span>
          <span className="tot">Spent on Investment</span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2">List of Investments</p>
          {GetInvestment()}
        </div>
      </div>
    </div>
  );
}

export default InvestmentBudget;
