import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { registerApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import logImg from "../assets/home1.jpg";
import "./style.css";
const Register = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const submitHandle = async (data: FieldValues) => {
    const { name, email, password, confirmpassword, pancard, phone } = data;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      pancard === "" ||
      phone === ""
    ) {
      setMsg("All fields are mandatory");
    } else if (password.length < 6 || password.length > 10) {
      setMsg("Password should be 6 characters");
    } else if (password !== confirmpassword) {
      setMsg("password and confirmPassword should be equal");
    }
    const response = await axios.post(`${registerApi}`, {
      name,
      email,
      password,
      confirmpassword,
      pancard,
      phone,
    });
    if (response) {
      setMsg("Successfully Registered");
      reset();
    }
  };

  return (
    <>
      <div className="logImg">
        <img src={logImg} alt="" />
      </div>
      <div className="register">
        {msg === "Successfully Registered" ? (
          <>
            {setTimeout(() => {
              window.location.href = "/login";
            }, 500)}
          </>
        ) : (
          ""
        )}
        {!auth && (
          <>
            <Form className="p-4" onSubmit={handleSubmit(submitHandle)}>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="4">
                  Name
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("name") as unknown as Record<any, unknown>)}
                    type="text"
                    placeholder="Enter your name"
                  />
                  <small className="text-danger"></small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Email
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("email") as unknown as Record<any, unknown>)}
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <small className="text-danger"></small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4">
                  Password
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("password") as unknown as Record<
                      any,
                      unknown
                    >)}
                    type="password"
                    placeholder="Enter your password"
                  />
                  <small className="text-danger">
                    {/* {errors?.password && errors.password?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="4">
                  Confirm Password
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("confirmpassword") as unknown as Record<
                      any,
                      unknown
                    >)}
                    type="password"
                    placeholder="Enter your confirm password"
                  />
                  <small className="text-danger">
                    {/* {errors?.password && errors.password?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextPancard"
              >
                <Form.Label column sm="4">
                  Pancard
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("pancard") as unknown as Record<
                      any,
                      unknown
                    >)}
                    type="text"
                    placeholder="Enter your Pancard nunber"
                  />
                  <small className="text-danger">
                    {/* {errors?.password && errors.password?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlainNumberPhone"
              >
                <Form.Label column sm="4">
                  Phone
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    {...(register("phone") as unknown as Record<any, unknown>)}
                    type="number"
                    placeholder="Enter your Phone"
                  />
                  <small className="text-danger"></small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2 p-2"
                controlId="formPlaintextPassword"
              >
                <Col sm="4">
                  <Form.Control
                    className="logBtn btn btn-success"
                    type="submit"
                    value="Register"
                  />
                </Col>
              </Form.Group>
            </Form>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Register;
