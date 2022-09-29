import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

  return (
    <Container>
      <div className="myNav">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Link
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Progetti
                </Link>
                <Link
                  className={
                    location.pathname === "/presentazione"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/presentazione"
                >
                  Profilo professionale
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default MyNav;
