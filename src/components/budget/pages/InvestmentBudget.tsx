import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetInvestment } from "../utils/getData";
import Badge from "react-bootstrap/Badge";

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
    <div className="row" style={{ background: "grey" }}>
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="investment my-2 col-10 text-center">
        <div className="mt-2 text-secondary">
          <p className=" text-secodary">Allocated amount for Investments</p>
          <span className="h3 text-dark">{investment}</span>
        </div>
        <ProgressBar className="m-5">
          <ProgressBar variant="success" now={totalPart} />
          <ProgressBar variant="danger" now={investmentPart} />
        </ProgressBar>
        <p className="invest">
          <span className="remain text-success">
            Remaining Investment Amount--{investment - totalInvestment}
          </span>
          <span className="spent text-danger">
            Spent on Investment--{totalInvestment}
          </span>
        </p>
        <hr />
        <div className="m-2">
          <p className="m-2 text-center">
            {" "}
            <Badge bg="warning text-dark">List of Investments</Badge>
          </p>{" "}
          {GetInvestment()}
        </div>
      </div>
    </div>
  );
}

export default InvestmentBudget;
