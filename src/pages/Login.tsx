import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import LoginErrors from "../validators/login/LoginErrors";
import { LoginOptions } from "../validators/login/LoginOptions";
import LoadingPage from "./LoadingPage";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });
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
      {msg}
      {/* {msg ? msg : ""}
      {msg === "Successfully Login" ? (
        <>
          {setTimeout(() => {
            window.location.href = "/dashboard";
          }, 1000) && (
            <>
              <LoadingPage />
            </>
          )}
        </>
      ) : (
        ""
      )} */}
      {!auth && (
        <>
          <form className="form" onSubmit={handleSubmit(submitHandle)}>
            <div className="row m-4">
              <label className="col-3 m-1">Email</label>
              <input
                className="col-8 m-1"
                {...register("email", LoginOptions.email)}
                type="text"
                placeholder="Enter your Email"
              />
              <small className="text-danger">
                {errors.email && <LoginErrors msg={errors.email.message} />}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-3 m-1">Password</label>
              <input
                className="col-8 m-1"
                {...register("password", LoginOptions.password)}
                type="password"
                placeholder="Enter your password"
              />
              <small className="text-danger">
                {errors.password && (
                  <LoginErrors msg={errors.password.message} />
                )}
              </small>
            </div>
            <div className="row col-3 m-4">
              <input
                className="formBtn btn btn-warning center"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
