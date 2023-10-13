import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { registerApi } from "../redux/apis";
import { useSelector } from "react-redux";
import { Auth } from "../dataTypes";
import "./style.css";
import { registerOptions } from "../validators/register/registerOptions";
import RegisterErrors from "../validators/register/RegisterErrors";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
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
  const navigate = useNavigate();
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
    if (response.data === "Successfully Registered") {
      toast.success(response.data,{
        theme:'colored'
      });
      reset();
      navigate("/login");
    } else {
      toast.error(response.data);
    }
  };

  return (
    <div className="flex-col  w-100">
      {!auth && (
        <div className="align-center justify-center flex mt-1">
          <form
            className="w-1/2 bg-light rounded-xl p-3"
            onSubmit={handleSubmit(submitHandle)}
          >
            <div className="h2 text-center text-indigo-700 font-bold">
              Register Here!
            </div>

            <div className="row m-4">
              <label className="col-4 m-1 font-bold">Name</label>
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
              <label className="col-4 m-1 font-bold ">Email</label>
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
              <label className="col-4 m-1 font-bold">Password</label>
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
              <label className="col-4 m-1 font-bold">ConfirmPassword</label>
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
              <label className="col-4 m-1 font-bold">Pancard</label>
              <input
                className="col-7 m-1 uppercase"
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
              <label className="col-4 m-1 font-bold">Phone</label>
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
            <div className="m-2 align-center justify-center flex w-100">
              <input
                className="p-2 bg-indigo-900 text-indigo-100 uppercase rounded-full m-1 text-sm"                type="submit"
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
        </div>
      )}
    </div>
  );
};

export default Register;
