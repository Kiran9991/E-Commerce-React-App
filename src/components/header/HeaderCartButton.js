import { Nav, Button } from "react-bootstrap";

const HeaderCartButton = () => {
  return (
    <Nav>
      <Nav.Link>
        <Button variant="light">Cart 0 </Button>
      </Nav.Link>
    </Nav>
  );
};

export default HeaderCartButton;
