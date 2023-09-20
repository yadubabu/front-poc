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
          <p className="h2 text-light">Start Your </p>
          <p className="title text-warning spacing h1 ">
            FINANCIAL FUTURE PLAN
          </p>
          <p className="text-light content">{budgetContent}</p>
          <a href="/login">
            <Button variant="warning" className="bg-warning text-dark">
              Login
            </Button>{" "}
          </a>
          <a href="/register">
            <Button variant="warning" className="bg-warning text-dark">
              Register
            </Button>{" "}
          </a>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
