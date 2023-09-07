import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { User } from "../dataTypes";

const NavBar = () => {
  const auth = useSelector<AppState>((state) => state.auth);
  const name = useSelector<AppState, string>((state) => state.user.name);

  return (
    <Navbar bg="dark" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand className="p-2 h1 text-success" href="/">
          <span className="text-danger">MV</span>BudgetPlanner
        </Navbar.Brand>
        <span className="h5 text-light">
          Hello!!
          <span className="text-success">{auth ? name : "Guest"}</span>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto justify-content-center align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">{auth ? "" : "Login"}</Nav.Link>
            {auth ? (
              <Nav.Link href="/register" style={{ display: "none" }}>
                Register
              </Nav.Link>
            ) : (
              <Nav.Link href="/register">Register</Nav.Link>
            )}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/logout">{auth ? "Logout" : ""}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
