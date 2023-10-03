import "./style.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);
  const [menu, setMenu] = useState("hidden");
  // const appLogout = () => {
  //   sessionStorage.removeItem("data");
  // };
  return (
    <div className="bg-indigo-900 w-100 h-auto flex">
      <div className="w-1/3 p-2 m-3">
        {" "}
        <NavLink
          className="mx-3 z-50 text-2xl font-bold text-warning bg-indigo-900"
          to="/"
        >
          <span className="text-warning">MV</span>
          <span className="text-light">BudgetPlanner</span>
        </NavLink>
      </div>
      <div className="hidden lg:flex w-1/4 p-2 m-3">
        <span className="text-secondary ">Hello!</span>
        <span className=" text-indigo-100 h5 pl-1">
          {auth ? name.split(" ")[0] : "Guest"}
        </span>
      </div>
      <div className="hidden lg:flex w-1/4 p-3 m-3 uppercase text-xs p-2 m-2 text-indigo-100">
        <NavLink to="/">
          <span className="p-2">Home</span>
        </NavLink>
        {auth ? (
          <NavLink to="/login">
            <span className="p-2" style={{ display: "none" }}>
              Login
            </span>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <span className="p-2">Login</span>
          </NavLink>
        )}
        {auth ? (
          <NavLink to="/register">
            <span className="p-2" style={{ display: "none" }}>
              Register
            </span>
          </NavLink>
        ) : (
          <NavLink to="/register">
            <span className="p-2">Register</span>
          </NavLink>
        )}
        <NavLink to="/about">
          <span className="p-2">About</span>
        </NavLink>
        {!auth ? (
          <NavLink to="/logout">
            <span className="p-2" style={{ display: "none" }}>
              Logout
            </span>
          </NavLink>
        ) : (
          <NavLink to="/logout">
            <span className="p-2">Logout</span>
          </NavLink>
        )}
      </div>
      <div className=" pt-4 m-1 lg:hidden">
        <button className="text-white">
          {menu === "" ? (
            <>
              <GiCancel className="ml-80" onClick={() => setMenu("hidden")} />
            </>
          ) : (
            <>
              <AiOutlineMenuUnfold
                className="w-5 h-5 pl-50 mx-80 "
                onClick={() => setMenu("")}
              />
            </>
          )}
        </button>
        <div className={`${menu} flex  m-1 p-1  `}>
          {" "}
          <ul>
            <li className="text-center text-indigo-100 p-1 m-1">
              <NavLink to="/">Home</NavLink>
            </li>
            {auth ? (
              <li className="hidden text-center text-indigo-100 p-1 m-1">
                <NavLink to="/login">Login</NavLink>
              </li>
            ) : (
              <li className="text-center text-indigo-100 p-1 m-1">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {auth ? (
              <li className="hidden text-center text-indigo-100 p-1 m-1">
                <NavLink to="/register">Register</NavLink>
              </li>
            ) : (
              <li className="text-center text-indigo-100 p-1 m-1">
                <NavLink to="/register">Register</NavLink>
              </li>
            )}

            <li className="text-center text-indigo-100 p-1 m-1">
              <NavLink to="/about">About</NavLink>
            </li>
            {auth ? (
              <li className="text-center text-indigo-100 p-1 m-1">
                <NavLink
                  to="/"
                  onClick={() => sessionStorage.removeItem("data")}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
