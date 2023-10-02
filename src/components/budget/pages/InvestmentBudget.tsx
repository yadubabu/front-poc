import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetInvestment } from "../utils/getInvestments";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";

const InvestmentBudget = () => {
  const investmentBudget = useSelector<AppState, number>(
    (state) => state.budget.investmentBudget
  );
  const totalInvestment = useSelector<AppState, number>(
    (state) => state.account.totalInvestment
  );

  const remainInvestments = investmentBudget - totalInvestment;

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
            <span className="h2 "> {remainInvestments}</span>
            <Badge className="h-1/2 mt-2 m-2 bg-success">Left</Badge>
          </div>
          <div>
            <div className="ml-5 mr-5">
              <ProgressBar now={(totalInvestment * 100) / investmentBudget} />
            </div>
            <div className="font-bold m-1 mx-4 text-xs">
              {totalInvestment}
              <span className="text-xs">
                ({Math.round((totalInvestment * 100) / investmentBudget)}%)
              </span>{" "}
              of {investmentBudget} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
          <div className="font-bold text-xl p-2 text-indigo-800  rounded-md text-center ">
            Total Investments
          </div>
          <div>{GetInvestment()}</div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentBudget;
