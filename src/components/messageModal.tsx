import React, { useState } from "react";

type Props = {
  msg: string;
};

const MessageModal = (props: Props) => {
  const [key, setKey] = useState("");

  const showWindow = (msg: string) => {
    if (msg.split(" ")[1] === "Deposited") {
      setKey("hidden");
    }
    if (msg.split(" ")[1] === "Edited") {
      setKey("hidden");
    }
    if (msg.split(" ")[1] === "Deleted") {
      setKey("hidden");
    }
    if (msg.split(" ")[1] === "Login") {
      window.location.href = "/dashboard";
    }
  };
  return (
    <>
      {key === "" && (
        <div
          className={`${key} fixed inset-0 flex items-center justify-center z-50`}
          id="myModal"
        >
          <div className="modal-background absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto ">
            <div className="modal-content py-4 text-left px-6 ">
              <div className="modal-header flex align-center justify-center">
                <h3 className="text-lg font-semibold">&#128512;</h3>
              </div>
              <div className="modal-body flex align-center justify-center p-1 m-1">
                <p className="font-bold">{props.msg}</p>
              </div>
              <div className="modal-footer font-bold flex align-center justify-center mr-20 ml-20 bg-warning rounded-full">
                <button onClick={() => showWindow(props.msg)}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageModal;
