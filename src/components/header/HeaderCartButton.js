import { useContext, Fragment } from "react";
import { Nav, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;

  cartCtx.items.forEach((item) => (quantity += item.quantity));

  return (
    <Fragment>
      <Nav>
        <Nav.Link>
          <Button variant="light" onClick={props.onClick}>
            Cart {quantity}{" "}
          </Button>
        </Nav.Link>
      </Nav>
    </Fragment>
  );
};

export default HeaderCartButton;
