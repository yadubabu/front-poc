import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import logImg from "../assets/home1.jpg";

const Login = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitHandle = async (data: FieldValues) => {
    const { email, password } = data;

    const result = await axios.post(loginApi, {
      email,
      password,
    });
    if (result) {
      sessionStorage.setItem("data", JSON.stringify(result.data));
      reset();
      setMsg(result.data.msg);
    }
  };

  return (
    <>
      <div className="logImg">
        <img src={logImg} alt="" />
      </div>
      <div className="mt-1 mb-3 login" id="login">
        {msg === "Successfully Login" ? (
          <>
            {setTimeout(() => {
              window.location.href = "/dashboard";
            }, 0)}
          </>
        ) : (
          ""
        )}
        {!auth && (
          <>
            <Form
              className=" loginForm p-3"
              onSubmit={handleSubmit(submitHandle)}
            >
              <Form.Group
                as={Row}
                controlId="formPlaintextEmail"
                className="m-3"
              >
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    {...register("email")}
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <small className="text-danger">
                    {/* {errors?.email && errors.email?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group
                className="m-3"
                as={Row}
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="8" className="mx-1">
                  <Form.Control
                    {...register("password")}
                    type="password"
                    placeholder="Enter your password"
                  />
                  <small className="text-danger">
                    {/* {errors?.password && errors.password?.message} */}
                  </small>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm="3" className="mb-1">
                  <Form.Control
                    className="logBtn btn btn-success"
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
