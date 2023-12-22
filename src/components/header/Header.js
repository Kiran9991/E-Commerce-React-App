import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import header from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/login')
  }

  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/home">
            Home
          </NavLink>
          {isLoggedIn && <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/products">
            Store
          </NavLink>}
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/about">
            About
          </NavLink>
          <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/contact-us">
            Contact Us
          </NavLink>
          {!isLoggedIn && <NavLink activeClassName={header.navLinks} className={header.navInactive} to="/login">
            Login
          </NavLink>}
        </Nav>
        {isLoggedIn && <HeaderCartButton onClick={props.onClick} />}
        {isLoggedIn && <Button variant="secondary" type="button" onClick={logoutHandler}>Logout</Button>}
      </Container>
    </Navbar>
  );
};

export default Header;
