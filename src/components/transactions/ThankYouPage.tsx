import React, { useState } from "react";
import "./style.css";

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
