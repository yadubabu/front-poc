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
import { registerOptions } from "../validators/register/registerOptions";
import RegisterErrors from "../validators/register/RegisterErrors";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  pancard: string;
  phone: number;
};

const Register = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });
  const submitHandle = async (data: FieldValues) => {
    const { name, email, password, confirmpassword, pancard, phone } = data;

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
          <>{(window.location.href = "/login")}</>
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
                    {...register("name", registerOptions.name)}
                    type="text"
                    placeholder="Enter your name"
                  />
                  <small className="h6 text-danger">
                    {errors.name && (
                      <RegisterErrors msg={errors.name.message} />
                    )}
                  </small>{" "}
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
                    {...register("email", registerOptions.email)}
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <small className="h6 text-danger">
                    {errors.email && (
                      <RegisterErrors msg={errors.email.message} />
                    )}
                  </small>{" "}
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
                    {...register("password", registerOptions.password)}
                    type="password"
                    placeholder="Enter your password"
                  />
                  <small className="h6 text-danger">
                    {errors.password && (
                      <RegisterErrors msg={errors.password.message} />
                    )}
                  </small>{" "}
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
                    {...register(
                      "confirmpassword",
                      registerOptions.confirmpassword
                    )}
                    type="password"
                    placeholder="Enter your confirm password"
                  />
                  <small className="h6 text-danger">
                    {errors.confirmpassword && (
                      <RegisterErrors msg={errors.confirmpassword.message} />
                    )}
                  </small>{" "}
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
                    {...register("pancard", registerOptions.pancard)}
                    type="text"
                    placeholder="Enter your Pancard nunber"
                  />
                  <small className="h6 text-danger">
                    {errors.pancard && (
                      <RegisterErrors msg={errors.pancard.message} />
                    )}
                  </small>{" "}
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
                    {...register("phone", registerOptions.phone)}
                    type="number"
                    placeholder="Enter your Phone"
                  />
                  <small className="h6 text-danger">
                    {errors.phone && (
                      <RegisterErrors msg={errors.phone.message} />
                    )}
                  </small>{" "}
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
