import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";

const NavBar = () => {
  const isAuth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);
  return (
    <div className="w-100 h-16 text-xl bg-indigo-900 flex">
      <div className="text-indigo-100 font-bold w-1/3 p-3 px-3">
        <a href="/" className="p-5 h3">
          <span className="text-warning">MV</span>
          BudgetPlanner
        </a>
      </div>
      <div className="h6 text-secondary w-1/3 p-3 ">
        Hello!{" "}
        <span className="text-light  h5">{!isAuth ? "Guest" : name}</span>
      </div>
      <div className="h6 text-secondary w-1/3 p-3">
        <ul className="flex">
          <li>
            <a href="/" className="flex text-indigo-100 m-2 uppercase text-xs">
              <span>Home</span>
            </a>
          </li>
          {isAuth ? (
            ""
          ) : (
            <>
              {" "}
              <li>
                <a
                  href="/login"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  Login{" "}
                </a>
              </li>
            </>
          )}
          {isAuth ? (
            ""
          ) : (
            <>
              {" "}
              <li>
                <a
                  href="/register"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  Register
                </a>
              </li>
            </>
          )}
          <li>
            <a
              href="/about"
              className="flex text-indigo-100 m-2 uppercase text-xs"
            >
              About{" "}
            </a>
          </li>
          {isAuth ? (
            <>
              {" "}
              <li>
                <a
                  href="/logout"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
