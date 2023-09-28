import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";

const Dashboard = () => {
  return (
    <div className="bg-indigo-200 w-100 h-100 overflow-hidden">
      <div className="flex align-center justify-evenly">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <div className="row-3">
            <MainHead />
          </div>
          <div className="row-8">
            <MainFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
