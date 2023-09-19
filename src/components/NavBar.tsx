import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
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
    <Navbar bg="black" expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="h1 text-warning" href="/">
          <span className="text-light">MV</span>BudgetPlanner
        </Navbar.Brand>
        <span className="p-1 h6 hello text-secondary">
          Hello!!
          <span className="p-1 text-warning h5">{auth ? name : "Guest"}</span>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="navs" id="navs basic-navbar-nav">
          <Nav className="p-2 me-auto text-center">
            <Nav.Link className="text-light" href="/">
              <span className="text-warning ">
                <AiFillHome />
              </span>
              Home
            </Nav.Link>
            {!auth ? (
              <Nav.Link
                className="text-light"
                href="/dashboard"
                style={{ display: "none" }}
              >
                {" "}
                <span className="text-warning">
                  <BiSolidDashboard />
                </span>{" "}
                Dashbord
              </Nav.Link>
            ) : (
              <Nav.Link className="text-light" href="/dashboard">
                <span className="text-warning ">
                  <BiSolidDashboard />
                </span>{" "}
                Dashboard
              </Nav.Link>
            )}{" "}
            <Nav.Link className="text-light" href="/login">
              {auth ? (
                ""
              ) : (
                <>
                  <span className="text-warning ">
                    <RiLoginCircleFill />
                  </span>
                  Login
                </>
              )}
            </Nav.Link>
            {auth ? (
              <Nav.Link
                className="text-light"
                href="/register"
                style={{ display: "none" }}
              >
                {" "}
                <span className="text-warning">
                  <GiArchiveRegister />
                </span>{" "}
                Register
              </Nav.Link>
            ) : (
              <Nav.Link className="text-light" href="/register">
                <span className="text-warning ">
                  <GiArchiveRegister />
                </span>{" "}
                Register
              </Nav.Link>
            )}
            <Nav.Link className="text-light" href="/about">
              <span className="text-warning ">
                <BsFillChatLeftDotsFill />
              </span>
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="/logout">
              {auth ? (
                <>
                  <span className="text-warning">
                    {" "}
                    <RiLogoutCircleRFill />
                  </span>
                  Logout
                </>
              ) : (
                ""
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
