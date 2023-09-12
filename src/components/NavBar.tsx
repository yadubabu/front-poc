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

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);

  return (
    <Navbar bg="dark" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand className="p-2 h1 text-success" href="/">
          <span className="text-light">MV</span>BudgetPlanner
        </Navbar.Brand>
        <span className="h5 text-light">
          Hello!!
          <span className="text-success">{auth ? name : "Guest"}</span>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="navs" id="navs basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className=" text-light" href="/">
              <span className="text-success ">
                <AiFillHome />
              </span>
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/login">
              {auth ? (
                ""
              ) : (
                <>
                  <span className="text-success ">
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
                <span className="text-success">
                  <GiArchiveRegister />
                </span>{" "}
                Register
              </Nav.Link>
            ) : (
              <Nav.Link className="text-light" href="/register">
                <span className="text-success ">
                  <GiArchiveRegister />
                </span>{" "}
                Register
              </Nav.Link>
            )}
            <Nav.Link className="text-light" href="/about">
              <span className="text-success ">
                <BsFillChatLeftDotsFill />
              </span>
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="/logout">
              {auth ? (
                <>
                  <span className="text-success">
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
