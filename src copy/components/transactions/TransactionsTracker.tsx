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
      <div className=" col-12">
        <div className="tracker row">
          <div className="col-4">
            <DoughnutShow />
          </div>
          <div className="col-4">
            <List />
          </div>
          {/* <Row className="col-5 ">
            <Col sm="8">
              <DoughnutShow />
            </Col>
          </Row>
          <Row className="col-5 ">
            <Col lg="12">
              <List />
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
};

export default TransactionsTracker;
