import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col className="col-2">
          <Sidebar />
        </Col>
        <Col>
          <Row className="col-12">
            <MainHead />
          </Row>
          <Row className="col-12">
            <MainFooter />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
