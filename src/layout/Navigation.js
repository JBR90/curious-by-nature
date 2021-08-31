import React from "react";
import { NavStyled } from "./Nav.Styled";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavStyled>
      div.
      <div className="links">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
      </div>

      {/* <Nav className="justify-content-center">
        <Navbar.Brand as={Link} to="/">
          Curious by nature
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/about">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Active</Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Nav> */}
    </NavStyled>
  );
};

export default Navigation;
