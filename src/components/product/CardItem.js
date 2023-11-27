import { Card, Button } from "react-bootstrap";

const CardItem = (props) => {
  return (
    <Card className="shadow-lg mb-4">
      <Card.Body>
        <Card.Title>
          <h5>{props.product.title}</h5>
        </Card.Title>
        <Card.Img src={props.product.imageUrl} />
        <Card.Text>
          <h5>${props.product.price}</h5>
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
