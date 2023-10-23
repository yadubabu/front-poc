import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { loginApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import LoginErrors from "../validators/login/LoginErrors";
import { LoginOptions } from "../validators/login/LoginOptions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const isAuth = useSelector<Auth>((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });
  const submitHandle = async (data: FieldValues) => {
    const { email, password } = data;
    try {
      const result = await axios.post(loginApi, {
        email,
        password,
      });
      if (result.data.msg === "Successfully Login") {
        sessionStorage.setItem("data", JSON.stringify(result.data));
        toast.success(result.data.msg);
        window.location.href = "/dashboard";
      } else {
        toast.error(result.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="homeForm flex-col  w-100">
        
      {!isAuth && (
        <div className="align-center justify-center flex mt-20">
          <form className="w-1/2 bg-light rounded-xl p-3" onSubmit={handleSubmit(submitHandle)}>
            <h1
              className="text-center h3 font-bold text-indigo-900"
              style={{ fontFamily: "sans-serif" }}
            >
              Login Here!
            </h1>
            <div className="row m-4">
              <label className="col-4 m-1 font-bold p-1">Email</label>
              <input
                className="col-7 m-1"
                {...register("email", LoginOptions.email)}
                type="text"
                placeholder="Enter your Email"
              />
              <small className="text-danger">
                {errors.email && <LoginErrors msg={errors.email.message} />}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1 font-bold p-1">Password</label>
              <input
                className="col-7 m-1"
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
            <div className="m-2 align-center justify-center flex w-100">
              <input
                className="p-2 bg-indigo-900 text-indigo-100 uppercase rounded-full m-1 text-sm"
                type="submit"
                value="Login"
              />
            </div>
            <div className="text-center text-secondary m-2 font-medium" data-testid='dontAccount'>
              Don't you have an account?
              <a href="/register" className="text-indigo-900 font-bold">
                Register Here!
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
