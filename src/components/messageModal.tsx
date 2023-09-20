import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type Props = {
  msg: string;
};

const MessageModal = (props: Props) => {
  const [key, setKey] = useState(
    props.msg.split(" ")[1] === "Login"
      ? "dashboard"
      : "login" || props.msg.split(" ")[1] === "Edited"
      ? "transactions/edit"
      : "" || props.msg.split(" ")[1] === "Deleted"
      ? "transactions/edit"
      : ""
  );
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "absolute",
        marginLeft: "30px",
        top: "174px",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="h3 text-center text-success">{props.msg}</p>
        </Modal.Body>

        <Button
          variant="warning"
          className="formBtn mb-20  text-sm bg-warning text-dark uppercase h-8 rounded-full"
          onClick={() => {
            window.location.href = `/${key}`;
          }}
        >
          OK
        </Button>
      </Modal.Dialog>
    </div>
  );
};

export default MessageModal;
