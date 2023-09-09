import List from "./List";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./style.css";
import Sidebar from "../Sidebar";
import DoughnutShow from "./DoughnutShow";

const TransactionsTracker = () => {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className=" col-10">
        <div className="tracker">
          <Row className="col-5 doughnut">
            <Col sm="8">
              <DoughnutShow />
            </Col>
          </Row>
          <Row className="col-5 list">
            <Col lg="12">
              <List />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTracker;
