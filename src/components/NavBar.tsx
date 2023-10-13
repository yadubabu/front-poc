import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink,Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import {IoIosNotifications} from 'react-icons/io';
import {BiSolidMessageRoundedDots} from 'react-icons/bi';
import { messageService } from "../redux/services/allServices";
import { Dispatch } from "redux";
import {GoAlertFill} from 'react-icons/go';
import {MdDangerous} from 'react-icons/md';
import { Messages } from "../dataTypes";

const NavBar = () => {
  const isAuth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);
  const messages=useSelector<AppState,Messages[]>(state=>state.messages);

  const dispatch: Dispatch<any> = useDispatch();
  const email=useSelector<AppState,string>(state=>state.user.email);
  useEffect(()=>{
      dispatch(messageService(email))
    },[messages])
  const [menu, setMenu] = useState("hidden");
  const key=isAuth ? '':'hidden';  

 
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
          {isAuth ? name.split(" ")[0] : "Guest"}
        </span>
        
      </div>
      <div className={`w-1/7 m-3 ${key}`}>
        <NavLink to='/messages'  className="w-1/7 pt-2 flex"><span className="relative ">
              <IoIosNotifications className="text-light w-8 h-8 pt-2"/>
</span>
<span className="absolute text-danger"><BiSolidBadge/></span></NavLink>
            </div>
      <div className="hidden md:flex lg:flex  p-3 m-3 uppercase text-sm  text-indigo-200">
        <NavLink to="/">
          <span className="p-2">Home</span>
        </NavLink>
        {isAuth ? (
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
        {isAuth ? (
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
        {!isAuth ? (
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
      <div className="lg:hidden md:hidden pb-2 m-1 sm:flex-col sm:w-100 align-center justify-center">
        <button className="text-white ">
          {menu === "" ? (
            <span className="mx-4">
              <GiCancel className="mx-10" onClick={() => setMenu("hidden")} />
            </span>
          ) : (
            <>
              <AiOutlineMenuUnfold
                className="w-5 h-5 mx-4 my-4  "
                onClick={() => setMenu("")}
              />
            </>
          )}
        </button>
        <div className={`${menu} flex align-center justify-center text-center w-1/2`}>
          {" "}
          <ul className="flex-col">
            <li className=" text-indigo-100">
              <NavLink to="/" className='mr-80 pr-40'>Home</NavLink>
            </li>
            {isAuth ? (
             ''
            ) : (
              <li className="text-indigo-100 ">
                <NavLink to="/login" className='mr-80 pr-40'>Login</NavLink>
              </li>
            )}
            {isAuth ? (
''
            ) : (
              <li className="text-indigo-100">
                <NavLink to="/register" className='mr-80 pr-40'>Register</NavLink>
              </li>
            )}

            <li className="text-indigo-100">
              <NavLink to="/about" className='mr-80 pr-40'>About</NavLink>
            </li>
            {isAuth ? (
              <li className="text-indigo-100">
                <NavLink
                  to="/"
                  className='mr-80 pr-40'
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
