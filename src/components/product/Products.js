import { Container, Row, Col } from "react-bootstrap";

import classes from "./Products.module.css";
import CardItem from "./CardItem";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      title: "Red Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <h2 className={classes["centered-container"]}>Music</h2>
      <Container className="mt-3">
        <Row>
          {productsArr.map((product, index) => (
            <Col xs={6} md={3} key={index}>
              <CardItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
