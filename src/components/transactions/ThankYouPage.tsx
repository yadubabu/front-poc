import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  const [key, setKey] = useState("thank");
  return (
    <div className={key}>
      <h3 className="text-dark">Your Transaction added Successfully</h3>
      <button onClick={() => setKey("none")} className="btn btn-primary">
        OK
      </button>
    </div>
  );
};

export default ThankYouPage;
