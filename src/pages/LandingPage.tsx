import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { budgetContent } from "../data/content";
import "./style.css";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  return (
    <div className="land">
      {!auth && (
        <div className="landModal">
          <p className="h2 text-light text-4xl">Start Your </p>
          <p className="md:text-3xl sm:text-2xl title text-warning lg:text-5xl font-bold spacing h1 ">
            FINANCIAL FUTURE PLAN
          </p>
          <p className="text-white content">{budgetContent}</p>
          <NavLink to="/login">
            <Button
              className=" text-light hover:bg-yellow-500"
              variant="warning"
            >
              Login
            </Button>{" "}
          </NavLink>
          <NavLink to="/register">
            <Button
              className="text-light hover:bg-yellow-500 "
              variant="warning"
            >
              Register
            </Button>{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
