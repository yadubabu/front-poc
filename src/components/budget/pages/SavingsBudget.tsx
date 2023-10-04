import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetSavings } from "../utils/getSavings";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";

const SavingsBudget = () => {
  const savingsBudget = useSelector<AppState, number>(
    (state) => state.budget.savingsBudget
  );
  const totalSavings = useSelector<AppState, number>(
    (state) => state.account.totalSavings
  );

  const remainSavings = savingsBudget - totalSavings;
  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5 hidden lg:flex">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-4 rounded-xl bg-white">
        <div className="h-1/4 bg-indigo-200 m-3 rounded-xl">
          <div className="flex align-center justify-center p-1">
            <span className="h3 mt-2">
              <FaRupeeSign />
            </span>
            <span className="h2 "> {remainSavings}</span>
            <Badge className="h-1/2 mt-2 m-2 bg-success">Left</Badge>
          </div>
          <div>
            <div className="ml-3 mr-3">
              <ProgressBar className="h-6 rounded-xl w-100">
                <ProgressBar
                  className="bg-danger"
                  now={(totalSavings * 100) / savingsBudget}
                  label="Spent"
                  key={1}
                />
                <ProgressBar
                  className="bg-success"
                  now={100 - (totalSavings * 100) / savingsBudget - 5}
                  label="Left"
                  key={2}
                />

                <ProgressBar
                  className="bg-warning relative"
                  now={5}
                  label="minimum"
                  key={3}
                  color="black"
                />
              </ProgressBar>
            </div>
            <div className="font-bold m-1 mx-4 text-xs">
              {totalSavings}
              <span className="text-2xs">
                ({Math.round((totalSavings * 100) / savingsBudget)}%)
              </span>{" "}
              of {savingsBudget} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
          <div className="font-bold p-2 text-indigo-800  rounded-md text-center text-xl">
            Total Savings
          </div>
          <div>{GetSavings()}</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsBudget;
