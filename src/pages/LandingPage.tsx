import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { budgetContent } from "../data/content";
import "./style.css";
import homeImg from "../assets/home1.jpg";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";

const LandingPage = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  return (
    <div className="land">
      {!auth && (
        <div className="landModal">
          <p className="h2 text-indigo-100">Start Your </p>
          <p className="title text-warning text-5xl font-bold spacing h1 ">
            FINANCIAL FUTURE PLAN
          </p>
          <p className="text-light content">{budgetContent}</p>
          <a href="/login">
            <Button className=" text-light" variant="warning">
              Login
            </Button>{" "}
          </a>
          <a href="/register">
            <Button className="text-light" variant="warning">
              Register
            </Button>{" "}
          </a>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
