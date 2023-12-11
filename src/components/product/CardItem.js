import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { product } = props;

  const submitHandler = () => {
    cartCtx.addItem({ id: product.id+Math.random(), ...product });
  };

  console.log('product',product)

  return (
    <Card className="shadow-lg mb-4">
      <Card.Body>
        <Card.Title>
          <h5>{product.title}</h5>
        </Card.Title>
        <Link to={`/products/${product.id}`}>
          <Card.Img src={product.imageUrl} />
        </Link>
        <Card.Text>
          <h5>${product.price}</h5>
        </Card.Text>
        <Button variant="primary" onClick={submitHandler}>
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
