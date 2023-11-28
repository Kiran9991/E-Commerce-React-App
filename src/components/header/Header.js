import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <HeaderCartButton onClick={props.onClick}/>
      </Container>
    </Navbar>
  );
};

export default Header;
