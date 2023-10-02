import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { registerApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import "./style.css";
import { registerOptions } from "../validators/register/registerOptions";
import RegisterErrors from "../validators/register/RegisterErrors";
import LoadingPage from "./LoadingPage";
import MessageModal from "../components/MessageModal";
type FormData = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  pancard: string;
  phone: number;
};

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const auth = useSelector<Auth>((state) => state.auth);
  const [msg, setMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });
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
      setShowModal(true);
      reset();
    }
  };

  return (
    <>
      {!auth && (
        <>
          <form
            className="form mb-5"
            id="regi"
            onSubmit={handleSubmit(submitHandle)}
          >
            <div className="h2 text-center text-indigo-700 font-bold">
              Register Here!
            </div>
            {msg === "Successfully Registered" ? (
              <>
                <MessageModal msg={msg} />
              </>
            ) : (
              ""
            )}
            <div className="row m-4">
              <label className="col-4 m-1">Name</label>
              <input
                className="col-7 m-1"
                {...register("name", registerOptions.name)}
                type="text"
                placeholder="Enter your Name"
              />
              <small className="text-danger">
                {errors.name && <RegisterErrors msg={errors.name.message} />}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Email</label>
              <input
                className="col-7 m-1"
                {...register("email", registerOptions.email)}
                type="text"
                placeholder="Enter your Email"
              />
              <small className="text-danger">
                {errors.email && <RegisterErrors msg={errors.email.message} />}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Password</label>
              <input
                className="col-7 m-1"
                {...register("password", registerOptions.password)}
                type="password"
                placeholder="Enter your password"
              />
              <small className="text-danger">
                {errors.password && (
                  <RegisterErrors msg={errors.password.message} />
                )}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">ConfirmPassword</label>
              <input
                className="col-7 m-1"
                {...register(
                  "confirmpassword",
                  registerOptions.confirmpassword
                )}
                type="password"
                placeholder="Retype your password"
              />
              <small className="text-danger">
                {errors.confirmpassword && (
                  <RegisterErrors msg={errors.confirmpassword.message} />
                )}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Pancard</label>
              <input
                className="col-7 m-1"
                {...register("pancard", registerOptions.pancard)}
                type="text"
                placeholder="Enter your Pancard"
              />
              <small className="text-danger">
                {errors.pancard && (
                  <RegisterErrors msg={errors.pancard.message} />
                )}
              </small>
            </div>
            <div className="row m-4">
              <label className="col-4 m-1">Phone</label>
              <input
                className="col-7 m-1"
                {...register("phone", registerOptions.phone)}
                type="number"
                placeholder="Enter your phone number"
              />
              <small className="text-danger mx-10">
                {errors.phone && <RegisterErrors msg={errors.phone.message} />}
              </small>
            </div>
            <div className="row col-3 m-4 ">
              <input
                className="formBtn text-sm bg-indigo-900 text-indigo-100 uppercase h-8 rounded-full"
                type="submit"
                value="Register"
              />
            </div>
            <div className="text-center text-secondary ">
              Already have an account?
              <a href="/login" className="text-indigo-700 font-bold ">
                Login Here!
              </a>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
