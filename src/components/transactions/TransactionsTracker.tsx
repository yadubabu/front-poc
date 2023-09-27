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
      <div className="col-4">
        <DoughnutShow />
      </div>
      <div className="col-4">
        <List />
      </div>
    </div>
  );
};

export default TransactionsTracker;
