import List from "./List";
import "./style.css";
import Sidebar from "../Sidebar";
import DoughnutShow from "./DoughnutShow";

const TransactionsTracker = () => {
  return (
    <div className="row transTrack" style={{ background: "gray" }}>
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="track col-10">
        <div className=" row">
          <div className="col-5 m-3 mb-5">
            <DoughnutShow />
          </div>
          <div className="list col-4 m-5">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTracker;
