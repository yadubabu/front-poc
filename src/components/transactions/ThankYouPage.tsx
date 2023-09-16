import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  const [key, setKey] = useState("thank");
  return (
    <div className={key}>
      <h5 className="text-success">Your Transaction added Successfully</h5>
      <div className="d-flex thank-btn mt-2 ">
        <NavLink className="btn m-1" to="/dashboard">
          Back to Dashboard
        </NavLink>
        <button onClick={() => setKey("none")} className="btn">
          Make another transaction?
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
