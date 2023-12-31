import { Container, Row, Col } from "react-bootstrap";

import classes from "./Products.module.css";
import CardItem from "./CardItem";
import { Fragment } from "react";

const Products = () => {
  const productsArr = [
    {
      id: "1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: "2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: "3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id: "4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];

  return (
    <Fragment>
      <h2 className={classes.container}>Music</h2>
      <Container className="mt-3">
        <Row xs={1} md={4}>
          {productsArr.map((product, index) => (
            <Col key={index}>
              <CardItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
