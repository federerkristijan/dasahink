import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand href="/">Dasa Hink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/art">Art</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/domination">Domination</Nav.Link>
            <Nav.Link href="/film">Film</Nav.Link>
            <Nav.Link href="/music">Music</Nav.Link>
            {/* <NavDropdown
              title="Members Area"
              className="dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="action/3.2">Signin</NavDropdown.Item>
              <NavDropdown.Item href="action/3.3">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="action/3.4">Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* removing the cart for the memebers area and inside is the cart? */}
        <Nav.Link href="#cart" className="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
