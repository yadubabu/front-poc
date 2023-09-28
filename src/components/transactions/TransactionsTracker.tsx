import List from "./List";
import "./style.css";
import Sidebar from "../Sidebar";
import DoughnutShow from "./DoughnutShow";

const TransactionsTracker = () => {
  return (
    <div className="row bg-indigo-200">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-8 m-4 p-4 bg-white rounded-xl flex align-center justify-evenly">
        <div className="col-4 my-5">
          <DoughnutShow />
        </div>
        <div className="col-4 my-5">
          <List />
        </div>
      </div>
    </div>
  );
};

export default TransactionsTracker;
