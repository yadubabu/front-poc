import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";

const Dashboard = () => {
  return (
    <div className="bg-indigo-200 w-100 h-100">
      <div className="row">
        <div className="mx-1 col-2 h-screen rounded-xl bg-indigo-900 p-1 text-indigo-100 m-1">
          <Sidebar />
        </div>
        <div className="col">
          <div className="row-3 h-1/4 w-100 ">
            <MainHead />
          </div>
          <div className="row-9 w-100 h-auto">
            <MainFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
