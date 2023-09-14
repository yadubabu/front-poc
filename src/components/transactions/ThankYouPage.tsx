import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  const [key, setKey] = useState("thank");
  return (
    <div className={key}>
      <h3 className="text-light">Your Transaction added Successfully</h3>
      <div className="d-flex thank-btn">
        <NavLink className="btn btn-light" to="/dashboard">
          Back to Dashboard
        </NavLink>
        <button onClick={() => setKey("none")} className="btn btn-light">
          Make another transaction?
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
