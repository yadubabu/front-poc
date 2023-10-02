import List from "./List";
import "./style.css";
import Sidebar from "../Sidebar";
import DoughnutShow from "./DoughnutShow";

const TransactionsTracker = () => {
  return (
    <div className="row bg-indigo-200">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-3/4 my-4 m-3 bg-white rounded-xl flex align-center justify-center text-center ">
        <div className="col-4 py-5">
          <DoughnutShow />
        </div>
        <div className="col-4 py-5">
          <List />
        </div>
      </div>
    </div>
  );
};

export default TransactionsTracker;
