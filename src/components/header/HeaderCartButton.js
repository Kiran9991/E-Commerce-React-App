import { Nav, Button } from "react-bootstrap";

const HeaderCartButton = (props) => {
  return (
    <Nav>
      <Nav.Link>
        <Button variant="light" onClick={props.onClick}>Cart 0 </Button>
      </Nav.Link>
    </Nav>
  );
};

export default HeaderCartButton;
