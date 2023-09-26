import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";

const Dashboard = () => {
  return (
    <div className="bg-indigo-200 w-100 h-100">
      <div className="row">
        <div className="col-2 m-3 p-1 bg-indigo-900 rounded-xl">
          <Sidebar />
        </div>
        <div className="col-9 m-2 p-1">
          <div className="row-2 h-1/4 w-100 ">
            <MainHead />
          </div>
          <div className="row-9 w-100 h-3/4">
            <MainFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
