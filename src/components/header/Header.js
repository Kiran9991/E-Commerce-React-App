import React from "react";
import { Outlet, Link } from 'react-router-dom';

import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";
import header from './Header.module.css';

const Header = (props) => {
  return (
    <>
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/' className={header.navlink}>Home</Link>
          <Link to='/products' className={header.navlink}>Store</Link>
          <Link to='/about' className={header.navlink}>About</Link>
        </Nav>
        <HeaderCartButton onClick={props.onClick}/>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
};

export default Header;
