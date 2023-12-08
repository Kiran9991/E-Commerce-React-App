import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import header from "./Header.module.css";

const Header = (props) => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>E - Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/"
              className={`${header.navlink} ${
                location.pathname === "/" ? header.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${header.navlink} ${
                location.pathname === "/products" ? header.active : ""
              }`}
            >
              Store
            </Link>
            <Link
              to="/about"
              className={`${header.navlink} ${
                location.pathname === "/about" ? header.active : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className={`${header.navlink} ${
                location.pathname === "/contact-us" ? header.active : ""
              }`}
            >
              Contact Us
            </Link>
          </Nav>
          <HeaderCartButton onClick={props.onClick} />
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
