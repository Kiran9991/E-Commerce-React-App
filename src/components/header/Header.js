import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import header from "./Header.module.css";

const Header = (props) => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/home">
            Home
          </NavLink>
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/products">
            Store
          </NavLink>
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/about">
            About
          </NavLink>
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/contact-us">
            Contact Us
          </NavLink>
        </Nav>
        <HeaderCartButton onClick={props.onClick} />
      </Container>
    </Navbar>
  );
};

export default Header;
