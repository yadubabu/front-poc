import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Sidebar from "../../Sidebar";
import "../style.css";
import { GetSavings } from "../utils/getSavings";
import Badge from "react-bootstrap/Badge";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

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
      <div className="w-3/4 my-4 m-3 rounded-xl m-3 bg-white lg:m-2">
        <div className="h-1/4 bg-indigo-200 m-3 rounded-xl">
          <div className="flex align-center justify-center lg:p-3 sm:text-xs lg:text-xl">
          <span className="sm:pr-20 lg:hidden sm:flex sm:w-1/8 sm:mt-1"><NavLink to='/dashboard' className=''><IoMdArrowRoundBack className="m-1"/></NavLink></span>

            <span className="h3 mt-2">
              <FaRupeeSign />
            </span>
            <span className="h2 "> {Math.round(remainSavings)}</span>
            <Badge className="h-1/2 mt-2 m-2 bg-success">Left</Badge>
          </div>
          <div>
            <div className="m-2 p-1">
              <ProgressBar className="lg:h-5 sm:h-4 rounded-xl w-100">
                <ProgressBar
                  className="bg-danger"
                  now={(totalSavings * 100) / savingsBudget}
                  label="Spent"
                  key={1}
                />
                <ProgressBar
                  className="bg-success"
                  now={95 - (totalSavings * 100) / savingsBudget }
                  label="Left"
                  key={2}
                />
                <ProgressBar
                  className="bg-warning text-xs"
                  now={5}
                  label="Break"
                  key={3}
                />
              </ProgressBar>{" "}
            </div>
            <div className="font-bold m-1 mx-4 lg:text-md sm:text-sm">
              {totalSavings}
              <span className="text-xs">
                ({Math.round((totalSavings * 100) / savingsBudget)}%)
              </span>{" "}
              of {Math.round(savingsBudget)} Spent
            </div>
          </div>
        </div>
        <div className="h-4/6 bg-indigo-200 m-3 rounded-xl flex-col">
        <div className="font-bold text-2xl p-2 text-indigo-800  rounded-md text-center ">
            Total Savings
          </div>
          <div>{GetSavings()}</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsBudget;
