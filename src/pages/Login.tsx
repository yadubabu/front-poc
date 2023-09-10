import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import logImg from "../assets/home1.jpg";

const Login = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const submitHandle = async (data: any) => {
    const { email, password } = data;
    if (email === "" || password === "") {
      setMsg("All fields are mandatory");
    } else if (password.length < 6 || password.length > 10) {
      setMsg("Password should be 6 characters");
    }
    const result = await axios.post(loginApi, {
      email,
      password,
    });
    if (result) {
      sessionStorage.setItem("data", JSON.stringify(result.data));
      setMsg(result.data.msg);
    }
  };
  const registerOptions = {
    email: { required: "Email cannot be blank" },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be atleast 6 characters",
      },
      maxLength: {
        value: 10,
        message: "Password not more than 10 characters",
      },
    },
  };
  return (
    <>
      <div className="logImg">
        <img src={logImg} alt="" />
      </div>
      <div className="mt-3 md-6 login" id="login">
        <span className="text-success h4"> {msg}</span>
        {msg === "Successfully Login" ? (
          <>
            {setTimeout(() => {
              window.location.href = "/dashboard";
            }, 2000)}
          </>
        ) : (
          ""
        )}
        {!auth && (
          <>
            <Form
              className="m-5 p-3 loginForm"
              onSubmit={handleSubmit(submitHandle)}
            >
              <Form.Group
                as={Row}
                className="mt-3 m-2"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    {...(register("email") as unknown as Record<any, unknown>)}
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <small className="text-danger">
                    {/* {errors?.email && errors.email?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 m-2"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="9">
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
              <Form.Group as={Row} className="mb-3">
                <Col sm="4" className="mb-2 mt-2">
                  <Form.Control
                    className="logBtn btn btn-warning"
                    type="submit"
                    value="Login"
                    style={{ width: "100px" }}
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

export default Login;
