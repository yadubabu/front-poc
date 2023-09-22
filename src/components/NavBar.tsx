import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiFillHome } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
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
        Hello! <span className="text-light  h5">{!auth ? "Guest" : name}</span>
      </div>
      <div className="h6 text-secondary w-1/3 p-3">
        <ul className="flex">
          <li>
            <a href="/" className="flex text-indigo-100 m-2 uppercase text-xs">
              <span className="p-1 text-black ">
                <AiFillHome />
              </span>
              <span>Home</span>
            </a>
          </li>
          {auth ? (
            ""
          ) : (
            <>
              {" "}
              <li>
                <a
                  href="/login"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  <span className="p-1 text-black ">
                    <RiLoginCircleFill />
                  </span>
                  Login{" "}
                </a>
              </li>
            </>
          )}
          {auth ? (
            ""
          ) : (
            <>
              {" "}
              <li>
                <a
                  href="/register"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  <span className="p-1 text-black ">
                    <GiArchiveRegister />
                  </span>
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
              <span className="p-1 text-black ">
                <BsFillChatLeftDotsFill />
              </span>
              About{" "}
            </a>
          </li>
          {auth ? (
            <>
              {" "}
              <li>
                <a
                  href="/logout"
                  className="flex text-indigo-100 m-2 uppercase text-xs"
                >
                  <span className="p-1 text-black">
                    <RiLogoutCircleRFill />
                  </span>
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
    // <Navbar bg="black" expand="lg" variant="light">
    //   <Container>
    //     <Navbar.Brand className="logo h1 text-warning" href="/">
    //       <span className="text-light">MV</span>BudgetPlanner
    //     </Navbar.Brand>
    //     <span className="p-2  h6 hello text-secondary">
    //       Hello!!
    //       <span className="p-2 text-warning h5">{auth ? name : "Guest"}</span>
    //     </span>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav " />
    //     <Navbar.Collapse className="navs" id="navs basic-navbar-nav">
    //       <Nav className=" me-auto text-center">
    //         <Nav.Link className="text-light" href="/">
    //           <span className="p-1 text-warning ">
    // <AiFillHome />
    //           </span>
    //           Home
    //         </Nav.Link>
    // {!auth ? (
    //   <Nav.Link
    //     className="text-light"
    //     href="/dashboard"
    //     style={{ display: "none" }}
    //   >
    //     <span className="p-1 text-warning">
    //       <BiSolidDashboard />
    //     </span>
    //     Dashbord
    //   </Nav.Link>
    // ) : (
    //   <Nav.Link className="text-light" href="/dashboard">
    //     <span className="p-1 text-warning ">
    //       <BiSolidDashboard />
    //     </span>
    //     Dashboard
    //   </Nav.Link>
    // )}
    //         <Nav.Link className="text-light" href="/login">
    //           {auth ? (
    //             ""
    //           ) : (
    //             <>
    //               <span className="p-1 text-warning ">
    // <RiLoginCircleFill />
    //               </span>
    //               Login
    //             </>
    //           )}
    //         </Nav.Link>
    // {auth ? (
    //   <Nav.Link
    //     className="text-light"
    //     href="/register"
    //     style={{ display: "none" }}
    //   >
    //     <span className="p-1 text-warning">
    //       <GiArchiveRegister />
    //     </span>
    //     Register
    //   </Nav.Link>
    // ) : (
    //   <Nav.Link className="text-light" href="/register">
    // <span className="p-1 text-warning ">
    //   <GiArchiveRegister />
    // </span>
    //     Register
    //   </Nav.Link>
    // )}
    //         <Nav.Link className="text-light" href="/about">
    // <span className="p-1 text-warning ">
    //   <BsFillChatLeftDotsFill />
    // </span>
    // About
    //         </Nav.Link>
    //         <Nav.Link className="text-light" href="/logout">
    // {auth ? (
    //   <>
    // <span className="p-1 text-warning">
    //   <RiLogoutCircleRFill />
    // </span>
    // Logout
    //   </>
    // ) : (
    //   ""
    // )}
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
