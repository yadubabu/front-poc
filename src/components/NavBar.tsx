import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { AiFillHome } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);

  return (
    <div className="w-100 h-16 text-xl bg-black flex">
      <div className="text-warning font-bold w-1/3 p-3 px-3">
        <a href="/">
          <span className="text-light justify-self-start ">MV</span>
          BudgetPlanner
        </a>
      </div>
      <div className="h6 text-secondary w-1/3 p-3">
        Hello <span className="text-warning h5">{!auth ? "Guest" : name}</span>
      </div>
      <div>
        <ul className="flex w-1/3 py-3">
          <li>
            {" "}
            <a href="/" className="text-sm text-light flex p-2">
              <span className="p-1 text-warning">
                <AiFillHome />
              </span>
              Home
            </a>
          </li>
          <li>
            {!auth ? (
              ""
            ) : (
              <a className="text-sm text-light flex p-2" href="/dashboard">
                <span className="p-1  text-warning ">
                  <BiSolidDashboard />
                </span>
                Dashboard
              </a>
            )}
          </li>
          <li>
            <a className="text-sm text-light flex p-2" href="/login">
              {!auth ? (
                <>
                  <span className="p-1 text-warning ">
                    <RiLoginCircleFill />
                  </span>
                  Login
                </>
              ) : (
                ""
              )}
            </a>
          </li>
          <li>
            {auth ? (
              <a
                className="text-sm text-light flex p-2"
                href="/register"
                style={{ display: "none" }}
              >
                <span className="p-1 text-warning">
                  <GiArchiveRegister />
                </span>
                Register
              </a>
            ) : (
              <a className="text-sm text-light flex p-2" href="/register">
                <span className="p-1 text-warning ">
                  <GiArchiveRegister />
                </span>
                Register
              </a>
            )}
          </li>
          <li>
            <a href="/about" className="text-sm text-light flex p-2">
              <span className="p-1  text-warning ">
                <BsFillChatLeftDotsFill />
              </span>
              About
            </a>
          </li>
          <li>
            {auth ? (
              <a href="/logout" className="text-sm text-light flex p-2">
                <span className="p-1 text-warning">
                  <RiLogoutCircleRFill />
                </span>
                Logout
              </a>
            ) : (
              ""
            )}
          </li>
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
    //     <span className="p-1 text-warning ">
    //       <GiArchiveRegister />
    //     </span>
    //     Register
    //   </Nav.Link>
    // )}
    //         <Nav.Link className="text-light" href="/about">
    //           <span className="p-1 text-warning ">
    //             <BsFillChatLeftDotsFill />
    //           </span>
    //           About
    //         </Nav.Link>
    //         <Nav.Link className="text-light" href="/logout">
    // {auth ? (
    //   <>
    //     <span className="p-1 text-warning">
    //       <RiLogoutCircleRFill />
    //     </span>
    //     Logout
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
