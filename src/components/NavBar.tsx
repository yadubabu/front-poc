import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import {IoIosNotifications} from 'react-icons/io';
import {BiSolidBadge} from 'react-icons/bi';
import { messageService } from "../redux/services/allServices";
import { Dispatch } from "redux";
import { Messages } from "../dataTypes";

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);

  const dispatch: Dispatch<any> = useDispatch();
  const email=useSelector<AppState,string>(state=>state.user.email);
  useEffect(()=>{
      dispatch(messageService(email))
    },[])
  const [menu, setMenu] = useState("hidden");

  return (
    <div className="bg-indigo-900 w-100 h-auto flex align-center justify-between">
      <div className=" p-2 m-3">
        {" "}
        <NavLink
          className="mx-3 z-50 text-2xl font-bold text-warning bg-indigo-900"
          to="/"
        >
          <span className="text-warning">MV</span>
          <span className="text-light">BudgetPlanner</span>
        </NavLink>
      </div>
      <div className="hidden lg:flex  p-2 m-3">
        <span className="text-warning ">Hello!</span>
        <span className=" text-indigo-100 h5 pl-1">
          {auth ? name.split(" ")[0] : "Guest"}
        </span>
        
      </div>
      <div className="h-1/2">
        <NavLink to='/messages'  className="w-1/7 pt-3 flex"><span className="relative ">
              <IoIosNotifications className="text-light w-9 h-9 pt-2"/>
</span>
<span className="absolute "><BiSolidBadge/></span></NavLink>
            </div>
      <div className="hidden md:flex lg:flex  p-3 m-3 uppercase text-sm p-2 m-2 text-indigo-100">
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
      <div className=" pt-4 m-1 lg:hidden md:hidden sm:ml-80">
        <button className="text-white">
          {menu === "" ? (
            <>
              <GiCancel className="" onClick={() => setMenu("hidden")} />
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
            {/* {auth ? (<li> */}
            
            {/* ):''} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
