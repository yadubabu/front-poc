import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    sessionStorage.removeItem("data");
  }, []);
  return <div>{(window.location.href = "/")}</div>;
};

export default Logout;
