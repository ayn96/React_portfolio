import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import "../css/style.css";

export default function Header(props) {
  return (
    <>
      <Navbar expand="lg" className="nav" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-3" style={{ width: "100%", justifyContent: "space-around" }}>
              {props.menu.map((menuObj, idx) => {
                return (
                  <NavLink key={idx} to={menuObj.url} className="nav-link" activeClassName="active">{menuObj.text}</NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
