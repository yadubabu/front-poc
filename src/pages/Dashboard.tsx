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
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col>
          <Row sm={10}>
            <MainHead />
          </Row>
          <Row sm={10}>
            <MainFooter />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
