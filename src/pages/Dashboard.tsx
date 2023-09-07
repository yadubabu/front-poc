import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MainHead from "../components/main/MainHead";
import MainFooter from "../components/main/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { Auth, User, Budget } from "../dataTypes";
import { userAction } from "../redux/actions/userAction";
import { getBudget } from "../redux/actions/budgetActions";
import { Types } from "../redux/enums/constants";
import axios, { AxiosResponse } from "axios";
import { getAccountApi, getbudgetApi } from "../redux/apis";
import { getAccount } from "../redux/actions/accountAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  let user: any = JSON.parse(sessionStorage.getItem("data") || "{}");

  const fetchAccount = async () => {
    const res: AxiosResponse<any, any> = await axios.get(
      `${getAccountApi}/${user.email}`
    );
    if (res) {
      dispatch(getAccount(res.data));
    }
  };
  const fetchBudget = async () => {
    const res: AxiosResponse<any, any> = await axios.get(
      `${getbudgetApi}/${user.email}`
    );
    if (res) {
      dispatch(getBudget(res.data));
    }
  };
  useEffect(() => {
    fetchBudget();
  }, [user]);
  useEffect(() => {
    fetchAccount();
  }, [user]);
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
