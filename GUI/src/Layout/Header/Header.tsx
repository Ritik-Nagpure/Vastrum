import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../public/extras/vastrum-logo.png";

function Header() {
  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="bg-gray-300">
            <Link to="/">
              <div className="flex flex-row gap-2">
                <img src={logo} className="w-6 h-6" />
                <p className="samarkan">Vastrum</p>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Link</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/">Action</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/">Another action</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/">Something</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/">Separated link</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
