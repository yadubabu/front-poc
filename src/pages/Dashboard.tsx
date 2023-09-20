import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";

const Dashboard = () => {
  return (
    <div className="bg-gray-400 w-auto h-screen">
      <div className="row">
        <Col className="col-2 bg-black m-2 h-screen mx-4">
          <Sidebar />
        </Col>
        <Col className="col-9">
          <Row className="col-12 bg-white w-100  m-2.5 h-auto">
            <MainHead />
          </Row>
          <Row className="col-12 bg-white w-100 m-2.5 h-auto">
            <MainFooter />
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
