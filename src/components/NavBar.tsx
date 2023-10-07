import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink,Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import {IoIosNotifications} from 'react-icons/io';
import {BiSolidBadge} from 'react-icons/bi';
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
        <Link to='/messages'  className="w-1/6 pt-2 flex">
          <span className="relative ">
              <IoIosNotifications className="text-light w-8 h-8 pt-2"/>
          </span>
          {messages !== null &&
      messages
        .slice(-1)
        .map((message: Messages) => { 
          if(message.message.split(' ')[0]==='Available'){
            return(<span className="absolute text-warning"><GoAlertFill/></span>)
          
          }
          else if(message.message.split(' ')[0]==='There'){
            return(<span className="absolute text-danger"><MdDangerous/></span>)
          
          }
          else{
            return(<span className="absolute text-info w-3 h-3"><BiSolidBadge/></span>
            )
          }
         })
    }
        </Link>
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
            {isAuth ? (
              <li className="hidden text-center text-indigo-100 p-1 m-1">
                <NavLink to="/login">Login</NavLink>
              </li>
            ) : (
              <li className="text-center text-indigo-100 p-1 m-1">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {isAuth ? (
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
            {isAuth ? (
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
