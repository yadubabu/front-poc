import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import Home from "./Home";
const Logout = () => {
  useEffect(() => {
    sessionStorage.removeItem("data");
  }, []);
  return <div>{(window.location.href = "/")}</div>;
};

export default Logout;
